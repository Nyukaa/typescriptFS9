import patients from "../../data/patients";
import { Patient } from "../types";

const getAllPatients = (): Patient[] => {
  return patients;
};
// const getNonSensitiveEntries = (): NonSensitiveDiaryEntry[] => {
//   return diaries.map(({ id, date, weather, visibility }) => ({
//     id,
//     date,
//     weather,
//     visibility,
//   }));
// };

// const addDiary = () => {
//   return null;
// };

export default {
  getAllPatients,
};
