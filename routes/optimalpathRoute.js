import express from "express";
import { bestPathRoute } from "../controllers/pathcontroller";

const router = express.Router();

router.get("/find-best-route", bestPathRoute);

export default router;
