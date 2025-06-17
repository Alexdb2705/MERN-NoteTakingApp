import express from "express";
// const express = require("express");  This line is needed instead of the top one if "type" in package.json is commonjs instead of module.
import notesRoutes from "./routes/notesRoutes.js"

const app = express();

app.use("/api/notes", notesRoutes)


app.listen(5001, () => {
    console.log("Server started on PORT: 5001");
});