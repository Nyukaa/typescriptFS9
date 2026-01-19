import express from "express";
import patientService from "../services/patientService";
import { Response } from "express";
import { PublicPatient } from "../types";

import toNewPatient from "../utils";
const router = express.Router();

router.get("/", (_req, res: Response<PublicPatient[]>) => {
  res.send(patientService.getPublicPatients());
});

router.post("/", (req, res) => {
  console.log("Saving a new patient!");
  try {
    const newPatient = toNewPatient(req.body);
    const addedPatient = patientService.addPatient(newPatient);
    res.json(addedPatient);
  } catch (error: unknown) {
    let errorMessage = "Something went wrong.";
    if (error instanceof Error) {
      errorMessage += " Error: " + error.message;
    }
    res.status(400).send(errorMessage);
  }
});
export default router;
