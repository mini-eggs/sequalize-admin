/**
 * THIS FILE IS FOR TESTING PURPOSES ONLY.
 * THIS SHOULD NOT APPEAR ON NPM OR BE IN USE
 * IN USERLAND. IF SO, WEBPACK IS MISCONFIGURED.
 * UNTIL THIS IS PRODUCTION READY THIS FILE WILL STAY.
 */

import Express from "express";
import SequalizeAdmin from "./plugin";

const app = new Express();

const config = {
  route: "/admin",
  publicPath: "./",
  staticFilesFunction: Express.static,
  server: app,
  models: [],
  admins: (username, password) => Promise.resolve()
};

SequalizeAdmin(config);

app.listen(3000);
