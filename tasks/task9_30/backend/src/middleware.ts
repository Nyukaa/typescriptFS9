import { Request, Response, NextFunction } from "express";
import { z } from "zod";
import { newPatientSchema } from "./schemas";
// Middleware to validate new patient data
export const newPatientParser = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  try {
    {
      newPatientSchema.parse(req.body);
      next();
    }
  } catch (error: unknown) {
    next(error);
  }
};

// Middleware for handling Zod validation errors
export const errorMiddleware = (
  error: unknown,
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof z.ZodError) {
    res.status(400).send({ error: error.issues });
  } else {
    next(error); // передаём дальше, если это не ZodError
  }
};
