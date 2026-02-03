// queries.js 

const pool = require("./pool");

async function getAllUsernames(){
    const {rows} = await pool.query("SELECT * FROM usernames");
    return rows;
}

async function insertUsername(username) {
    await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

async function searchUsername(username) {
    const { rows } = await pool.query(
        "SELECT * FROM usernames WHERE username = $1",
        [username]
    );
    return rows;
}

async function deleteUsername(username) {
    await pool.query("DELETE FROM usernames WHERE username = $1", [username]);
}

module.exports = {
    getAllUsernames,
    insertUsername,
    searchUsername,
    deleteUsername,
};