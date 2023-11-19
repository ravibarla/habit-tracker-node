import express from "express";
import { home } from "../controller/index.js";
import { create, created ,weekView,deleteHabit} from "../controller/habitController.js";

export const router = express.Router();
router.get("/", home);
router.get("/_create", create);
router.post("/_create", created);
router.get("/weekView",weekView)
router.post("/destroy/:id",deleteHabit)
