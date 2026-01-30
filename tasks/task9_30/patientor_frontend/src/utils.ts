//for extracting the latest health check rating from patient entries
import { Entry } from "./types";

export const getLatestHealthCheckRating = (entries: Entry[]): number | null => {
  const healthChecks = entries.filter(
    (e): e is Extract<Entry, { type: "HealthCheck" }> =>
      e.type === "HealthCheck"
  );

  if (healthChecks.length === 0) {
    return null;
  }

  return healthChecks[healthChecks.length - 1].healthCheckRating;
};
//for exhaustive type checking in discriminated unions (switch statements)
export const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};
