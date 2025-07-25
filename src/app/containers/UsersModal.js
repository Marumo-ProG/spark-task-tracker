import { useAppContext } from "../AppContext";

// MUI
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

// Components

// Constants
import { Colors } from "@/common/constants";

const UsersModal = ({
  open,
  handleClose,
  users,
  selectedUsers,
  setSelectedUsers,
}) => {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle
        sx={{ backgroundColor: Colors.primary, color: Colors.white }}
      >
        Select Users
      </DialogTitle>
      <Stack p={2} spacing={2}>
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search users..."
          sx={{ width: "100%" }}
        />
        <Stack spacing={1}>
          {users.map((user) => (
            <Stack
              key={user.id}
              direction="row"
              alignItems="center"
              spacing={2}
              sx={{
                padding: "8px",
                borderRadius: "4px",
                cursor: "pointer",
                "&:hover": {
                  // backgroundColor: Colors.lightGrey,
                },
                backgroundColor:
                  selectedUsers.filter((u) => u.id === user.id).length > 0
                    ? Colors.primary
                    : "transparent",
              }}
              onClick={() => {
                if (selectedUsers.filter((u) => u.id === user.id).length > 0) {
                  setSelectedUsers(
                    selectedUsers.filter((obj) => obj.id !== user.id)
                  );
                } else {
                  setSelectedUsers([...selectedUsers, user]);
                }
              }}
            >
              <Avatar
                src={process.env.NEXT_PUBLIC_API_URL + user.image}
                alt={user.name}
              />
              <Typography variant="body1" sx={{ color: Colors.black }}>
                {user.name}
              </Typography>
            </Stack>
          ))}
        </Stack>
        <Stack alignItems={"end"}>
          <Button onClick={handleClose}>Done</Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default UsersModal;
