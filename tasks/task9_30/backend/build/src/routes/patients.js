"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const patientService_1 = __importDefault(require("../services/patientService"));
const middleware_1 = require("../middleware");
const toNewEntry_1 = require("../utils/toNewEntry");
const patientService_2 = require("../services/patientService");
console.log("patients router loaded");
const router = express_1.default.Router();
// Get all public patient data
router.get("/", (_req, res) => {
    res.send(patientService_1.default.getPublicPatients());
});
//Zod middleware to validate new patient data
router.post("/", middleware_1.newPatientParser, (req, res) => {
    const addedP = patientService_1.default.addPatient(req.body);
    res.json(addedP);
});
// /api/patients/:id
router.get("/:id", (req, res) => {
    const patient = patientService_1.default.findById(req.params.id);
    console.log("Retrieved patient:", patient);
    if (patient) {
        res.json(patient);
    }
    else {
        res.status(404).send({ error: "Patient not found" });
    }
});
// Add new entry to patient by id
router.post("/:id/entries", (req, res) => {
    try {
        const newEntry = (0, toNewEntry_1.toNewEntry)(req.body);
        const addedEntry = (0, patientService_2.addEntry)(req.params.id, newEntry);
        res.json(addedEntry);
    }
    catch (e) {
        if (e instanceof Error) {
            res.status(400).send(e.message);
        }
    }
});
exports.default = router;
