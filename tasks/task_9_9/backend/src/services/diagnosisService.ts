import diagnoses from "../../data/diagnoses";
import { Diagnosis } from "../types";

const getAllDiagnoses = (): Diagnosis[] => {
  return diagnoses;
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
  getAllDiagnoses,
};
