import { NewEntry } from "../types";
import { newEntrySchema } from "../schemas";

export const toNewEntry = (object: unknown): NewEntry => {
  return newEntrySchema.parse(object);
};
// const parseHealthCheckEntry = (object: any): NewHealthCheckEntry => {
//   return {
//     type: "HealthCheck",
//     date: parseDate(object.date),
//     specialist: parseString(object.specialist),
//     description: parseString(object.description),
//     healthCheckRating: parseHealthCheckRating(object.healthCheckRating),
//     diagnosisCodes: parseDiagnosisCodes(object),
//   };
// };
// export const toNewEntry = (object: unknown): NewEntry => {
//   if (!object || typeof object !== "object") {
//     throw new Error("Invalid or missing entry data");
//   }

//   if (!("type" in object)) {
//     throw new Error("Missing entry type");
//   }

//   switch (object.type) {
//     case "HealthCheck":
//       return parseHealthCheckEntry(object);

//     case "Hospital":
//       return parseHospitalEntry(object);

//     case "OccupationalHealthcare":
//       return parseOccupationalEntry(object);

//     default:
//       throw new Error("Unknown entry type");
//   }
// };
