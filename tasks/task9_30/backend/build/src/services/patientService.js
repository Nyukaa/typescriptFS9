"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addEntry = void 0;
const patients_1 = __importDefault(require("../../data/patients"));
const uuid_1 = require("uuid");
const getAllPatients = () => {
    return patients_1.default;
};
const findById = (id) => {
    //console.log("Searching for patient with id:", id);
    const patient = patients_1.default.find((p) => p.id === id);
    return patient;
};
const getPublicPatients = () => {
    return patients_1.default.map((_a) => {
        var { ssn } = _a, rest = __rest(_a, ["ssn"]);
        return rest;
    });
};
//use Zod schema to validate new patient data before adding
const addPatient = (entry) => {
    const newPatient = Object.assign({ id: (0, uuid_1.v4)() }, entry);
    patients_1.default.push(newPatient);
    return newPatient;
};
//add entry to patient by id
const addEntry = (patientId, entry) => {
    const patient = findById(patientId);
    if (!patient) {
        throw new Error("Patient not found");
    }
    const newEntry = Object.assign({ id: (0, uuid_1.v4)() }, entry);
    patient.entries.push(newEntry);
    return newEntry;
};
exports.addEntry = addEntry;
exports.default = {
    getAllPatients,
    getPublicPatients,
    addPatient,
    findById,
};
