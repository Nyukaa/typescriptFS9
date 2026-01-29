export interface Diagnosis {
  code: string;
  name: string;
  latin?: string;
}

//export type Gender = "male" | "female" | "other";
export enum Gender {
  Male = "male",
  Female = "female",
  Other = "other",
}
export interface Patient {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: Gender;
  occupation: string;
  entries: Entry[];
}
export type NonSensitivePatient = Omit<Patient, "ssn" | "entries">;

export type PublicPatient = Omit<Patient, "ssn">;
export type NewPatient = Omit<Patient, "id">;

interface BaseEntry {
  id: string;
  description: string;
  date: string;
  specialist: string;
  diagnosisCodes?: Array<Diagnosis["code"]>;
}
export enum HealthCheckRating {
  "Healthy" = 0,
  "LowRisk" = 1,
  "HighRisk" = 2,
  "CriticalRisk" = 3,
}
interface HealthCheckEntry extends BaseEntry {
  type: "HealthCheck";
  healthCheckRating: HealthCheckRating;
}

interface HospitalEntry extends BaseEntry {
  type: "Hospital";
  discharge: {
    date: string;
    criteria: string;
  };
}
interface OccupationalHealthcareEntry extends BaseEntry {
  type: "OccupationalHealthcare";
  employerName: string;
  sickLeave?: {
    startDate: string;
    endDate: string;
  };
}
export type Entry =
  | HospitalEntry
  | OccupationalHealthcareEntry
  | HealthCheckEntry;
//Omit<T, K> — это стандартный встроенный тип TypeScript, который удаляет ключ K из типа T.
type UnionOmit<T, K extends string | number | symbol> = T extends unknown
  ? Omit<T, K>
  : never;
export type EntryWithoutId = UnionOmit<Entry, "id">;
