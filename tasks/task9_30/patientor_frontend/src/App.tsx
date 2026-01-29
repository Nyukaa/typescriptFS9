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
