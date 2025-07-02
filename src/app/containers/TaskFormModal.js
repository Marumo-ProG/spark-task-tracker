"use client";

import { useAppContext } from "../AppContext";

import { useState } from "react";

import { useForm, Controller } from "react-hook-form";

// MUI
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import AvataGroup from "@mui/material/AvatarGroup";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

// Containers
import UsersModal from "./UsersModal";

// Constants
import { Colors } from "@/common/constants";

// Images
import TestImage from "@/assets/images/test_profile.jpg";

// Icons
import AddRoundedIcon from "@mui/icons-material/AddRounded";

const user = {
  id: 1,
  name: "John Doe",
  image: TestImage,
};

const TaskFormModal = ({ open, handleClose, task }) => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      title: task?.title || "",
      description: task?.description || "",
      due_date: task?.due_date || "",
      author_id: task?.author_id || user.id,
      assigned_to: task?.assigned_to || [],
      priority: task?.priority || "Low",
      status: task?.status || "todo",
    },
  });

  const { allUsers, reloadTasks } = useAppContext();

  // const [users, setUsers] = useState(allUsers);

  const [selectedUsers, setSelectedUsers] = useState(task?.assigned_to || []);
  const [openUsersModal, setOpenUsersModal] = useState(false);

  const handleFormSubmit = (data) => {
    data.user_id = allUsers[0].id; // Assuming the first user is the author
    data.assigned_to = [...selectedUsers.map((user) => user.id)];

    console.log("Form Data:", data);

    // posting the data to the server
    if (task) {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}api/tasks/${task.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then(() => {
        reloadTasks();
        handleClose();
        reset();
      });
    } else {
      // Create new task
      fetch(`${process.env.NEXT_PUBLIC_API_URL}api/tasks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then(() => {
        reloadTasks();
        handleClose();
        reset();
      });
    }
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle
          sx={{ backgroundColor: Colors.primary, color: Colors.white }}
        >
          {task ? "Edit Task" : "Create Task"}
        </DialogTitle>
        <Stack
          component="form"
          spacing={2}
          padding={2}
          onSubmit={handleSubmit(handleFormSubmit)}
        >
          <Controller
            name="title"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Task Title"
                variant="outlined"
                fullWidth
                required
              />
            )}
          />
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Description"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
              />
            )}
          />
          <Controller
            name="due_date"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                type="date"
                label="Due Date"
                variant="outlined"
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
            )}
          />

          <Controller
            name="priority"
            control={control}
            render={({ field }) => (
              <Select {...field} label="Priority" variant="outlined" fullWidth>
                <MenuItem value="Low">Low</MenuItem>
                <MenuItem value="Medium">Medium</MenuItem>
                <MenuItem value="High">High</MenuItem>
              </Select>
            )}
          />
          <Controller
            name="status"
            control={control}
            render={({ field }) => (
              <Select {...field} label="Status" variant="outlined" fullWidth>
                <MenuItem value="todo">To Do</MenuItem>
                <MenuItem value="in_progress">In Progress</MenuItem>
                <MenuItem value="in_review">In Review</MenuItem>
                <MenuItem value="done">Done</MenuItem>
              </Select>
            )}
          />

          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="body2" sx={{ color: Colors.black }}>
              Assigned To:
            </Typography>
            {selectedUsers.length > 0 ? (
              <AvataGroup
                max={4}
                sx={{ "& .MuiAvatar-root": { width: 24, height: 24 } }}
              >
                {selectedUsers.map((user, index) => (
                  <Avatar
                    key={index}
                    alt={user.name}
                    src={process.env.NEXT_PUBLIC_API_URL + user.image}
                    sx={{ width: 24, height: 24, cursor: "pointer" }}
                  />
                ))}
              </AvataGroup>
            ) : (
              <Typography variant="body2" sx={{ color: Colors.medGrey }}>
                No users selected
              </Typography>
            )}

            {task ? (
              <Button
                variant="outlined"
                startIcon={<AddRoundedIcon />}
                size="small"
                onClick={() => setOpenUsersModal(true)}
                sx={{ color: Colors.primary, borderColor: Colors.primary }}
              >
                Add User
              </Button>
            ) : (
              <Typography variant="body2" sx={{ color: Colors.medGrey }}>
                Select users after creating the task :)
              </Typography>
            )}
          </Stack>

          <Stack direction="row" justifyContent="flex-end" spacing={2}>
            <Button
              variant="outlined"
              size="small"
              onClick={handleClose}
              sx={{ color: Colors.primary, borderColor: Colors.primary }}
            >
              Cancel
            </Button>
            <button
              type="submit"
              style={{
                backgroundColor: Colors.primary,
                color: Colors.white,
                padding: "8px 16px",
                borderRadius: "4px",
              }}
            >
              {task ? "Update Task" : "Create Task"}
            </button>
          </Stack>
        </Stack>
      </Dialog>
      <UsersModal
        open={openUsersModal}
        handleClose={() => setOpenUsersModal(false)}
        users={allUsers}
        selectedUsers={selectedUsers}
        setSelectedUsers={setSelectedUsers}
      />
    </>
  );
};

export default TaskFormModal;
