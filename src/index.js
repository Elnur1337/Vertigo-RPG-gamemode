const samp = require("samp-node-lib");
const {GetPlayerNameString} = require("./helperFunctions/GetPlayerNameString");

const registerDialogPass = 0;
const registerDialogEmail = 1;
const registerDialogPol = 2;
const registerDialogGodine = 3;
const registerDialogDrzava = 4;

let RegisterTextDraws = [];

let playerInfo = {
    name: "",
    password: "",
    email: "",
    pol: '',
    godine: 0,
    drzava: "",
    isRegistered: false,
    isLoggedIn: false
}

samp.OnGameModeInit(() => { 
    samp.AddPlayerClass(0, 2095.5671, 1433.1622, 10.8203, 92.4388, 0, 0, 0, 0, 0, 0);
    samp.AddStaticVehicle(522, 2095.5671, 1433.1622, 11.8203, 270.8069, -1, -1);
    
    RegisterTextDraws.push({
        TextDrawName: "BlackLayer",
        TextDraw: samp.TextDrawCreate(601.000000, 1.000000, "_")
    });
    samp.TextDrawFont(RegisterTextDraws[0].TextDraw.TextDraw, 2);
    samp.TextDrawLetterSize(RegisterTextDraws[0].TextDraw, 0.620833, 49.549972);
    samp.TextDrawTextSize(RegisterTextDraws[0].TextDraw, 253.500000, 386.500000);
    samp.TextDrawSetOutline(RegisterTextDraws[0].TextDraw, 1);
    samp.TextDrawSetShadow(RegisterTextDraws[0].TextDraw, 0);
    samp.TextDrawAlignment(RegisterTextDraws[0].TextDraw, 2);
    samp.TextDrawColor(RegisterTextDraws[0].TextDraw, "-1");
    samp.TextDrawBackgroundColor(RegisterTextDraws[0].TextDraw, "-1");
    samp.TextDrawBoxColor(RegisterTextDraws[0].TextDraw, "#0F0F0FBA");
    samp.TextDrawUseBox(RegisterTextDraws[0].TextDraw, 1);
    samp.TextDrawSetProportional(RegisterTextDraws[0].TextDraw, 1);
    samp.TextDrawSetSelectable(RegisterTextDraws[0].TextDraw, false);

    RegisterTextDraws.push({
        TextDrawName: "VertigoText",
        TextDraw: samp.TextDrawCreate(463.000000, 84.000000, "Vertigo")
    });
    samp.TextDrawFont(RegisterTextDraws[1].TextDraw, 1);
    samp.TextDrawLetterSize(RegisterTextDraws[1].TextDraw, 0.600000, 2.000000);
    samp.TextDrawTextSize(RegisterTextDraws[1].TextDraw, 400.000000, 17.000000);
    samp.TextDrawSetOutline(RegisterTextDraws[1].TextDraw, 0);
    samp.TextDrawSetShadow(RegisterTextDraws[1].TextDraw, 1);
    samp.TextDrawAlignment(RegisterTextDraws[1].TextDraw, 1);
    samp.TextDrawColor(RegisterTextDraws[1].TextDraw, "#2F7D32");
    samp.TextDrawBackgroundColor(RegisterTextDraws[1].TextDraw, "255");
    samp.TextDrawBoxColor(RegisterTextDraws[1].TextDraw, "50");
    samp.TextDrawUseBox(RegisterTextDraws[1].TextDraw, 0);
    samp.TextDrawSetProportional(RegisterTextDraws[1].TextDraw, 1);
    samp.TextDrawSetSelectable(RegisterTextDraws[1].TextDraw, false);
    
    RegisterTextDraws.push({
        TextDrawName: "RPGText",
        TextDraw: samp.TextDrawCreate(545.000000, 84.000000, "RPG")
    });
    samp.TextDrawFont(RegisterTextDraws[2].TextDraw, 1);
    samp.TextDrawLetterSize(RegisterTextDraws[2].TextDraw, 0.600000, 2.000000);
    samp.TextDrawTextSize(RegisterTextDraws[2].TextDraw, 400.000000, 17.000000);
    samp.TextDrawSetOutline(RegisterTextDraws[2].TextDraw, 0);
    samp.TextDrawSetShadow(RegisterTextDraws[2].TextDraw, 1);
    samp.TextDrawAlignment(RegisterTextDraws[2].TextDraw, 1);
    samp.TextDrawColor(RegisterTextDraws[2].TextDraw, "#FCFCFC");
    samp.TextDrawBackgroundColor(RegisterTextDraws[2].TextDraw, "255");
    samp.TextDrawBoxColor(RegisterTextDraws[2].TextDraw, "50");
    samp.TextDrawUseBox(RegisterTextDraws[2].TextDraw, 0);
    samp.TextDrawSetProportional(RegisterTextDraws[2].TextDraw, 1);
    samp.TextDrawSetSelectable(RegisterTextDraws[2].TextDraw, false);

    RegisterTextDraws.push({
        TextDrawName: "PasswordInput",
        TextDraw: samp.TextDrawCreate(524.000000, 119.000000, "Password")
    });
    samp.TextDrawFont(RegisterTextDraws[3].TextDraw, 1);
    samp.TextDrawLetterSize(RegisterTextDraws[3].TextDraw, 0.395833, 1.250000);
    samp.TextDrawTextSize(RegisterTextDraws[3].TextDraw, 415.000000, 210.500000);
    samp.TextDrawSetOutline(RegisterTextDraws[3].TextDraw, 0);
    samp.TextDrawSetShadow(RegisterTextDraws[3].TextDraw, 1);
    samp.TextDrawAlignment(RegisterTextDraws[3].TextDraw, 2);
    samp.TextDrawColor(RegisterTextDraws[3].TextDraw, "#FCFCFC");
    samp.TextDrawBackgroundColor(RegisterTextDraws[3].TextDraw, "255");
    samp.TextDrawBoxColor(RegisterTextDraws[3].TextDraw, "#FCFCFC89");
    samp.TextDrawUseBox(RegisterTextDraws[3].TextDraw, 1);
    samp.TextDrawSetProportional(RegisterTextDraws[3].TextDraw, 1);
    samp.TextDrawSetSelectable(RegisterTextDraws[3].TextDraw, true);

    RegisterTextDraws.push({
        TextDrawName: "EmailInput",
        TextDraw: samp.TextDrawCreate(524.000000, 149.000000, "Email")
    });
    samp.TextDrawFont(RegisterTextDraws[4].TextDraw, 1);
    samp.TextDrawLetterSize(RegisterTextDraws[4].TextDraw, 0.395833, 1.250000);
    samp.TextDrawTextSize(RegisterTextDraws[4].TextDraw, 415.000000, 210.500000);
    samp.TextDrawSetOutline(RegisterTextDraws[4].TextDraw, 0);
    samp.TextDrawSetShadow(RegisterTextDraws[4].TextDraw, 1);
    samp.TextDrawAlignment(RegisterTextDraws[4].TextDraw, 2);
    samp.TextDrawColor(RegisterTextDraws[4].TextDraw, "#FCFCFC");
    samp.TextDrawBackgroundColor(RegisterTextDraws[4].TextDraw, "255");
    samp.TextDrawBoxColor(RegisterTextDraws[4].TextDraw, "#FCFCFC89");
    samp.TextDrawUseBox(RegisterTextDraws[4].TextDraw, 1);
    samp.TextDrawSetProportional(RegisterTextDraws[4].TextDraw, 1);
    samp.TextDrawSetSelectable(RegisterTextDraws[4].TextDraw, true);
    
    RegisterTextDraws.push({
        TextDrawName: "PolInput",
        TextDraw: samp.TextDrawCreate(524.000000, 179.000000, "Pol")
    });
    samp.TextDrawFont(RegisterTextDraws[5].TextDraw, 1);
    samp.TextDrawLetterSize(RegisterTextDraws[5].TextDraw, 0.395833, 1.250000);
    samp.TextDrawTextSize(RegisterTextDraws[5].TextDraw, 415.000000, 210.500000);
    samp.TextDrawSetOutline(RegisterTextDraws[5].TextDraw, 0);
    samp.TextDrawSetShadow(RegisterTextDraws[5].TextDraw, 1);
    samp.TextDrawAlignment(RegisterTextDraws[5].TextDraw, 2);
    samp.TextDrawColor(RegisterTextDraws[5].TextDraw, "#FCFCFC");
    samp.TextDrawBackgroundColor(RegisterTextDraws[5].TextDraw, "255");
    samp.TextDrawBoxColor(RegisterTextDraws[5].TextDraw, "#FCFCFC89");
    samp.TextDrawUseBox(RegisterTextDraws[5].TextDraw, 1);
    samp.TextDrawSetProportional(RegisterTextDraws[5].TextDraw, 1);
    samp.TextDrawSetSelectable(RegisterTextDraws[5].TextDraw, true);

    RegisterTextDraws.push({
        TextDrawName: "GodineInput",
        TextDraw: samp.TextDrawCreate(524.000000, 209.000000, "Godine")
    });
    samp.TextDrawFont(RegisterTextDraws[6].TextDraw, 1);
    samp.TextDrawLetterSize(RegisterTextDraws[6].TextDraw, 0.395833, 1.250000);
    samp.TextDrawTextSize(RegisterTextDraws[6].TextDraw, 415.000000, 210.500000);
    samp.TextDrawSetOutline(RegisterTextDraws[6].TextDraw, 0);
    samp.TextDrawSetShadow(RegisterTextDraws[6].TextDraw, 1);
    samp.TextDrawAlignment(RegisterTextDraws[6].TextDraw, 2);
    samp.TextDrawColor(RegisterTextDraws[6].TextDraw, "#FCFCFC");
    samp.TextDrawBackgroundColor(RegisterTextDraws[6].TextDraw, "255");
    samp.TextDrawBoxColor(RegisterTextDraws[6].TextDraw, "#FCFCFC89");
    samp.TextDrawUseBox(RegisterTextDraws[6].TextDraw, 1);
    samp.TextDrawSetProportional(RegisterTextDraws[6].TextDraw, 1);
    samp.TextDrawSetSelectable(RegisterTextDraws[6].TextDraw, true);

    RegisterTextDraws.push({
        TextDrawName: "DrzavaInput",
        TextDraw: samp.TextDrawCreate(524.000000, 239.000000, "Drzava")
    });
    samp.TextDrawFont(RegisterTextDraws[7].TextDraw, 1);
    samp.TextDrawLetterSize(RegisterTextDraws[7].TextDraw, 0.395833, 1.250000);
    samp.TextDrawTextSize(RegisterTextDraws[7].TextDraw, 415.000000, 210.500000);
    samp.TextDrawSetOutline(RegisterTextDraws[7].TextDraw, 0);
    samp.TextDrawSetShadow(RegisterTextDraws[7].TextDraw, 1);
    samp.TextDrawAlignment(RegisterTextDraws[7].TextDraw, 2);
    samp.TextDrawColor(RegisterTextDraws[7].TextDraw, "#FCFCFC");
    samp.TextDrawBackgroundColor(RegisterTextDraws[7].TextDraw, "255");
    samp.TextDrawBoxColor(RegisterTextDraws[7].TextDraw, "#FCFCFC89");
    samp.TextDrawUseBox(RegisterTextDraws[7].TextDraw, 1);
    samp.TextDrawSetProportional(RegisterTextDraws[7].TextDraw, 1);
    samp.TextDrawSetSelectable(RegisterTextDraws[7].TextDraw, true);

    RegisterTextDraws.push({
        TextDrawName: "RegisterBtn",
        TextDraw: samp.TextDrawCreate(482.000000, 269.000000, "Register")
    });
    samp.TextDrawFont(RegisterTextDraws[8].TextDraw, 1);
    samp.TextDrawLetterSize(RegisterTextDraws[8].TextDraw, 0.395833, 1.250000);
    samp.TextDrawTextSize(RegisterTextDraws[8].TextDraw, 415.000000, 58.500000);
    samp.TextDrawSetOutline(RegisterTextDraws[8].TextDraw, 0);
    samp.TextDrawSetShadow(RegisterTextDraws[8].TextDraw, 1);
    samp.TextDrawAlignment(RegisterTextDraws[8].TextDraw, 2);
    samp.TextDrawColor(RegisterTextDraws[8].TextDraw, "#FCFCFC");
    samp.TextDrawBackgroundColor(RegisterTextDraws[8].TextDraw, "255");
    samp.TextDrawBoxColor(RegisterTextDraws[8].TextDraw, "#1D8C29");
    samp.TextDrawUseBox(RegisterTextDraws[8].TextDraw, 1);
    samp.TextDrawSetProportional(RegisterTextDraws[8].TextDraw, 1);
    samp.TextDrawSetSelectable(RegisterTextDraws[8].TextDraw, true);

    RegisterTextDraws.push({
        TextDrawName: "ExitBtn",
        TextDraw: samp.TextDrawCreate(565.000000, 269.000000, "Exit")
    });
    samp.TextDrawFont(RegisterTextDraws[9].TextDraw, 1);
    samp.TextDrawLetterSize(RegisterTextDraws[9].TextDraw, 0.395833, 1.250000);
    samp.TextDrawTextSize(RegisterTextDraws[9].TextDraw, 415.000000, 58.500000);
    samp.TextDrawSetOutline(RegisterTextDraws[9].TextDraw, 0);
    samp.TextDrawSetShadow(RegisterTextDraws[9].TextDraw, 1);
    samp.TextDrawAlignment(RegisterTextDraws[9].TextDraw, 2);
    samp.TextDrawColor(RegisterTextDraws[9].TextDraw, "#FCFCFC");
    samp.TextDrawBackgroundColor(RegisterTextDraws[9].TextDraw, "255");
    samp.TextDrawBoxColor(RegisterTextDraws[9].TextDraw, "#8C0002");
    samp.TextDrawUseBox(RegisterTextDraws[9].TextDraw, 1);
    samp.TextDrawSetProportional(RegisterTextDraws[9].TextDraw, 1);
    samp.TextDrawSetSelectable(RegisterTextDraws[9].TextDraw, true);

    return true;
});

samp.OnPlayerConnect((playerid) => {
    playerInfo.name = GetPlayerNameString(playerid);   
    console.log(playerInfo.name); 
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
    if (!playerInfo.isRegistered) {
        samp.SendClientMessage(playerid, "#A30300", "[KICK] {FFFFFF}Niste se registrovali!");
        setTimeout(() => {playerid.Kick();}, 10);
    }
    if (playerInfo.isRegistered && !playerInfo.isLoggedIn) {
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
                if (inputtext.length < 7) {
                    samp.SendClientMessage(playerid, "#2F7D32", "[Vertigo RPG] {FFFFFF}Sifra mora sadrzavati najmanje 8 karaktera!");
                } else {
                    playerInfo.password = inputtext;
                    samp.TextDrawSetString(RegisterTextDraws[3].TextDraw, 'x'.repeat(playerInfo.password.length));
                }
            }
            break;
        case registerDialogEmail:
            if (response) {
                if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputtext))) {
                    samp.SendClientMessage(playerid, "#2F7D32", "[Vertigo RPG] {FFFFFF}Uneseni email nije validan!");
                } else {
                    playerInfo.email = inputtext;
                    samp.TextDrawLetterSize(RegisterTextDraws[4].TextDraw, 0.17, 0.68);
                    samp.TextDrawSetString(RegisterTextDraws[4].TextDraw, inputtext);
                }
            }
            break;
        case registerDialogPol:
                if (response) {
                    playerInfo.pol = "Musko";
                    samp.TextDrawSetString(RegisterTextDraws[5].TextDraw, 'Musko');
                } else {
                    playerInfo.pol = "Zensko";
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
                    playerInfo.godine = +inputtext;
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
                playerInfo.drzava = drzava;
                samp.TextDrawSetString(RegisterTextDraws[7].TextDraw, drzava);
            }
            break;
        default:
            break;
    }
});
