import {
  Dialog,
  DialogTitle,
  DialogContent,
  Divider,
  Alert,
} from "@mui/material";
import AddForm from "./AddForm";
import { EntryWithoutId } from "../../types";

interface Props {
  modalOpen: boolean;
  onClose: () => void;
  onSubmit: (entry: EntryWithoutId) => void;
  error?: string;
  defaultEmployerName?: string;
}

const AddEntryModal = ({
  modalOpen,
  onClose,
  onSubmit,
  error,
  defaultEmployerName,
}: Props) => (
  <Dialog fullWidth open={modalOpen} onClose={onClose}>
    <DialogTitle>Add new entry</DialogTitle>
    <Divider />
    <DialogContent>
      {error && <Alert severity="error">{error}</Alert>}

      <AddForm
        onSubmit={onSubmit}
        onCancel={onClose}
        error={error}
        defaultEmployerName={defaultEmployerName}
      />
    </DialogContent>
  </Dialog>
);

export default AddEntryModal;
