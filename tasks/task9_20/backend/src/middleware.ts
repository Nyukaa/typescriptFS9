import { Request, Response, NextFunction } from "express";
import { z } from "zod";
import { newEntrySchema } from "./schemas";
// Middleware for validating new diary entries
export const newDiaryParser = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  try {
    {
      newEntrySchema.parse(req.body);
      next();
    }
  } catch (error: unknown) {
    next(error);
  }
};

// Middleware for error handling
export const errorMiddleware = (
  error: unknown,
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof z.ZodError) {
    res.status(400).send({ error: error.issues });
  } else {
    next(error);
  }
};
