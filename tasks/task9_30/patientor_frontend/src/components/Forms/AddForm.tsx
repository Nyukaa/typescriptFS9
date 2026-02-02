import { useState } from "react";
import { EntryWithoutId } from "../../types";
import HealthCheckFields from "./HealthCheckFields";

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
        <div>
          Type
          <select
            value={type}
            onChange={(e) => setType(e.target.value as EntryType)}
          >
            <option value="HealthCheck">Health Check</option>
            <option value="Hospital">Hospital</option>
            <option value="OccupationalHealthcare">
              Occupational Healthcare
            </option>
          </select>
        </div>
        {/* common fields */}
        <input
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          placeholder="specialist"
          value={specialist}
          onChange={(e) => setSpecialist(e.target.value)}
        />

        {type === "HealthCheck" && (
          <HealthCheckFields
            healthCheckRating={healthCheckRating}
            setHealthCheckRating={setHealthCheckRating}
          />
        )}
        {type === "Hospital" && (
          <HospitalFields
            dischargeDate={dischargeDate}
            setDischargeDate={setDischargeDate}
            criteria={description}
            setCriteria={setDescription}
          />
        )}

        {type === "OccupationalHealthcare" && (
          <OccupationalFields
            employerName={employerName}
            sickLeaveStart={sickLeaveStart}
            sickLeaveEnd={sickLeaveEnd}
            setEmployerName={setEmployerName}
            setSickLeaveStart={setSickLeaveStart}
            setSickLeaveEnd={setSickLeaveEnd}
          />
        )}

        <button type="submit">add</button>
      </form>
    </div>
  );
};

export default AddForm;
