import { newEntrySchema } from "./schemas";
import { NewDiaryEntry } from "./types";
// Function to parse and validate a new diary entry
const toNewDiaryEntry = (object: unknown): NewDiaryEntry => {
  return newEntrySchema.parse(object);
};

export default toNewDiaryEntry;
