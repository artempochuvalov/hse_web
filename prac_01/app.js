const express = require("express");
require("dotenv/config");
const MessagesService = require("./services/messages.js");

const port = process.env.PORT ?? 3000;

const app = express();

app.use(express.json());

app.get("/", (_req, res) => {
    res.send("App works!")
});

app.get("/messages", async (_req, res) => {
    const messages = await MessagesService.fetchMesages();
    // parses to JSON automatically
    res.json(messages);
});

app.use((_req, res) => {
    res.status(404).send("Not found");
});


const server = app.listen(port, () => {
    console.log(`[server]: App listening on port ${port}`);
});

const exitHandler = () => {
    if (server) {
        server.close(() => {
            console.log("[server]: Server closed");
            process.exit(1);
        });
    }
    else {
        process.exit(1);
    }
}

const unexpectedErrorHandler = (error) => {
    console.error(error);
    exitHandler();
};

process.on("uncaughtException", unexpectedErrorHandler);
process.on("unhandledRejection", unexpectedErrorHandler);
