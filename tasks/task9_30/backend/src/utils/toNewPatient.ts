//utils with Zod schema parsing
import { newPatientSchema } from "../schemas";
import { NewPatient, NewHealthCheckEntry } from "../types";

// Zod is used to parse and validate the input object against the newPatientSchema
const toNewDiaryEntry = (object: unknown): NewPatient => {
  return newPatientSchema.parse(object);
};

export default toNewDiaryEntry;
