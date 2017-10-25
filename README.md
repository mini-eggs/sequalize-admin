# Sequalize Admin - NOT COMPLETE

An admin interface for Sequalize. Built with Vue, Redux, and friends.

# Minimal example usage with Express.

```javascript
import Express from "express";
import SequalizeAdmin from "@minieggs40/sequalize-admin";

const app = new Express();

const config = {
  route: "/admin",
  // Sequalize admin needs to serve static
  // files to the client. This is the most painfree way
  // to determine paths.
  publicPath: "./node_modules/@minieggs40/sequalize-admin",
  // We also need a function to server the static files.
  // This is mainly so we don't lock users into only using
  // Express.
  staticFilesFunction: Express.static,
  // Although some lock-ins are necessary. Luckily most
  // Node frameworks (Express, Restify, Fastify) follow the
  // same general API. This is for setting up internal and 
  // external server routes that the admin interface will
  // make use of.
  server: app,
  models: [
    // Coming soon.
  ],
  // We do not assume admin accounts will live in the
  // database used with Sequalize, although they may.
  // Users must provide their own method of varifying 
  // an admin user.
  admins: (username, password) => Promise.resolve()
};

SequalizeAdmin(config);

app.listen(process.env.PORT);
```
