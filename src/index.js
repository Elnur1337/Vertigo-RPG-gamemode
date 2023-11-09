const samp = require("samp-node-lib");

const hash = require("md5");

//TextDrawLoaders
const {RegisterTextDrawsLoader} = require("./TextDrawsLoaders/RegisterTextDraws");

//Helper Functions
const GetPlayerNameString = require("./helperFunctions/GetPlayerNameString");
const registerPlayer = require("./helperFunctions/registerPlayer");

//Variables
const { registerDialogPass, registerDialogEmail, registerDialogPol, registerDialogGodine, registerDialogDrzava } = require("./dialogs");

//TextDraws
let RegisterTextDraws = [];

let players = [];

samp.OnGameModeInit(() => { 
    samp.AddPlayerClass(0, 2095.5671, 1433.1622, 10.8203, 92.4388, 0, 0, 0, 0, 0, 0);
    samp.AddStaticVehicle(522, 2095.5671, 1433.1622, 11.8203, 270.8069, -1, -1);
    
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
        isRegistered: false,
        isLoggedIn: false
    };
    
    players[playerid].nickname = GetPlayerNameString(playerid);
    console.log(players[playerid]);
    return true;
})

samp.OnPlayerRequestClass((playerid) => {
    RegisterTextDraws.forEach((TextDrawObject) => {
        samp.TextDrawShowForPlayer(playerid, TextDrawObject.TextDraw);
    });
    samp.SelectTextDraw(playerid, "#2F7D32");
    
    
    
    samp.SetPlayerPos(playerid, 2095.5671, 1433.1622, 10.8203);
	samp.SetPlayerFacingAngle(playerid, 210.8861);
	samp.SetPlayerInterior(playerid, 0);
	return true;
});

samp.OnPlayerSpawn((playerid) => {
    if (!players[playerid].isRegistered) {
        samp.SendClientMessage(playerid, "#A30300", "[KICK] {FFFFFF}Niste se registrovali!");
        setTimeout(() => {playerid.Kick();}, 10);
    }
    if (players[playerid].isRegistered && !players[playerid].isLoggedIn) {
        samp.SendClientMessage(playerid, "#A30300", "[KICK] {FFFFFF}Niste se ulogovali!");
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
            registerPlayer(players[playerid]);
            players[playerid].isRegistered = true;
            players[playerid].isLoggedIn = true;

            RegisterTextDraws.forEach((TextDrawObject) => {
                samp.TextDrawHideForPlayer(playerid, TextDrawObject.TextDraw);
            });

            playerid.SpawnPlayer();
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
                if (inputtext.length < 8 || inputtext > 24) {
                    samp.SendClientMessage(playerid, "#2F7D32", "[Vertigo RPG] {FFFFFF}Sifra mora sadrzavati najmanje 8 karaktera, a najvise 24!");
                } else {
                    players[playerid].pass = hash(inputtext);
                    samp.TextDrawSetString(RegisterTextDraws[3].TextDraw, 'x'.repeat(inputtext.length));
                }
            }
            break;
        case registerDialogEmail:
            if (response) {
                if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputtext))) {
                    samp.SendClientMessage(playerid, "#2F7D32", "[Vertigo RPG] {FFFFFF}Uneseni email nije validan!");
                } else {
                    players[playerid].email = inputtext;
                    samp.TextDrawLetterSize(RegisterTextDraws[4].TextDraw, 0.17, 0.68);
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
                    samp.SendClientMessage(playerid, "#2F7D32", "[Vertigo RPG] {FFFFFF}Niste unijeli broj!");
                } else if (+inputtext < 10 || +inputtext > 80) {
                    samp.SendClientMessage(playerid, "#2F7D32", "[Vertigo RPG] {FFFFFF}Ne mozete unijeti broj manji od 10 i veci od 80!");
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
        default:
            break;
    }
});
