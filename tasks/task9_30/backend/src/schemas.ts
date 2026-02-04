import { z } from "zod";
import { Gender } from "./types";
//Patient Schemas
export const newPatientSchema = z.object({
  name: z.string(),
  // Fix date validation
  dateOfBirth: z.string().refine((d) => !isNaN(Date.parse(d)), {
    message: "Invalid date",
  }),
  ssn: z.string(),
  gender: z.nativeEnum(Gender),
  occupation: z.string(),
  entries: z.array(z.any()).default([]), // Default to empty array
});

export const patientSchema = newPatientSchema.extend({
  id: z.string(), // id field for existing patients
});
// Entry Schemas
const baseEntrySchema = z.object({
  date: z.string(),
  specialist: z.string(),
  description: z.string(),
  diagnosisCodes: z.array(z.string()).optional(),
});
const healthCheckEntrySchema = baseEntrySchema.extend({
  type: z.literal("HealthCheck"),
  healthCheckRating: z.number().min(0).max(3),
});
const hospitalEntrySchema = baseEntrySchema.extend({
  type: z.literal("Hospital"),
  discharge: z.object({
    date: z.string(),
    criteria: z.string(),
  }),
});

const occupationalEntrySchema = baseEntrySchema.extend({
  type: z.literal("OccupationalHealthcare"),
  employerName: z.string(),
  sickLeave: z
    .object({
      startDate: z.string(),
      endDate: z.string(),
    })
    .optional(),
});
// Union Schema for New Entry
export const newEntrySchema = z.discriminatedUnion("type", [
  healthCheckEntrySchema,
  hospitalEntrySchema,
  occupationalEntrySchema,
]);
