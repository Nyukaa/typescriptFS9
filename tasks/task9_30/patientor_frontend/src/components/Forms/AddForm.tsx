import { useState } from "react";
import { EntryWithoutId } from "../../types";
import HealthCheckFields from "./HealthCheckFields";
import {
  TextField,
  InputLabel,
  MenuItem,
  Select,
  Grid,
  Button,
  SelectChangeEvent,
} from "@mui/material";
import HospitalFields from "./HospitalFields";
import OccupationalFields from "./OccupationalFields";
interface Props {
  onSubmit: (entry: EntryWithoutId) => void;
  error?: string;
  defaultEmployerName?: string;
}

const AddForm = ({ onSubmit, error, defaultEmployerName }: Props) => {
  // Common fields
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [specialist, setSpecialist] = useState("");

  type EntryType = "HealthCheck" | "Hospital" | "OccupationalHealthcare";
  const [type, setType] = useState<EntryType>("HealthCheck");
  // Health Check
  const [healthCheckRating, setHealthCheckRating] = useState("");
  // Occupational
  const [employerName, setEmployerName] = useState(defaultEmployerName || "");
  const [sickLeaveStart, setSickLeaveStart] = useState("");
  const [sickLeaveEnd, setSickLeaveEnd] = useState("");
  // Hospital
  const [dischargeDate, setDischargeDate] = useState("");
  const [criteria, setCriteria] = useState("");

  const submit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    switch (type) {
      case "HealthCheck":
        onSubmit({
          type: "HealthCheck",
          description,
          date,
          specialist,
          healthCheckRating: Number(healthCheckRating),
        });
        break;

      case "Hospital":
        onSubmit({
          type: "Hospital",
          description,
          date,
          specialist,
          discharge: {
            date: dischargeDate,
            criteria: criteria,
          },
        });
        break;

      case "OccupationalHealthcare":
        onSubmit({
          type: "OccupationalHealthcare",
          description,
          date,
          specialist,
          employerName,
          sickLeave:
            sickLeaveStart && sickLeaveEnd
              ? {
                  startDate: sickLeaveStart,
                  endDate: sickLeaveEnd,
                }
              : undefined,
        });
        break;
    }
  };

  return (
    <div>
      <h3>Add new entry</h3>

      {error && <div style={{ color: "red" }}>{error}</div>}

      <form onSubmit={submit}>
        <InputLabel>Type</InputLabel>
        <Select
          fullWidth
          value={type}
          onChange={(e: SelectChangeEvent) =>
            setType(e.target.value as EntryType)
          }
        >
          <MenuItem value="HealthCheck">Health Check</MenuItem>
          <MenuItem value="Hospital">Hospital</MenuItem>
          <MenuItem value="OccupationalHealthcare">
            Occupational Healthcare
          </MenuItem>
        </Select>

        {/* Общие поля */}
        <TextField
          fullWidth
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ marginTop: 10 }}
        />
        <TextField
          fullWidth
          label="Date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          InputLabelProps={{ shrink: true }}
          style={{ marginTop: 10 }}
        />
        <TextField
          fullWidth
          label="Specialist"
          value={specialist}
          onChange={(e) => setSpecialist(e.target.value)}
          style={{ marginTop: 10 }}
        />

        {/* Специфические поля */}
        {type === "HealthCheck" && (
          <HealthCheckFields
            healthCheckRating={healthCheckRating}
            setHealthCheckRating={setHealthCheckRating}
          />
        )}

        {type === "OccupationalHealthcare" && (
          <OccupationalFields
            employerName={employerName}
            setEmployerName={setEmployerName}
            sickLeaveStart={sickLeaveStart}
            setSickLeaveStart={setSickLeaveStart}
            sickLeaveEnd={sickLeaveEnd}
            setSickLeaveEnd={setSickLeaveEnd}
          />
        )}

        {type === "Hospital" && (
          <HospitalFields
            dischargeDate={dischargeDate}
            setDischargeDate={setDischargeDate}
            criteria={criteria}
            setCriteria={setCriteria}
          />
        )}

        <Grid container spacing={2} style={{ marginTop: 20 }}>
          {/* <Grid item>
            <Button
              variant="contained"
              color="secondary"
              type="button"
              onClick={() => {}}
            >
              Cancel
            </Button>
          </Grid> */}
          <Grid item>
            <Button variant="contained" color="primary" type="submit">
              Add
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default AddForm;
