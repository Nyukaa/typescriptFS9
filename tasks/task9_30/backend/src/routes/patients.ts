import express from "express";
import patientService from "../services/patientService";
import { Response } from "express";
import { PublicPatient, NewPatient, Patient } from "../types";
import { newPatientParser } from "../middleware";
import { Request } from "express";
import { toNewEntry } from "../utils/toNewEntry";
import { addEntry } from "../services/patientService";
console.log("patients router loaded");
const router = express.Router();
// Get all public patient data
router.get("/", (_req, res: Response<PublicPatient[]>) => {
  res.send(patientService.getPublicPatients());
});
//Zod middleware to validate new patient data
router.post(
  "/",
  newPatientParser,
  (req: Request<unknown, unknown, NewPatient>, res: Response<Patient>) => {
    const addedP = patientService.addPatient(req.body);
    res.json(addedP);
  }
);
// /api/patients/:id
router.get("/:id", (req, res) => {
  const patient = patientService.findById(req.params.id);
  console.log("Retrieved patient:", patient);
  if (patient) {
    res.json(patient);
  } else {
    res.status(404).send({ error: "Patient not found" });
  }
});
// Add new entry to patient by id
router.post("/:id/entries", (req, res) => {
  try {
    const newEntry = toNewEntry(req.body);
    const addedEntry = addEntry(req.params.id, newEntry);
    res.json(addedEntry);
  } catch (e: unknown) {
    if (e instanceof Error) {
      res.status(400).send(e.message);
    }
  }
});

export default router;
