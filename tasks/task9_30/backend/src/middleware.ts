import { Request, Response, NextFunction } from "express";
import { z } from "zod";
import { newPatientSchema } from "./schemas";
// Middleware для проверки нового дневника
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

// Middleware для обработки ошибок
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
