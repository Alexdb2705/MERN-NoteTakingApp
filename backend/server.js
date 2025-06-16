import express from "express";
// const express = require("express");  This line is needed instead of the top one if "type" in package.json is commonjs instead of module.

const app = express();

app.get("/api/notes", (req, res) => {
    // send the notes
    res.send("you got 10 notes");
});

app.listen(5001, () => {
    console.log("Server started on PORT: 5001")
});