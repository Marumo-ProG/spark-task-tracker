"use client";

import { useState, useEffect } from "react";

// Date fns
import { format, parseISO } from "date-fns";

// MUI
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// Containers
import TaskFormModal from "./TaskFormModal";
import DeleteModal from "./DeleteModal";

// Constants
import { Colors } from "@/common/constants";

// Icons
import AttachFileRoundedIcon from "@mui/icons-material/AttachFileRounded";
import FlagRoundedIcon from "@mui/icons-material/FlagRounded";
import AccessTimeFilledRoundedIcon from "@mui/icons-material/AccessTimeFilledRounded";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";

const Task = ({ task, onEdit, onDelete }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openTaskForm, setOpenTaskForm] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const open = Boolean(anchorEl);

  const parsedDate = parseISO(task.due_date);
  const formated_date = format(parsedDate, "MMM dd");
  return (
    <>
      <Paper elevation={0} sx={{}}>
        <Stack padding={2} spacing={2}>
          <Stack
            direction="row"
            alignItems={"center"}
            justifyContent="space-between"
          >
            <Typography variant="h6" sx={{ fontSize: 14, fontWeight: 700 }}>
              {task.title}
            </Typography>
            <IconButton
              sx={{ backgroundColor: Colors.medGrey, color: Colors.black }}
              aria-label="more options"
              onClick={(e) => setAnchorEl(e.currentTarget)}
            >
              <MoreHorizRoundedIcon sx={{ fontSize: 15 }} />
            </IconButton>
          </Stack>
          <Typography
            variant="body2"
            sx={{ fontSize: 12, color: Colors.medGrey }}
          >
            {task.description}
          </Typography>
          <Chip
            label={task.author.name}
            size="small"
            sx={{
              backgroundColor: Colors.primary,
              color: Colors.white,
              borderRadius: "8px",
              width: "fit-content",
            }}
          />
        </Stack>
        <Divider />
        <Stack
          height="46px"
          direction={"row"}
          alignItems={"center"}
          justifyContent="space-between"
          px={2}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <Stack
              direction="row"
              spacing={0.5}
              alignItems="center"
              sx={{ cursor: "pointer" }}
            >
              <AttachFileRoundedIcon
                sx={{ fontSize: 20, color: Colors.primary }}
              />
              <Typography
                variant="body2"
                sx={{ fontSize: 12, color: Colors.medGrey }}
              >
                1
              </Typography>
            </Stack>
            <IconButton sx={{ padding: 0.5 }} aria-label="flag task">
              <FlagRoundedIcon
                sx={{
                  fontSize: 20,
                  color:
                    task.priority === "low"
                      ? Colors.lightGrey
                      : task.priority === "medium"
                      ? "orange"
                      : "red",
                }}
              />
            </IconButton>

            <Stack direction="row" spacing={1} alignItems="center">
              <Stack
                direction="row"
                spacing={0.5}
                alignItems="center"
                sx={{ cursor: "pointer" }}
              >
                <AccessTimeFilledRoundedIcon
                  sx={{ fontSize: 20, color: Colors.primary }}
                />
                <Typography
                  variant="body2"
                  sx={{ fontSize: 12, color: Colors.black }}
                >
                  {formated_date}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <AvatarGroup
            max={2}
            sx={{ "& .MuiAvatar-root": { width: 24, height: 24 } }}
          >
            {task.assigned_to.map((assignee, index) => (
              <Avatar
                key={index}
                alt={assignee.name}
                src={assignee.image.src}
                sx={{ width: 24, height: 24, cursor: "pointer" }}
              />
            ))}
          </AvatarGroup>
        </Stack>
      </Paper>
      <Menu open={open} anchorEl={anchorEl} onClose={() => setAnchorEl(null)}>
        <MenuItem
          onClick={() => {
            // onEdit(task);
            setAnchorEl(null);
            setOpenTaskForm(true);
          }}
        >
          Edit Task
        </MenuItem>
        <MenuItem
          onClick={() => {
            // onDelete(task.id);
            setOpenDeleteModal(true);
            setAnchorEl(null);
          }}
        >
          Delete Task
        </MenuItem>
      </Menu>
      <TaskFormModal
        open={openTaskForm}
        handleClose={() => setOpenTaskForm(false)}
        onSubmit={(data) => {
          onEdit({ ...task, ...data });
          setOpenTaskForm(false);
        }}
        task={task}
      />
      <DeleteModal
        open={openDeleteModal}
        handleClose={() => setOpenDeleteModal(false)}
        onDelete={() => {
          // Handle delete action
          setOpenDeleteModal(false);
        }}
        itemName="Task"
      />
    </>
  );
};

export default Task;
