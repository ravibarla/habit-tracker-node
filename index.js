import express, { urlencoded } from "express";
import { router } from "./router/index.js";
import expressEjsLayouts from "express-ejs-layouts";
import path from "path";
import { db } from "./config/mongoose.js";


// import bodyParser from "body-parser";
const app = express();
// const port = 3100;
const port=process.env.PORT||3100
app.set("view engine", "ejs");
app.set("views", path.join(path.resolve(), "views"));
app.use(expressEjsLayouts);
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

app.use(urlencoded({ extended: true }));




app.use(express.json());
app.listen(port, () => {
  console.log("app is running successfully on port :", port);
});



app.use("/", router);
