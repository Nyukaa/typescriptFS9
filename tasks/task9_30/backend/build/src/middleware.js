"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = exports.newPatientParser = void 0;
const zod_1 = require("zod");
const schemas_1 = require("./schemas");
// Middleware to validate new patient data
const newPatientParser = (req, _res, next) => {
    try {
        {
            schemas_1.newPatientSchema.parse(req.body);
            next();
        }
    }
    catch (error) {
        next(error);
    }
};
exports.newPatientParser = newPatientParser;
// Middleware for handling Zod validation errors
const errorMiddleware = (error, _req, res, next) => {
    if (error instanceof zod_1.z.ZodError) {
        res.status(400).send({ error: error.issues });
    }
    else {
        next(error); // передаём дальше, если это не ZodError
    }
};
exports.errorMiddleware = errorMiddleware;
