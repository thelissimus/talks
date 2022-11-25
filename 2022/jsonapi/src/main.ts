import path from "node:path";
import express from "express";
import sqlite3 from "sqlite3";

import { Users } from "./handlers/users";
import { Errors } from "./handlers/errors";

let app = express();
let db = new sqlite3.Database(path.resolve(__dirname, "../data/main.sqlite3"));

app.use("/users", new Users(db).getHandler());
app.use("/errors", new Errors(db).getHandler());

let server = app.listen(8080, () => console.log(`http://localhost:${8080}`));

process.on("exit", () => {
    server.close();
    db.close();
});
