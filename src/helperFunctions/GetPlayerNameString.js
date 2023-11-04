const GetPlayerNameString = (playerid) => {
    let char = 1;
    let playerName = "";
    for (let i = 0; char != 0; i++) {
        char = samp.callPublic('GetCharFromPlayerNameAt', 'ii', playerid, i);
        playerName += String.fromCharCode(char);
    }
    return playerName;
}

module.exports = {GetPlayerNameString};