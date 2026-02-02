import { useState } from "react";
import { EntryWithoutId } from "../types";

interface Props {
  onSubmit: (entry: EntryWithoutId) => void;
  error?: string;
}

const AddHealthCheckEntryForm = ({ onSubmit, error }: Props) => {
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [specialist, setSpecialist] = useState("");
  const [healthCheckRating, setHealthCheckRating] = useState("");

  const submit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const entry: EntryWithoutId = {
      type: "HealthCheck",
      description,
      date,
      specialist,
      healthCheckRating: Number(healthCheckRating),
    };

    console.log("ENTRY SENT", entry);
    onSubmit(entry);
  };

  return (
    <div>
      <h3>Add new HealthCheck entry</h3>

      {error && <div style={{ color: "red" }}>{error}</div>}

      <form onSubmit={submit}>
        <div>
          description
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div>
          date
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div>
          specialist
          <input
            value={specialist}
            onChange={(e) => setSpecialist(e.target.value)}
          />
        </div>

        <div>
          healthCheckRating
          <input
            type="number"
            min={0}
            max={3}
            value={healthCheckRating}
            onChange={(e) => setHealthCheckRating(e.target.value)}
          />
        </div>

        <button type="submit">add</button>
      </form>
    </div>
  );
};

export default AddHealthCheckEntryForm;
