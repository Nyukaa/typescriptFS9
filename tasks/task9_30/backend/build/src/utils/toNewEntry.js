"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toNewEntry = void 0;
const schemas_1 = require("../schemas");
const toNewEntry = (object) => {
    return schemas_1.newEntrySchema.parse(object);
};
exports.toNewEntry = toNewEntry;
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
