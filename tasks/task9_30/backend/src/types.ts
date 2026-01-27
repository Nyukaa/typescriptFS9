export interface Diagnosis {
  code: string;
  name: string;
  latin?: string;
}
export interface Entry {}
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
