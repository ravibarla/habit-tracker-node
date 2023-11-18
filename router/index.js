import express from "express";
import { home } from "../controller/index.js";

export const router = express.Router();
router.get("/", home);