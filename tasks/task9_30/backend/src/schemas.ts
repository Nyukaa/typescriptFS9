import { z } from "zod";
import { Gender } from "./types";

export const newPatientSchema = z.object({
  name: z.string(),
  dateOfBirth: z.string().date(),
  ssn: z.string(),
  gender: z.nativeEnum(Gender),
  occupation: z.string(),
  entries: z.array(z.any()),
});
export const patientSchema = newPatientSchema.extend({
  id: z.string(),
});
