const samp = require("samp-node-lib");

console.log("ELNURDEV TEST");

let VertigoText;

samp.OnGameModeInit(() => { 
    samp.AddPlayerClass(0, 2095.5671, 1433.1622, 10.8203, 92.4388, 0, 0, 0, 0, 0, 0);
    samp.AddStaticVehicle(522, 2095.5671, 1433.1622, 11.8203, 270.8069, -1, -1);
    
    VertigoText = samp.TextDrawCreate(463.000000, 84.000000, "Vertigo");
    samp.TextDrawFont(VertigoText, 1);
    samp.TextDrawLetterSize(VertigoText, 0.600000, 2.000000);
    samp.TextDrawTextSize(VertigoText, 400.000000, 17.000000);
    samp.TextDrawSetOutline(VertigoText, 0);
    samp.TextDrawSetShadow(VertigoText, 1);
    samp.TextDrawAlignment(VertigoText, 1);
    samp.TextDrawColor(VertigoText, "#FF5733");
    samp.TextDrawBackgroundColor(VertigoText, "255");
    samp.TextDrawBoxColor(VertigoText, "50");
    samp.TextDrawUseBox(VertigoText, 0);
    samp.TextDrawSetProportional(VertigoText, 1);
    samp.TextDrawSetSelectable(VertigoText, 0);
    
    return true;
});

samp.OnPlayerConnect((playerid) => {
    samp.TextDrawShowForPlayer(playerid, VertigoText);
    return true;
})

samp.OnPlayerRequestClass((playerid) => {
    // const VertigoText = samp.TextDrawCreate(463.000000, 84.000000, "Vertigo");
    // const RPGText = samp.TextDrawCreate(545.000000, 84.000000, "RPG");
    // let PasswordInput;
    // let EmailInput;
    // let PolInput;
    // let GodineInput;
    // let DrzavaInput;
    // let RegisterSubmit;
    // let RegisterExit;


    // samp.TextDrawFont(VertigoText, 1);
    // samp.TextDrawLetterSize(VertigoText, 0.600000, 2.000000);
    // samp.TextDrawTextSize(VertigoText, 400.000000, 17.000000);
    // samp.TextDrawSetOutline(VertigoText, 0);
    // samp.TextDrawSetShadow(VertigoText, 1);
    // samp.TextDrawAlignment(VertigoText, 1);
    // samp.TextDrawColor(VertigoText, 852308735);
    // samp.TextDrawBackgroundColor(VertigoText, 255);
    // samp.TextDrawBoxColor(VertigoText, 50);
    // samp.TextDrawUseBox(VertigoText, 0);
    // samp.TextDrawSetProportional(VertigoText, 1);
    // samp.TextDrawSetSelectable(VertigoText, 0);

    // samp.TextDrawFont(RPGText, 1);
    // samp.TextDrawLetterSize(RPGText, 0.600000, 2.000000);
    // samp.TextDrawTextSize(RPGText, 400.000000, 17.000000);
    // samp.TextDrawSetOutline(RPGText, 0);
    // samp.TextDrawSetShadow(RPGText, 1);
    // samp.TextDrawAlignment(RPGText, 1);
    // samp.TextDrawColor(RPGText, -1);
    // samp.TextDrawBackgroundColor(RPGText, 255);
    // samp.TextDrawBoxColor(RPGText, 50);
    // samp.TextDrawUseBox(RPGText, 0);
    // samp.TextDrawSetProportional(RPGText, 1);
    // samp.TextDrawSetSelectable(RPGText, 0);




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
