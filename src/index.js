const samp = require("samp-node-lib");

const hash = require("md5");

const database = require("./databaseFunctions/dbConfig");

//TextDrawLoaders
const {RegisterTextDrawsLoader} = require("./TextDrawsLoaders/RegisterTextDraws");

//Helper Functions
const GetPlayerNameString = require("./helperFunctions/GetPlayerNameString");

//Dialogs
const {
    registerDialogPass,
    registerDialogEmail,
    registerDialogPol,
    registerDialogGodine,
    registerDialogDrzava,
    loginDialog } = require("./variables/dialogs");

//Colors
const {
    darkGreen,
    darkRed,
    white,
    whiteWithoutHash,
    darkGreenWithoutHash,
    dialogDefaultColorWithoutHash
} = require("./variables/colors");

//TextDraws
let RegisterTextDraws = [];

//PlayersInfo
let players = [];

samp.OnGameModeInit(() => { 
    // samp.AddPlayerClass(0, 2095.5671, 1433.1622, 10.8203, 92.4388, 0, 0, 0, 0, 0, 0);
    samp.AddPlayerClass(294, 401.5687, -1536.4258, 32.2734, 223.7568, 0, 0, 0, 0, 0, 0); 
    samp.AddStaticVehicle(579, 401.5687, -1536.4258, 32.2734, 223.7568, -1, -1);
    
    RegisterTextDrawsLoader(RegisterTextDraws);

    return true;
});

samp.OnPlayerConnect((playerid) => {
    players[playerid] = {
        nickname: "",
        pass: "",
        email: "",
        pol: '',
        godine: 0,
        drzava: 0,
        wrongPassRepeat: 0,
        isRegistered: false,
        isLoggedIn: false
    };

    players[playerid].nickname = GetPlayerNameString(playerid);
    players[playerid].nickname = players[playerid].nickname.substring(0, players[playerid].nickname.length - 1);
    console.log(players[playerid].nickname);
    try {
        const query = "SELECT id FROM players WHERE nickname = ?";
        database.query(query, [players[playerid].nickname], (err, res) => {
            if (err) {
                samp.SendClientMessage(playerid, darkRed, `[KICK] {${whiteWithoutHash}}Greska sa bazom podataka, molimo pokusajte kasnije!`);
                setTimeout(() => {playerid.Kick();}, 10);
            }
            if (res[0]) {
                players[playerid].isRegistered = true;
            }
        }); 
    } catch (err) {
        samp.SendClientMessage(playerid, darkRed, `[KICK] {${whiteWithoutHash}}Greska sa bazom podataka, molimo pokusajte kasnije!`);
        setTimeout(() => {playerid.Kick();}, 10);
    }
    return true;
})

samp.OnPlayerRequestClass((playerid) => {
    if (players[playerid].isRegistered) {
        playerid.ShowPlayerDialog(loginDialog, samp.DIALOG_STYLE.PASSWORD, "Log in", `Dobrodosao {${whiteWithoutHash}}${players[playerid].nickname} {${dialogDefaultColorWithoutHash}}na {${darkGreenWithoutHash}}Vertigo RPG!\n{${dialogDefaultColorWithoutHash}}Molimo ukucajte vasu sifru`, "Unesi", "Izlaz");
    } else {
        //Clear TextDraws
        samp.TextDrawSetString(RegisterTextDraws[3].TextDraw, "Password");
        samp.TextDrawSetString(RegisterTextDraws[4].TextDraw, "Email");
        samp.TextDrawSetString(RegisterTextDraws[5].TextDraw, "Pol");
        samp.TextDrawSetString(RegisterTextDraws[6].TextDraw, "Godine");
        samp.TextDrawSetString(RegisterTextDraws[7].TextDraw, "Drzava");

        RegisterTextDraws.forEach((TextDrawObject) => {
            samp.TextDrawShowForPlayer(playerid, TextDrawObject.TextDraw);
        });
        samp.SelectTextDraw(playerid, darkGreen);
    }
    
    
    
    samp.SetPlayerPos(playerid, 2085.5671, 1433.1622, 10.8203);
	samp.SetPlayerFacingAngle(playerid, 210.8861);
	samp.SetPlayerInterior(playerid, 0);
	return true;
});

samp.OnPlayerSpawn((playerid) => {
    if (!players[playerid].isRegistered) {
        samp.SendClientMessage(playerid, darkRed, `[KICK] {${whiteWithoutHash}}Niste se registrovali!`);
        setTimeout(() => {playerid.Kick();}, 10);
    }
    if (players[playerid].isRegistered && !players[playerid].isLoggedIn) {
        samp.SendClientMessage(playerid, darkRed, `[KICK] {${whiteWithoutHash}}Niste se ulogovali!`);
        setTimeout(() => {playerid.Kick();}, 10);
    }
    
	return true;
});

samp.OnPlayerClickTextDraw((playerid, clickedid) => {
    switch (clickedid) {
        case RegisterTextDraws[3].TextDraw:
            playerid.ShowPlayerDialog(registerDialogPass, samp.DIALOG_STYLE.PASSWORD, "Sifra", "Unesite vasu sifru", "Unesi", "Izlaz");
            break;
        case RegisterTextDraws[4].TextDraw:
            playerid.ShowPlayerDialog(registerDialogEmail, samp.DIALOG_STYLE.INPUT, "Email", "Unesite vas email", "Unesi", "Izlaz");
            break;
        case RegisterTextDraws[5].TextDraw:
            playerid.ShowPlayerDialog(registerDialogPol, samp.DIALOG_STYLE.MSGBOX, "Pol", "Odaberite pol", "Musko", "Zensko");
            break;
        case RegisterTextDraws[6].TextDraw:
            playerid.ShowPlayerDialog(registerDialogGodine, samp.DIALOG_STYLE.INPUT, "Pol", "Unesite vase godine", "Unesi", "Izlaz");
            break;
        case RegisterTextDraws[7].TextDraw:
            playerid.ShowPlayerDialog(registerDialogDrzava, samp.DIALOG_STYLE.LIST, "Drzava", "Bosna i Hercegovina\nHrvatska\nCrna gora\nKosovo\nSrbija", "Odaberi", "Izlaz");
            break;
        case RegisterTextDraws[8].TextDraw:
            let isReadyForRegistration = false;
            if (!(players[playerid].pass)) {
                samp.SendClientMessage(playerid, darkGreen, `[Vertigo RPG] {${whiteWithoutHash}}Sifra mora sadrzavati najmanje 8 karaktera, a najvise 24!`);
            } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(players[playerid].email))) {
                samp.SendClientMessage(playerid, darkGreen, `[Vertigo RPG] {${whiteWithoutHash}}Uneseni email nije validan!`);
            } else if (!(players[playerid].pol)) {
                samp.SendClientMessage(playerid, darkGreen, `[Vertigo RPG] {${whiteWithoutHash}}Niste unijeli pol!`);
            } else if (!(players[playerid].godine)) {
                samp.SendClientMessage(playerid, darkGreen, `[Vertigo RPG] {${whiteWithoutHash}}Niste unijeli godine!`);
            } else if (players[playerid].godine < 10 || players[playerid].godine > 80) {
                samp.SendClientMessage(playerid, darkGreen, `[Vertigo RPG] {${whiteWithoutHash}}Ne mozete unijeti broj manji od 10 i veci od 80 za godine!`);
            } else if (!(players[playerid].drzava)) {
                samp.SendClientMessage(playerid, darkGreen, `[Vertigo RPG] {${whiteWithoutHash}}Niste unijeli drzavu!`);
            } else {
                isReadyForRegistration = true;
            }
            if (isReadyForRegistration) {
                try {
                    const {nickname, pass, email, pol, godine, drzava} = players[playerid];
                    const query = "INSERT INTO players(nickname, pass, email, pol, godine, selectedCountryId, createdAtCountryId) VALUES (?, ?, ?, ?, ?, ?, ?)"
                    database.query(query, [nickname, pass, email, pol, godine, drzava, drzava], (err, res) => {
                        if (err) {
                            if (err.code == "ER_DUP_ENTRY") {
                                samp.SendClientMessage(playerid, darkGreen, `[Vertigo RPG] {${whiteWithoutHash}}Uneseni email se vec koristi!`);
                            } else {
                                samp.SendClientMessage(playerid, darkRed, `[KICK] {${whiteWithoutHash}}Greska sa bazom podataka, molimo pokusajte kasnije!`);
                                setTimeout(() => {playerid.Kick();}, 10);
                            }
                        } else {
                            players[playerid].isRegistered = true;
                            players[playerid].isLoggedIn = true;
                
                            RegisterTextDraws.forEach((TextDrawObject) => {
                                samp.TextDrawHideForPlayer(playerid, TextDrawObject.TextDraw);
                            });
                            samp.CancelSelectTextDraw(playerid);
                            for (let i = 0; i < 200; i++) {
                                samp.SendClientMessage(playerid, white, "");
                            }
                            samp.SendClientMessage(playerid, white, `{${darkGreenWithoutHash}}[Vertigo RPG] {${whiteWithoutHash}}Hvala vam na registraciji, uzivajte u igri!`);
                            playerid.SpawnPlayer();
                        }
                        //OVDE IDE TUTORIJAL
                    })
                } catch (err) {
                    samp.SendClientMessage(playerid, darkRed, `[KICK] {${whiteWithoutHash}}Greska sa bazom podataka, molimo pokusajte kasnije!`);
                    setTimeout(() => {playerid.Kick();}, 10);
                }
            }
            break;
        case RegisterTextDraws[9].TextDraw:
            playerid.Kick();
            break;
        default:
            break;
    }
    return 0;
});
samp.OnDialogResponse((playerid, dialogid, response, listitem, inputtext) => {
    switch (dialogid) {
        case registerDialogPass:
            if (response) {
                if (inputtext.length < 8 || inputtext.length > 24) {
                    samp.SendClientMessage(playerid, darkGreen, `[Vertigo RPG] {${whiteWithoutHash}}Sifra mora sadrzavati najmanje 8 karaktera, a najvise 24!`);
                } else {
                    players[playerid].pass = hash(inputtext);
                    samp.TextDrawSetString(RegisterTextDraws[3].TextDraw, 'x'.repeat(inputtext.length));
                }
            }
            break;
        case registerDialogEmail:
            if (response) {
                if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputtext))) {
                    samp.SendClientMessage(playerid, darkGreen, `[Vertigo RPG] {${whiteWithoutHash}}Uneseni email nije validan!`);
                } else {
                    players[playerid].email = inputtext;
                    samp.TextDrawSetString(RegisterTextDraws[4].TextDraw, inputtext);
                }
            }
            break;
        case registerDialogPol:
                if (response) {
                    players[playerid].pol = "M";
                    samp.TextDrawSetString(RegisterTextDraws[5].TextDraw, 'Musko');
                } else {
                    players[playerid].pol = "F";
                    samp.TextDrawSetString(RegisterTextDraws[5].TextDraw, 'Zensko');
                }
            break;
        case registerDialogGodine:
            if (response) {
                if (!(+inputtext)) {
                    samp.SendClientMessage(playerid, darkGreen, `[Vertigo RPG] {${whiteWithoutHash}}Niste unijeli broj!`);
                } else if (+inputtext < 10 || +inputtext > 80) {
                    samp.SendClientMessage(playerid, darkGreen, `[Vertigo RPG] {${whiteWithoutHash}}Ne mozete unijeti broj manji od 10 i veci od 80!`);
                } else {
                    players[playerid].godine = +inputtext;
                    samp.TextDrawSetString(RegisterTextDraws[6].TextDraw, inputtext);
                }
            }
            break;
        case registerDialogDrzava:
            if (response) {
                let drzava;
                switch (listitem) {
                    case 0:
                        drzava = "Bosna i Hercegovina";
                        break;
                    case 1:
                        drzava = "Hrvatska";
                        break;
                    case 2:
                        drzava = "Crna gora";
                        break;
                    case 3:
                        drzava = "Kosovo";
                        break;
                    case 4:
                        drzava = "Srbija";
                        break;
                    default:
                        break;
                }
                players[playerid].drzava = ++listitem;
                samp.TextDrawSetString(RegisterTextDraws[7].TextDraw, drzava);
            }
            break;
        case loginDialog:
            if (!response) {
                samp.SendClientMessage(playerid, darkRed, `[KICK] {${whiteWithoutHash}}Niste se ulogovali!`);
                setTimeout(() => {playerid.Kick();}, 10);
            } else {
                try {
                    const query = "SELECT id FROM players WHERE pass = ?";
                    database.query(query, [hash(inputtext)], (err, res) => {
                        if (err) {
                            samp.SendClientMessage(playerid, darkRed, `[KICK] {${whiteWithoutHash}}Greska sa bazom podataka, molimo pokusajte kasnije!`);
                            setTimeout(() => {playerid.Kick();}, 10);
                        }
                        if (res[0]) {
                            players[playerid].isLoggedIn = true;
                            try {
                                const query = "SELECT email, pol, godine, selectedCountryId FROM players WHERE nickname = ?";
                                database.query(query, [players[playerid].nickname], (err, res) => {
                                    if (err) {
                                        samp.SendClientMessage(playerid, darkRed, `[KICK] {${whiteWithoutHash}}Greska sa bazom podataka, molimo pokusajte kasnije!`);
                                        setTimeout(() => {playerid.Kick();}, 10);
                                    }
                                    if (res[0]) {
                                        players[playerid].email = res[0].email;
                                        players[playerid].pol = res[0].pol;
                                        players[playerid].godine = res[0].godine;
                                        players[playerid].drzava = res[0].selectedCountryId;
                                        playerid.SpawnPlayer();
                                    }
                                });
                            } catch (err) {
                                samp.SendClientMessage(playerid, darkRed, `[KICK] {${whiteWithoutHash}}Greska sa bazom podataka, molimo pokusajte kasnije!`);
                                setTimeout(() => {playerid.Kick();}, 10);
                            }
                        } else {
                            samp.SendClientMessage(playerid, darkGreen, `[Vertigo RPG] {${whiteWithoutHash}}Pogresna sifra, molimo pokusajte ponovo!`);
                            playerid.ShowPlayerDialog(loginDialog, samp.DIALOG_STYLE.PASSWORD, "Log in", `Dobrodosao {${whiteWithoutHash}}${players[playerid].nickname} {${dialogDefaultColorWithoutHash}}na {${darkGreenWithoutHash}}Vertigo RPG!\n{${dialogDefaultColorWithoutHash}}Molimo ukucajte vasu sifru`, "Unesi", "Izlaz");
                            ++(players[playerid].wrongPassRepeat);
                            if (players[playerid].wrongPassRepeat >= 4) {
                                samp.SendClientMessage(playerid, darkRed, `[KICK] {${whiteWithoutHash}}Pogrijesili ste sifru cetiri puta!`);
                                setTimeout(() => {playerid.Kick();}, 10);
                            }
                        }
                    });
                } catch (err) {
                    samp.SendClientMessage(playerid, darkRed, `[KICK] {${whiteWithoutHash}}Greska sa bazom podataka, molimo pokusajte kasnije!`);
                    setTimeout(() => {playerid.Kick();}, 10);
                }
            }
            break;
        default:
            break;
    }
});

samp.OnPlayerDisconnect((playerid, reason) => {
    players[playerid] = {
        nickname: "",
        pass: "",
        email: "",
        pol: '',
        godine: 0,
        drzava: 0,
        isRegistered: false,
        isLoggedIn: false
    };
});