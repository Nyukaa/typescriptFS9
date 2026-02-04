"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newEntrySchema = exports.patientSchema = exports.newPatientSchema = void 0;
const zod_1 = require("zod");
const types_1 = require("./types");
//Patient Schemas
exports.newPatientSchema = zod_1.z.object({
    name: zod_1.z.string(),
    // Fix date validation
    dateOfBirth: zod_1.z.string().refine((d) => !isNaN(Date.parse(d)), {
        message: "Invalid date",
    }),
    ssn: zod_1.z.string(),
    gender: zod_1.z.nativeEnum(types_1.Gender),
    occupation: zod_1.z.string(),
    entries: zod_1.z.array(zod_1.z.any()).default([]), // Default to empty array
});
exports.patientSchema = exports.newPatientSchema.extend({
    id: zod_1.z.string(), // id field for existing patients
});
// Entry Schemas
const baseEntrySchema = zod_1.z.object({
    date: zod_1.z.string(),
    specialist: zod_1.z.string(),
    description: zod_1.z.string(),
    diagnosisCodes: zod_1.z.array(zod_1.z.string()).optional(),
});
const healthCheckEntrySchema = baseEntrySchema.extend({
    type: zod_1.z.literal("HealthCheck"),
    healthCheckRating: zod_1.z.number().min(0).max(3),
});
const hospitalEntrySchema = baseEntrySchema.extend({
    type: zod_1.z.literal("Hospital"),
    discharge: zod_1.z.object({
        date: zod_1.z.string(),
        criteria: zod_1.z.string(),
    }),
});
const occupationalEntrySchema = baseEntrySchema.extend({
    type: zod_1.z.literal("OccupationalHealthcare"),
    employerName: zod_1.z.string(),
    sickLeave: zod_1.z
        .object({
        startDate: zod_1.z.string(),
        endDate: zod_1.z.string(),
    })
        .optional(),
});
// Union Schema for New Entry
exports.newEntrySchema = zod_1.z.discriminatedUnion("type", [
    healthCheckEntrySchema,
    hospitalEntrySchema,
    occupationalEntrySchema,
]);
