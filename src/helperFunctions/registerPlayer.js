// const samp = require("samp-node-lib");


const database = require("../databaseFunctions/dbConfig");

const registerPlayer = (registerInfo) => {
    console.log(registerInfo);
    try {
        const {nickname, pass, email, pol, godine, drzava} = registerInfo;
        const query = "INSERT INTO players(nickname, pass, email, pol, godine, selectedCountryId, createdAtCountryId) VALUES (?, ?, ?, ?, ?, ?, ?)"
        database.query(query, [nickname, pass, email, pol, godine, drzava, drzava], (err, res) => {
            if (err) {
                console.log(err);
            }
            console.log(res);
        })
    } catch (err) {
        console.log(err);
    }
    return 1;
}

module.exports = registerPlayer;