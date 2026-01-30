import { useState, useEffect } from "react";
import axios from "axios";
import { Route, Link, Routes } from "react-router-dom";
import Layout from "./Layout";
//import { Button, Divider, Container, Typography } from "@mui/material";
import PatientPage from "./components/PatientPage";
import { apiBaseUrl } from "./constants";
import { Patient } from "./types";

import patientService from "./services/patients";
import PatientListPage from "./components/PatientListPage";
import diagnosesService from "./services/diagnoses";
import { useStateValue } from "./state/StateProvider";
const App = () => {
  const [patients, setPatients] = useState<Patient[]>([]);

  useEffect(() => {
    void axios.get<void>(`${apiBaseUrl}/ping`);

    const fetchPatientList = async () => {
      const patients = await patientService.getAll();
      setPatients(patients);
    };
    void fetchPatientList();
  }, []);
  //getting dispatch from state provider
  const [, dispatch] = useStateValue();
  //fetching diagnoses and setting them in global state
  useEffect(() => {
    const fetchDiagnoses = async () => {
      const diagnoses = await diagnosesService.getAll();
      dispatch({ type: "SET_DIAGNOSES", payload: diagnoses });
    };
    void fetchDiagnoses();
  }, [dispatch]);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PatientListPage patients={patients} setPatients={setPatients} />
            }
          />
          <Route path="patients/:id" element={<PatientPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
