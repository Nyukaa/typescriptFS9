//utils with Zod schema parsing
import { newPatientSchema } from "./schemas";
import { NewPatient } from "./types";

const toNewDiaryEntry = (object: unknown): NewPatient => {
  return newPatientSchema.parse(object);
};

export default toNewDiaryEntry;
