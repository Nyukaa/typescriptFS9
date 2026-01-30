import { Diagnosis } from "../types";

export type State = {
  diagnoses: Record<string, Diagnosis>;
};

export const initialState: State = {
  diagnoses: {},
};
