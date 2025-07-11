import express from "express";
import { getPaths } from "../controllers/edgeController";

const router = express.Router();

router.get("/paths", getPaths);

export default router;
