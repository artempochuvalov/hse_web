const express = require("express");
const mongoose = require("mongoose");

const app = require("./app.js");

const dbUrl = "mongodb://127.0.0.1:27017";
const port = 8080;

async function connectDb() {
    await mongoose.connect(dbUrl)
    .then(() => {
        console.log("[db]: Database connected");
    })
    .catch(() => {
        throw new Error("[db]: Database connection error");
    })
}

let server;
connectDb().then(() => {
    server = app.listen(port, () => {
        console.log(`[server]: App listeting on port ${port}`);
    });
})