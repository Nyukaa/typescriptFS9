import express from "express";
import patientService from "../services/patientService";
import { Response } from "express";
import { PublicPatient } from "../types";
const router = express.Router();

router.get("/", (_req, res: Response<PublicPatient[]>) => {
  res.send(patientService.getPublicPatients());
});

export default router;
