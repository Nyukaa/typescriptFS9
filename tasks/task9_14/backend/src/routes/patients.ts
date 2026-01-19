import express from "express";
import patientService from "../services/patientService";
import { Response } from "express";
import { PublicPatient, NewPatient, Patient } from "../types";
import { newPatientParser } from "../middleware";
import { Request } from "express";

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

export default router;
