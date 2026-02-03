const express = require('express');
const app = express();

const path = require('node:path');
const newRouter = require("./routes/newRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/new", newRouter);


const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

app.get('/', (req, res) => {
    res.render("index", {messages: messages});
});

app.post("/new", (req, res) => {
  let messageText = req.body.nameInput;
  let messageUser = req.body.messageInput;
  messages.push({ text: messageText, user: messageUser, added: new Date() });
  res.redirect("/")
});

const PORT = 3000;
app.listen(PORT, (error)=> {
  if (error) {
    throw error;
  }
  console.log(`My first express app - listening on port ${PORT}`);
});