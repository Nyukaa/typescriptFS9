import patients from "../../data/patients";
import { NewPatient, Patient, PublicPatient, NewEntry } from "../types";
import { v4 as uuid } from "uuid";

const getAllPatients = (): Patient[] => {
  return patients;
};

const findById = (id: string): Patient | undefined => {
  //console.log("Searching for patient with id:", id);
  const patient = patients.find((p) => p.id === id);

  return patient;
};
const getPublicPatients = (): PublicPatient[] => {
  return patients.map(({ ssn, ...rest }) => rest);
};
//use Zod schema to validate new patient data before adding
const addPatient = (entry: NewPatient): Patient => {
  const newPatient = {
    id: uuid(),
    ...entry,
  };
  patients.push(newPatient);
  return newPatient;
};
//add entry to patient by id
export const addEntry = (patientId: string, entry: NewEntry) => {
  const patient = findById(patientId);
  if (!patient) {
    throw new Error("Patient not found");
  }

  const newEntry = {
    id: uuid(),
    ...entry,
  };

  patient.entries.push(newEntry);
  return newEntry;
};
export default {
  getAllPatients,
  getPublicPatients,
  addPatient,
  findById,
};
