import express from "express";
import patientService from "../services/patientService";
import { Response } from "express";
import { PublicPatient } from "../types";

const router = express.Router();

router.get("/", (_req, res: Response<PublicPatient[]>) => {
  res.send(patientService.getPublicPatients());
});

router.post("/", (req, res) => {
  console.log("Saving a new patient!");
  try {
    const addedPatient = patientService.addPatient(req.body);

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
