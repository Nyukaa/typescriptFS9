export interface Diagnosis {
  code: string;
  name: string;
  latin?: string;
}
export type Gender = "male" | "female" | "other";

export interface Patient {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: Gender;
  occupation: string;
}
export type PublicPatient = Omit<Patient, "ssn">;

// Pick   выбираем нужные поля / хорошо, когда полей мало
// Omit   исключаем опасные поля / чаще используется
// !!TypeScript не фильтрует данные / тип ≠ реальные данные / фильтрацию нужно делать вручную .map
