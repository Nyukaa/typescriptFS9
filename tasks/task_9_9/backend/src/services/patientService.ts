import patients from "../../data/patients";
import { NewPatient, Patient, PublicPatient } from "../types";
import { v4 as uuid } from "uuid";
import toNewPatient from "../utils";
const getAllPatients = (): Patient[] => {
  return patients;
};
const getPublicPatients = (): PublicPatient[] => {
  return patients.map(({ ssn, ...rest }) => rest);
};

const addPatient = (entry: NewPatient): NewPatient => {
  const newPatientData: NewPatient = toNewPatient(entry);
  const newPatient = {
    id: uuid(),
    ...newPatientData,
  };
  patients.push(newPatient);
  return newPatient;
};

export default {
  getAllPatients,
  getPublicPatients,
  addPatient,
};
