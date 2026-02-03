const express = require("express");
const app = express();
const authorRouter = require("./routes/authorRouter");
const indexRouter = require("./routes/indexRouter");
const bookRouter = require("./routes/bookRouter");

app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.use("/", indexRouter);

const PORT = 3000;
app.listen(PORT, (error) => {
    // This is important!
    // Without this, any startup errors will silently fail
    // instead of giving you a helpful error message
    if (error) {
        throw(error);
    }
    console.log(`My first Express app - listening on port ${PORT}!`);
});

app.use((req, res, next) => {
    throw new Error("OH NO!");
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send(err);
})