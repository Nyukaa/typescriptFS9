import { Entry } from "../types";
import { assertNever } from "../utils";
import HospitalEntryDetails from "./HospitalEntryDetails";
import OccupationalEntryDetails from "./OccupationalEntryDetails";
import HealthCheckEntryDetails from "./HealthCheckEntryDetails";
interface Props {
  entry: Entry;
}
const EntryDetails = ({ entry }: Props) => {
  switch (entry.type) {
    case "Hospital":
      return <HospitalEntryDetails entry={entry} />;

    case "OccupationalHealthcare":
      return <OccupationalEntryDetails entry={entry} />;

    case "HealthCheck":
      return <HealthCheckEntryDetails entry={entry} />;

    default:
      return assertNever(entry);
  }
};
export default EntryDetails;
