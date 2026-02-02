import { TextField } from "@mui/material";
interface Props {
  employerName: string;
  setEmployerName: (value: string) => void;

  sickLeaveStart: string;
  setSickLeaveStart: (value: string) => void;
  sickLeaveEnd: string;
  setSickLeaveEnd: (value: string) => void;
}

const OccupationalFields = ({
  employerName,
  setEmployerName,

  sickLeaveStart,
  setSickLeaveStart,
  sickLeaveEnd,
  setSickLeaveEnd,
}: Props) => {
  return (
    <div>
      <TextField
        fullWidth
        label="Employer Name"
        value={employerName}
        onChange={(e) => setEmployerName(e.target.value)}
        style={{ marginTop: 10 }}
      />

      <TextField
        fullWidth
        label="Sick Leave Start Date"
        type="date"
        value={sickLeaveStart}
        onChange={(e) => setSickLeaveStart(e.target.value)}
        InputLabelProps={{ shrink: true }}
        style={{ marginTop: 10 }}
      />
      <TextField
        fullWidth
        label="Sick Leave End Date"
        type="date"
        value={sickLeaveEnd}
        onChange={(e) => setSickLeaveEnd(e.target.value)}
        InputLabelProps={{ shrink: true }}
        style={{ marginTop: 10 }}
      />
    </div>
  );
};
export default OccupationalFields;
