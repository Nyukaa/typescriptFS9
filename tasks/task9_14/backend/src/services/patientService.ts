import patients from "../../data/patients";
import { NewPatient, Patient, PublicPatient } from "../types";
import { v4 as uuid } from "uuid";

const getAllPatients = (): Patient[] => {
  return patients;
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
};
