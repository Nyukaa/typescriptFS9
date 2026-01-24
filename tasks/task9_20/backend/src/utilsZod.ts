import { newEntrySchema } from "./schemas";
import { NewDiaryEntry } from "./types";

const toNewDiaryEntry = (object: unknown): NewDiaryEntry => {
  return newEntrySchema.parse(object);
};

export default toNewDiaryEntry;
