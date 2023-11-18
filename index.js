import express from "express";
import { router } from "./router/index.js";
import expressEjsLayouts from "express-ejs-layouts";
import path from "path";
const app = express();
const port = 3100;
app.set("view engine", "ejs");
app.set("views", path.join(path.resolve(), "views"));
app.use(expressEjsLayouts);
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

app.use("/", router);

app.listen(port, () => {
  console.log("app is running successfully on port :", port);
});
