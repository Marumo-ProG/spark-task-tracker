// MUI
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

// Constants
import { Colors } from "@/common/constants";

const DeleteModal = ({ open, handleClose, onDelete, itemName }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="delete-modal-title"
      aria-describedby="delete-modal-description"
    >
      <DialogTitle id="delete-modal-title">Delete {itemName}?</DialogTitle>
      <Stack spacing={2} sx={{ padding: 2, textAlign: "center" }}>
        <Typography variant="body1">
          Are you sure you want to delete this {itemName}? This action cannot be
          undone.
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center">
          <Button variant="outlined" color="primary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" color="error" onClick={onDelete}>
            Delete
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default DeleteModal;
