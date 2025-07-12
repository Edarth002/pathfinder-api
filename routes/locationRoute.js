import express from "express";
import { getLocations } from "../controllers/locationController.js";

const router = express.Router();

router.get("/locations", getLocations);

export default router;
