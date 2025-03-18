const express = require("express");
const app = express();
app.get("/abc", (req, res) => { res.send("Hello from abc")});
app.get("/", (req, res) => { res.send("hey guys")});


app.listen(3000, () => console.log("Hey anurag it's started"));
