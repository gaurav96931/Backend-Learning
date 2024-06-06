import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Heythere!");
});
app.get("/about", (req, res) => {
    res.send("Gaurav KUmar");
});
app.get("/contact", (req, res) => {
    res.send("<h1>Contact Me</h1> 96931xxxxx");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
