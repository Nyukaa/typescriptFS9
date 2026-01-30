import { Patient } from "../src/types";
import { patientSchema } from "../src/schemas";
const data = [
  {
    id: "d2773336-f723-11e9-8f0b-362b9e155667",
    name: "John McClane",
    dateOfBirth: "1986-07-09",
    ssn: "090786-122X",
    gender: "male",
    occupation: "New york city cop",
    entries: [
      {
        id: "e3",
        date: "2017-07-22",
        type: "HealthCheck",
        specialist: "Dr. Cuddy",
        description: "Routine check-up, all normal",
        diagnosisCodes: ["Z57.1", "Z74.3"],
        healthCheckRating: 3,
      },
    ],
  },
  {
    id: "d2773598-f723-11e9-8f0b-362b9e155667",
    name: "Martin Riggs",
    dateOfBirth: "1979-01-30",
    ssn: "300179-77A",
    gender: "male",
    occupation: "Cop",
    entries: [
      {
        id: "e1",
        date: "2015-01-02",
        type: "Hospital",
        specialist: "MD House",
        diagnosisCodes: ["S62.5"],
        description: "Thumb injury",
        healthCheckRating: 2,
        discharge: { date: "2015-01-16", criteria: "Healed" },
      },
      {
        id: "e2",
        date: "2016-03-10",
        type: "OccupationalHealthcare",
        specialist: "Dr. Wilson",
        employerName: "FBI",
        description: "Back pain from fieldwork",
        diagnosisCodes: ["S62.5"],
        sickLeave: {
          startDate: "2016-03-10",
          endDate: "2016-03-20",
        },
      },
    ],
  },
  {
    id: "d27736ec-f723-11e9-8f0b-362b9e155667",
    name: "Hans Gruber",
    dateOfBirth: "1970-04-25",
    ssn: "250470-555L",
    gender: "other",
    occupation: "Technician",
    entries: [
      {
        id: "e1",
        date: "2015-01-02",
        type: "Hospital",
        specialist: "MD House",
        diagnosisCodes: ["S62.5"],
        description: "Thumb injury",
        discharge: { date: "2015-01-16", criteria: "Healed" },
      },
    ],
  },
  {
    id: "d2773822-f723-11e9-8f0b-362b9e155667",
    name: "Dana Scully",
    dateOfBirth: "1974-01-05",
    ssn: "050174-432N",
    gender: "female",
    occupation: "Forensic Pathologist",
    entries: [
      {
        id: "e2",
        date: "2016-03-10",
        type: "OccupationalHealthcare",
        specialist: "Dr. Wilson",
        employerName: "FBI",
        diagnosisCodes: ["S62.5", "Z57.1", "Z74.3"],
        description: "Back pain from fieldwork",

        sickLeave: { startDate: "2016-03-10", endDate: "2016-03-20" },
      },
      {
        id: "e3",
        date: "2017-07-25",
        type: "HealthCheck",
        specialist: "Dr. Cuddy",
        diagnosisCodes: ["S62.5"],
        description: "Routine check-up, all normal",
        healthCheckRating: 2,
      },
    ],
  },
  {
    id: "d2773c6e-f723-11e9-8f0b-362b9e155667",
    name: "Matti Luukkainen",
    dateOfBirth: "1971-04-09",
    ssn: "090471-8890",
    gender: "male",
    occupation: "Digital evangelist",
    entries: [
      {
        id: "e3",
        date: "2017-07-22",
        type: "HealthCheck",
        specialist: "Dr. Cuddy",
        diagnosisCodes: ["S62.5"],
        description: "Routine check-up, all normal",
        healthCheckRating: 0,
      },
    ],
  },
];
const patient: Patient[] = data.map((obj) => patientSchema.parse(obj));
export default patient;
