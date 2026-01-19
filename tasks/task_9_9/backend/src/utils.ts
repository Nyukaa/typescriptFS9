import { NewPatient, Gender } from "./types";
// type guards for string
const isString = (text: unknown): text is string => {
  return typeof text === "string" || text instanceof String;
};
// type guard for date
const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const parseDate = (date: unknown): string => {
  if (!date || !isString(date) || !isDate(date)) {
    throw new Error("Incorrect or missing date");
  }
  return date; // возвращаем значение типа string "2017-05-11"
};
// parsing and validation for name
const parseName = (name: unknown): string => {
  if (!isString(name)) {
    throw new Error("Incorrect name");
  }
  return name;
};
// parsing and validation for ssn
const parseSsn = (ssn: unknown): string => {
  if (!isString(ssn)) {
    throw new Error("Incorrect ssn");
  }
  return ssn;
};

const isGender = (param: string): param is Gender => {
  return Object.values(Gender)
    .map((v) => v.toString())
    .includes(param);
};

// parsing and validation for gender
const parseGender = (gender: unknown): Gender => {
  if (!isString(gender) || !isGender(gender)) {
    throw new Error("Incorrect or missing gender");
  }
  return gender;
};

const toNewPatient = (object: unknown): NewPatient => {
  if (!object || typeof object !== "object") {
    throw new Error("Incorrect or missing data");
  }
  // 1.1 проверяем наличие всех обязательных полей
  if (
    !("name" in object) ||
    !("dateOfBirth" in object) ||
    !("ssn" in object) ||
    !("gender" in object) ||
    !("occupation" in object)
  ) {
    throw new Error("Missing required fields");
  }
  // 2 приводим объект к типу с неизвестными ключами и значениями
  const patient = object as { [key: string]: unknown };
  // 3 парсим и валидируем каждое поле
  const newPatient: NewPatient = {
    name: parseName(patient.name),
    dateOfBirth: parseDate(patient.dateOfBirth),
    ssn: parseSsn(patient.ssn),
    gender: parseGender(patient.gender),
    occupation: parseName(patient.occupation),
  };

  return newPatient;
};

export default toNewPatient;
