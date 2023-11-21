import express from "express";
// import { home } from "../controller/index.js";
import {
  create,
  created,
  weekView,
  deleteHabit,
  updateStatus,
  home,
} from "../controller/habitController.js";

// include all the routers
export const router = express.Router();
router.get("/", home);
router.get("/create", create);
router.post("/create", created);
router.get("/weekView", weekView);
router.post("/destroy/:id", deleteHabit);
router.post("/updateStatus/:habitId/:entryId/:entryStatus", updateStatus);
