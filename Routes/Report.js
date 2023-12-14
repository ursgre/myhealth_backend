import express from "express";
import { test } from "../Controllers/Report.js";
import { getreport } from "../Controllers/Report.js";

const router = express.Router()

router.get("/test", test)
router.get("/getreport", getreport)

export default router 