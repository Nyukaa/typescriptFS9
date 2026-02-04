"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//utils with Zod schema parsing
const schemas_1 = require("../schemas");
// Zod is used to parse and validate the input object against the newPatientSchema
const toNewDiaryEntry = (object) => {
    return schemas_1.newPatientSchema.parse(object);
};
exports.default = toNewDiaryEntry;
