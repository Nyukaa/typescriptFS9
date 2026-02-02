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
  onCancel: () => void;
}

const AddForm = ({ onSubmit, error, defaultEmployerName, onCancel }: Props) => {
  // Common fields
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [specialist, setSpecialist] = useState("");
  const [diagnosesCodes, setDiagnosesCodes] = useState<string[]>([]);
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
    const baseEntry = {
      description,
      date,
      specialist,
      diagnosisCodes: diagnosesCodes.length > 0 ? diagnosesCodes : undefined,
    };
    switch (type) {
      case "HealthCheck":
        onSubmit({
          ...baseEntry,
          type: "HealthCheck",
          healthCheckRating: Number(healthCheckRating),
        });
        break;

      case "Hospital":
        onSubmit({
          ...baseEntry,
          type: "Hospital",

          discharge: {
            date: dischargeDate,
            criteria: criteria,
          },
        });
        break;

      case "OccupationalHealthcare":
        onSubmit({
          ...baseEntry,
          type: "OccupationalHealthcare",

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
        <TextField
          fullWidth
          label="Diagnosis Codes (comma separated)"
          value={diagnosesCodes.join(", ")}
          onChange={(e) =>
            setDiagnosesCodes(
              e.target.value.split(",").map((code) => code.trim())
            )
          }
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
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              type="button"
              onClick={onCancel}
            >
              Cancel
            </Button>
          </Grid>
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
