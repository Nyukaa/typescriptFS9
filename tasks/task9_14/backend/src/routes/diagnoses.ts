import express from "express";
import diagnosisService from "../services/diagnosisService";
import { Response } from "express"; //Response из express
import { Diagnosis } from "../types";

const router = express.Router();

router.get("/", (_req, res: Response<Diagnosis[]>) => {
  res.send(diagnosisService.getAllDiagnoses());
});
router.post("/", (_req, res) => {
  res.send("Saving a diary!");
});

export default router;
