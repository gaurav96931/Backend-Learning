//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
const password = "gcse";
var passwordCorrect = false;

app.use(bodyParser.urlencoded({ extended: true }));

// this is ok but use of middleware is standard, look into solution.js
app.post("/check", (req, res) => {
    console.log(req.body);

    if (req.body["password"] === password) passwordCorrect = true;

    if (passwordCorrect === true) {
        res.sendFile(__dirname + "/public/secret.html");
        passwordCorrect = false;
    }
    else
        res.send(`<p>Wrong Password!!!</p>`);
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});
app.get("/check", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
