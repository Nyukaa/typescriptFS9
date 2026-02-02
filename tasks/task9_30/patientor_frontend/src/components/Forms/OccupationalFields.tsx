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
      <label>Employer Name</label>
      <input
        placeholder="Employer Name"
        value={employerName}
        onChange={(e) => setEmployerName(e.target.value)}
      />

      <label>Sick Leave Start Date</label>
      <input
        type="date"
        value={sickLeaveStart}
        onChange={(e) => setSickLeaveStart(e.target.value)}
      />
      <label>Sick Leave End Date</label>
      <input
        type="date"
        value={sickLeaveEnd}
        onChange={(e) => setSickLeaveEnd(e.target.value)}
      />
    </div>
  );
};
export default OccupationalFields;
