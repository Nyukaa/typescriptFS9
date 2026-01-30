import React, { createContext, useReducer, useContext } from "react";
import { State, initialState } from "./state";
import { reducer, Action } from "./reducer";

const StateContext = createContext<[State, React.Dispatch<Action>] | undefined>(
  undefined
);

export const StateProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={[state, dispatch]}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useStateValue must be used within StateProvider");
  }
  return context;
};
