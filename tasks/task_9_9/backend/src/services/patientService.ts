import patients from "../../data/patients";
import { Patient, PublicPatient } from "../types";

const getAllPatients = (): Patient[] => {
  return patients;
};
const getPublicPatients = (): PublicPatient[] => {
  return patients.map(({ ssn, ...rest }) => rest);
};

// const addDiary = () => {
//   return null;
// };

export default {
  getAllPatients,
  getPublicPatients,
};
