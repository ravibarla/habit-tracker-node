import express from "express";
import path from "path";
// import { router } from "./router";

const app = express();
const port = 3100;

app.get("/", (req, res) =>
  res.sendFile(path.join(path.resolve(), "views", "index.html"))
);
// app.use("/", router);

app.listen(port, () => {
  console.log("app is running successfully on port :", port);
});
