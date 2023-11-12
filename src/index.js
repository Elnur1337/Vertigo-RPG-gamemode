const samp = require("samp-node-lib");

const events = require("events");
const CMD = new events.EventEmitter();

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

/* For Streamer */
const streamer = {
    CreateDynamicPickup: function(modelid, type, x, y, z, worldid = -1, interiorid = -1, playerid = -1, streamdistance = 200.0, areaid = -1, priority = 0) {
        var RETURN = samp.callPublic("_CreateDynamicPickup", "iifffiiifii", modelid, type, x, y, z, worldid, interiorid, playerid, streamdistance, areaid, priority);
        this.UpdateAll();
        return RETURN;
    },
    DestroyDynamicPickup: function(pickupid) {
        var RETURN = samp.callPublic("_DestroyDynamicPickup", "i", pickupid);
        this.UpdateAll();
        return RETURN;
    },
    IsValidDynamicPickup: function(pickupid) {
        return samp.callPublic("_IsValidDynamicPickup", "i", pickupid);
    },
    CreateDynamic3DTextLabel: function(text, color, x, y, z, drawdistance) {
        var RETURN = samp.callPublic("_CreateDynamic3DTextLabel", "siffff", text, color, x, y, z, drawdistance);
        this.UpdateAll();
        return RETURN;
    },
    DestroyDynamic3DTextLabel: function(id) {
        var RETURN = samp.callPublic("_DestroyDynamic3DTextLabel", "i", id);
        this.UpdateAll();
        return RETURN;
    },
    IsValidDynamic3DTextLabel: function(id) {
        samp.callPublic("_IsValidDynamic3DTextLabel", "i", id);
    },
    UpdateDynamic3DTextLabelText: function(id, color, text) {
        var RETURN = samp.callPublic("_UpdateDynamic3DTextLabelText", "iis", id, color, text);
        this.UpdateAll();
        return RETURN;
    },
    Update: function(playerid) {
        return samp.callPublic("_samp_Streamer_Update", "i", playerid);
    },
    UpdateAll: function() {
        samp.getPlayers().forEach((player) => {
            this.Update(player.playerid);
        });
    }
};

samp.OnGameModeInit(() => { 
    // samp.AddPlayerClass(294, 401.5687, -1536.4258, 32.2734, 223.7568, 0, 0, 0, 0, 0, 0); -- PRAVI
    samp.AddPlayerClass(294,1465.5649,-1726.7954,13.5469,104.0015,0,0,0,0,0,0);
    samp.AddStaticVehicle(411, 401.5687, -1533.4258, 32.2734, 223.7568, -1, -1);
    
    RegisterTextDrawsLoader(RegisterTextDraws);

    samp.DisableInteriorEnterExits();
    samp.EnableStuntBonusForAll(0);

    streamer.CreateDynamicPickup(18749, 1, 409.3643, -1543.9668, 32.2734, 0);
    streamer.CreateDynamic3DTextLabel(`{${darkGreenWithoutHash}}==================\n[Vertigo RPG]\n{${whiteWithoutHash}}Verzija: 1.0\nDeveloper: Elnur\n{${darkGreenWithoutHash}}==================`, white, 409.3643, -1543.9668, 32.2734, 8);

    streamer.CreateDynamicPickup(1318, 1, 1481.0789, -1772.0646, 18.7958, 0);
    streamer.CreateDynamic3DTextLabel(`{B7BA00}[OPSTINA]\n{${whiteWithoutHash}}Koristite F/ENTER za ulaz`, white, 1481.0789, -1772.0646, 19.7958, 8);
    streamer.CreateDynamicPickup(1318, 1, 390.1459, 173.7937, 1008.3828, 1, 3);
    streamer.CreateDynamic3DTextLabel(`{B7BA00}[OPSTINA]\n{${whiteWithoutHash}}Koristite F/ENTER za izlaz`, white, 390.1459, 173.7937, 1009.3828, 8);
    
    
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
        playerid.ShowPlayerDialog(loginDialog, samp.DIALOG_STYLE.PASSWORD, "Login", `Dobrodosao {${whiteWithoutHash}}${players[playerid].nickname} {${dialogDefaultColorWithoutHash}}na {${darkGreenWithoutHash}}Vertigo RPG!\n{${dialogDefaultColorWithoutHash}}Molimo ukucajte vasu sifru`, "Unesi", "Izlaz");
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
    
    setInterval(() => {
        samp.SendClientMessageToAll(white, "Test Poruke");
    }, 300000);

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
                                        for (let i = 0; i < 200; i++) {
                                            samp.SendClientMessage(playerid, white, "");
                                        }
                                        samp.SendClientMessage(playerid, white, `{${darkGreenWithoutHash}}[Vertigo RPG] {${whiteWithoutHash}}Dobrodos${players[playerid].pol == 'M' ? 'ao' : 'la'} na server, uzivaj u igri!`);
                                        playerid.SpawnPlayer();
                                    }
                                });
                            } catch (err) {
                                samp.SendClientMessage(playerid, darkRed, `[KICK] {${whiteWithoutHash}}Greska sa bazom podataka, molimo pokusajte kasnije!`);
                                setTimeout(() => {playerid.Kick();}, 10);
                            }
                        } else {
                            samp.SendClientMessage(playerid, darkGreen, `[Vertigo RPG] {${whiteWithoutHash}}Pogresna sifra, molimo pokusajte ponovo!`);
                            playerid.ShowPlayerDialog(loginDialog, samp.DIALOG_STYLE.PASSWORD, "Login", `Dobrodosao {${whiteWithoutHash}}${players[playerid].nickname} {${dialogDefaultColorWithoutHash}}na {${darkGreenWithoutHash}}Vertigo RPG!\n{${dialogDefaultColorWithoutHash}}Molimo ukucajte vasu sifru`, "Unesi", "Izlaz");
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

samp.OnPlayerKeyStateChange((playerid, newkeys, oldkeys) => {
    if (newkeys & samp.KEY.SECONDARY_ATTACK) {
        if (samp.IsPlayerInRangeOfPoint(playerid, 2, 1480.9833, -1772.1000, 18.7958)) {
            samp.SetPlayerVirtualWorld(playerid, 1);
            samp.SetPlayerInterior(playerid, 3);
            samp.SetPlayerPos(playerid, 390.1459, 173.7937, 1008.3828);
            samp.SetPlayerFacingAngle(playerid, 90);
            samp.SetCameraBehindPlayer(playerid);
        } else if (samp.IsPlayerInRangeOfPoint(playerid, 2, 390.1459, 173.7937, 1008.3828)) {
            samp.SetPlayerVirtualWorld(playerid, 0);
            samp.SetPlayerInterior(playerid, 0);
            samp.SetPlayerPos(playerid, 1480.9833, -1772.1000, 18.7958);
            samp.SetPlayerFacingAngle(playerid, 0);
            samp.SetCameraBehindPlayer(playerid);
        }
        
    }
});

samp.OnPlayerCommandText((playerid, cmdtext) => {
    if (players[playerid].isLoggedIn) {
        cmdtext = cmdtext.toLowerCase();
        cmdtext = cmdtext.replace("/", "");
        let params = cmdtext.split(/[ ]+/);
        let cmdName = params[0];
        if(CMD.eventNames().some(s => s == cmdName)) {
            params.shift();
            CMD.emit(`${cmdName}`, playerid, params);
        } else {
            console.log("Unesena je komanda koja ne postoji");
        }
        return true;
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

CMD.on('avozilo', (playerid, params) => {
    params[0] = parseInt(params[0]);
    pos = samp.GetPlayerPos(playerid);
    let angle = samp.GetPlayerFacingAngle(playerid);
    const veh = samp.CreateVehicle(params[0], pos[0], pos[1], pos[2], angle, -1, -1, 9999, 0);
    samp.PutPlayerInVehicle(playerid, veh, 0);
});