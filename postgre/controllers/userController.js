// userController.js

const db = require("../db/queries");

async function getUsernames(req, res) {
  const usernames = await db.getAllUsernames();
  console.log("Usernames: ", usernames);
  res.send("Usernames: " + usernames.map(user => user.username).join(", "));
}

async function createUsernameGet(req, res) {
  res.render("new");
}

async function createUsernamePost(req, res) {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
}

async function searchUsername(req, res, next) {
  try {
    const { search } = req.query;
    if (!search) return res.status(400).send("Missing search parameter");
  } catch  (err) {
    next(err);
  }
}

module.exports = {
  getUsernames,
  createUsernameGet,
  createUsernamePost,
  searchUsername,
};
