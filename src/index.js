const samp = require("samp-node-lib");

let RegisterTextDraws = [];

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
    samp.TextDrawBackgroundColor(RegisterTextDraws[1].TextDraw, "255");
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
    samp.TextDrawTextSize(RegisterTextDraws[3].TextDraw, 415.000000, 113.500000);
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
    samp.TextDrawTextSize(RegisterTextDraws[4].TextDraw, 415.000000, 113.500000);
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
        TextDraw: samp.TextDrawCreate(524.000000, 177.000000, "Pol")
    });
    samp.TextDrawFont(RegisterTextDraws[5].TextDraw, 1);
    samp.TextDrawLetterSize(RegisterTextDraws[5].TextDraw, 0.395833, 1.250000);
    samp.TextDrawTextSize(RegisterTextDraws[5].TextDraw, 415.000000, 113.500000);
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
        TextDraw: samp.TextDrawCreate(524.000000, 203.000000, "Godine")
    });
    samp.TextDrawFont(RegisterTextDraws[6].TextDraw, 1);
    samp.TextDrawLetterSize(RegisterTextDraws[6].TextDraw, 0.395833, 1.250000);
    samp.TextDrawTextSize(RegisterTextDraws[6].TextDraw, 415.000000, 113.500000);
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
        TextDraw: samp.TextDrawCreate(524.000000, 228.000000, "Drzava")
    });
    samp.TextDrawFont(RegisterTextDraws[7].TextDraw, 1);
    samp.TextDrawLetterSize(RegisterTextDraws[7].TextDraw, 0.395833, 1.250000);
    samp.TextDrawTextSize(RegisterTextDraws[7].TextDraw, 415.000000, 113.500000);
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
        TextDraw: samp.TextDrawCreate(482.000000, 254.000000, "Register")
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
        TextDraw: samp.TextDrawCreate(565.000000, 254.000000, "Exit")
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
    return true;
})

samp.OnPlayerRequestClass((playerid) => {
    RegisterTextDraws.forEach((TextDrawObject) => {
        samp.TextDrawShowForPlayer(playerid, TextDrawObject.TextDraw);
    });
    samp.SelectTextDraw(playerid, "#2F7D32");



    samp.SetPlayerPos(playerid, 2095.5671, 1433.1622, 10.8203);
	samp.SetPlayerFacingAngle(playerid, 113.8861);
	samp.SetPlayerInterior(playerid, 0);
	return true;
});

samp.OnPlayerSpawn((playerid) => {
    samp.SetPlayerInterior(playerid, 0);
    samp.SetPlayerPos(playerid, 2099.8894,1387.0828,10.8203);
    
	return true;
});

samp.OnPlayerClickTextDraw((playerid, clickedid) => {
    console.log("TD Click TEST");
    if(clickedid === RegisterTextDraws[3].TextDraw) {
        console.log("TD Click");
    } else {
        console.log("Neuspjesno");
    }
    return 0;
});
