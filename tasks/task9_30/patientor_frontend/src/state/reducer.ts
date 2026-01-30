import { Diagnosis } from "../types";
import { State } from "./state";

export type Action = {
  type: "SET_DIAGNOSES";
  payload: Diagnosis[];
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_DIAGNOSES":
      return {
        ...state,
        //  Convert array to object with codes as keys
        diagnoses: action.payload.reduce((result, diagnosis) => {
          result[diagnosis.code] = diagnosis;
          return result;
        }, {} as Record<string, Diagnosis>),
      };
    default:
      return state;
  }
};
