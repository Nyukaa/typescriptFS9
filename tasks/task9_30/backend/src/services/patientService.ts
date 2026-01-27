import patients from "../../data/patients";
import { NewPatient, Patient, PublicPatient } from "../types";
import { v4 as uuid } from "uuid";

const getAllPatients = (): Patient[] => {
  return patients;
};

const findById = (id: string): Patient | undefined => {
  console.log("Searching for patient with id:", id);
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

export default {
  getAllPatients,
  getPublicPatients,
  addPatient,
  findById,
};
