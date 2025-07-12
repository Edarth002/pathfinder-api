import express from "express";
import { getPaths } from "../controllers/edgeController.js";

const router = express.Router();

router.get("/paths", getPaths);

export default router;
