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
  // check that object is not null and is of type object
  if (!object || typeof object !== "object") {
    throw new Error("Incorrect or missing data");
  }
  // check for required fields
  if (
    !("name" in object) ||
    !("dateOfBirth" in object) ||
    !("ssn" in object) ||
    !("gender" in object) ||
    !("occupation" in object)
  ) {
    throw new Error("Missing required fields");
  }
  // now we can safely cast object to an object with string keys
  const patient = object as { [key: string]: unknown };
  // parse and validate each field
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
