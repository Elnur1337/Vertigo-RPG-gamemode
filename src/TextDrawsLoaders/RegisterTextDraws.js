const samp = require("samp-node-lib");

const RegisterTextDrawsLoader = (array) => {
    array.push({
        TextDrawName: "BlackLayer",
        TextDraw: samp.TextDrawCreate(601.000000, 1.000000, "_")
    });
    samp.TextDrawFont(array[0].TextDraw.TextDraw, 2);
    samp.TextDrawLetterSize(array[0].TextDraw, 0.620833, 49.549972);
    samp.TextDrawTextSize(array[0].TextDraw, 253.500000, 386.500000);
    samp.TextDrawSetOutline(array[0].TextDraw, 1);
    samp.TextDrawSetShadow(array[0].TextDraw, 0);
    samp.TextDrawAlignment(array[0].TextDraw, 2);
    samp.TextDrawColor(array[0].TextDraw, "-1");
    samp.TextDrawBackgroundColor(array[0].TextDraw, "-1");
    samp.TextDrawBoxColor(array[0].TextDraw, "#0F0F0FBA");
    samp.TextDrawUseBox(array[0].TextDraw, 1);
    samp.TextDrawSetProportional(array[0].TextDraw, 1);
    samp.TextDrawSetSelectable(array[0].TextDraw, false);

    array.push({
        TextDrawName: "VertigoText",
        TextDraw: samp.TextDrawCreate(463.000000, 84.000000, "Vertigo")
    });
    samp.TextDrawFont(array[1].TextDraw, 1);
    samp.TextDrawLetterSize(array[1].TextDraw, 0.600000, 2.000000);
    samp.TextDrawTextSize(array[1].TextDraw, 400.000000, 17.000000);
    samp.TextDrawSetOutline(array[1].TextDraw, 0);
    samp.TextDrawSetShadow(array[1].TextDraw, 1);
    samp.TextDrawAlignment(array[1].TextDraw, 1);
    samp.TextDrawColor(array[1].TextDraw, "#2F7D32");
    samp.TextDrawBackgroundColor(array[1].TextDraw, "255");
    samp.TextDrawBoxColor(array[1].TextDraw, "50");
    samp.TextDrawUseBox(array[1].TextDraw, 0);
    samp.TextDrawSetProportional(array[1].TextDraw, 1);
    samp.TextDrawSetSelectable(array[1].TextDraw, false);
    
    array.push({
        TextDrawName: "RPGText",
        TextDraw: samp.TextDrawCreate(545.000000, 84.000000, "RPG")
    });
    samp.TextDrawFont(array[2].TextDraw, 1);
    samp.TextDrawLetterSize(array[2].TextDraw, 0.600000, 2.000000);
    samp.TextDrawTextSize(array[2].TextDraw, 400.000000, 17.000000);
    samp.TextDrawSetOutline(array[2].TextDraw, 0);
    samp.TextDrawSetShadow(array[2].TextDraw, 1);
    samp.TextDrawAlignment(array[2].TextDraw, 1);
    samp.TextDrawColor(array[2].TextDraw, "#FCFCFC");
    samp.TextDrawBackgroundColor(array[2].TextDraw, "255");
    samp.TextDrawBoxColor(array[2].TextDraw, "50");
    samp.TextDrawUseBox(array[2].TextDraw, 0);
    samp.TextDrawSetProportional(array[2].TextDraw, 1);
    samp.TextDrawSetSelectable(array[2].TextDraw, false);

    array.push({
        TextDrawName: "PasswordInput",
        TextDraw: samp.TextDrawCreate(524.000000, 119.000000, "Password")
    });
    samp.TextDrawFont(array[3].TextDraw, 1);
    samp.TextDrawLetterSize(array[3].TextDraw, 0.395833, 1.250000);
    samp.TextDrawTextSize(array[3].TextDraw, 415.000000, 210.500000);
    samp.TextDrawSetOutline(array[3].TextDraw, 0);
    samp.TextDrawSetShadow(array[3].TextDraw, 1);
    samp.TextDrawAlignment(array[3].TextDraw, 2);
    samp.TextDrawColor(array[3].TextDraw, "#FCFCFC");
    samp.TextDrawBackgroundColor(array[3].TextDraw, "255");
    samp.TextDrawBoxColor(array[3].TextDraw, "#FCFCFC89");
    samp.TextDrawUseBox(array[3].TextDraw, 1);
    samp.TextDrawSetProportional(array[3].TextDraw, 1);
    samp.TextDrawSetSelectable(array[3].TextDraw, true);

    array.push({
        TextDrawName: "EmailInput",
        TextDraw: samp.TextDrawCreate(524.000000, 149.000000, "Email")
    });
    samp.TextDrawFont(array[4].TextDraw, 1);
    samp.TextDrawLetterSize(array[4].TextDraw, 0.395833, 1.250000);
    samp.TextDrawTextSize(array[4].TextDraw, 415.000000, 210.500000);
    samp.TextDrawSetOutline(array[4].TextDraw, 0);
    samp.TextDrawSetShadow(array[4].TextDraw, 1);
    samp.TextDrawAlignment(array[4].TextDraw, 2);
    samp.TextDrawColor(array[4].TextDraw, "#FCFCFC");
    samp.TextDrawBackgroundColor(array[4].TextDraw, "255");
    samp.TextDrawBoxColor(array[4].TextDraw, "#FCFCFC89");
    samp.TextDrawUseBox(array[4].TextDraw, 1);
    samp.TextDrawSetProportional(array[4].TextDraw, 1);
    samp.TextDrawSetSelectable(array[4].TextDraw, true);
    
    array.push({
        TextDrawName: "PolInput",
        TextDraw: samp.TextDrawCreate(524.000000, 179.000000, "Pol")
    });
    samp.TextDrawFont(array[5].TextDraw, 1);
    samp.TextDrawLetterSize(array[5].TextDraw, 0.395833, 1.250000);
    samp.TextDrawTextSize(array[5].TextDraw, 415.000000, 210.500000);
    samp.TextDrawSetOutline(array[5].TextDraw, 0);
    samp.TextDrawSetShadow(array[5].TextDraw, 1);
    samp.TextDrawAlignment(array[5].TextDraw, 2);
    samp.TextDrawColor(array[5].TextDraw, "#FCFCFC");
    samp.TextDrawBackgroundColor(array[5].TextDraw, "255");
    samp.TextDrawBoxColor(array[5].TextDraw, "#FCFCFC89");
    samp.TextDrawUseBox(array[5].TextDraw, 1);
    samp.TextDrawSetProportional(array[5].TextDraw, 1);
    samp.TextDrawSetSelectable(array[5].TextDraw, true);

    array.push({
        TextDrawName: "GodineInput",
        TextDraw: samp.TextDrawCreate(524.000000, 209.000000, "Godine")
    });
    samp.TextDrawFont(array[6].TextDraw, 1);
    samp.TextDrawLetterSize(array[6].TextDraw, 0.395833, 1.250000);
    samp.TextDrawTextSize(array[6].TextDraw, 415.000000, 210.500000);
    samp.TextDrawSetOutline(array[6].TextDraw, 0);
    samp.TextDrawSetShadow(array[6].TextDraw, 1);
    samp.TextDrawAlignment(array[6].TextDraw, 2);
    samp.TextDrawColor(array[6].TextDraw, "#FCFCFC");
    samp.TextDrawBackgroundColor(array[6].TextDraw, "255");
    samp.TextDrawBoxColor(array[6].TextDraw, "#FCFCFC89");
    samp.TextDrawUseBox(array[6].TextDraw, 1);
    samp.TextDrawSetProportional(array[6].TextDraw, 1);
    samp.TextDrawSetSelectable(array[6].TextDraw, true);

    array.push({
        TextDrawName: "DrzavaInput",
        TextDraw: samp.TextDrawCreate(524.000000, 239.000000, "Drzava")
    });
    samp.TextDrawFont(array[7].TextDraw, 1);
    samp.TextDrawLetterSize(array[7].TextDraw, 0.395833, 1.250000);
    samp.TextDrawTextSize(array[7].TextDraw, 415.000000, 210.500000);
    samp.TextDrawSetOutline(array[7].TextDraw, 0);
    samp.TextDrawSetShadow(array[7].TextDraw, 1);
    samp.TextDrawAlignment(array[7].TextDraw, 2);
    samp.TextDrawColor(array[7].TextDraw, "#FCFCFC");
    samp.TextDrawBackgroundColor(array[7].TextDraw, "255");
    samp.TextDrawBoxColor(array[7].TextDraw, "#FCFCFC89");
    samp.TextDrawUseBox(array[7].TextDraw, 1);
    samp.TextDrawSetProportional(array[7].TextDraw, 1);
    samp.TextDrawSetSelectable(array[7].TextDraw, true);

    array.push({
        TextDrawName: "RegisterBtn",
        TextDraw: samp.TextDrawCreate(482.000000, 269.000000, "Register")
    });
    samp.TextDrawFont(array[8].TextDraw, 1);
    samp.TextDrawLetterSize(array[8].TextDraw, 0.395833, 1.250000);
    samp.TextDrawTextSize(array[8].TextDraw, 415.000000, 58.500000);
    samp.TextDrawSetOutline(array[8].TextDraw, 0);
    samp.TextDrawSetShadow(array[8].TextDraw, 1);
    samp.TextDrawAlignment(array[8].TextDraw, 2);
    samp.TextDrawColor(array[8].TextDraw, "#FCFCFC");
    samp.TextDrawBackgroundColor(array[8].TextDraw, "255");
    samp.TextDrawBoxColor(array[8].TextDraw, "#1D8C29");
    samp.TextDrawUseBox(array[8].TextDraw, 1);
    samp.TextDrawSetProportional(array[8].TextDraw, 1);
    samp.TextDrawSetSelectable(array[8].TextDraw, true);

    array.push({
        TextDrawName: "ExitBtn",
        TextDraw: samp.TextDrawCreate(565.000000, 269.000000, "Exit")
    });
    samp.TextDrawFont(array[9].TextDraw, 1);
    samp.TextDrawLetterSize(array[9].TextDraw, 0.395833, 1.250000);
    samp.TextDrawTextSize(array[9].TextDraw, 415.000000, 58.500000);
    samp.TextDrawSetOutline(array[9].TextDraw, 0);
    samp.TextDrawSetShadow(array[9].TextDraw, 1);
    samp.TextDrawAlignment(array[9].TextDraw, 2);
    samp.TextDrawColor(array[9].TextDraw, "#FCFCFC");
    samp.TextDrawBackgroundColor(array[9].TextDraw, "255");
    samp.TextDrawBoxColor(array[9].TextDraw, "#8C0002");
    samp.TextDrawUseBox(array[9].TextDraw, 1);
    samp.TextDrawSetProportional(array[9].TextDraw, 1);
    samp.TextDrawSetSelectable(array[9].TextDraw, true);
}

module.exports = {RegisterTextDrawsLoader};