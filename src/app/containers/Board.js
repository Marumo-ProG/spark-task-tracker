"use client";
import { useState, useEffect } from "react";

import { useAppContext } from "../AppContext";

// MUI
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Chip from "@mui/material/Chip";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// Containers
import Task from "./Task";
import TaskFormModal from "./TaskFormModal";

// Constants
import { Colors } from "@/common/constants";

// Icons
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";

const Board = ({ title, taskList = [] }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openTaskForm, setOpenTaskForm] = useState(false);
  const { reloadTasks } = useAppContext();
  const open = Boolean(anchorEl);
  return (
    <>
      <Stack
        padding={2}
        sx={{
          backgroundColor: Colors.lightGrey,
          borderRadius: "8px",
          minHeight: "400px",
        }}
      >
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent="space-between"
          maxHeight="56px"
        >
          <Typography variant="h6" sx={{ fontSize: 15 }}>
            {title}
          </Typography>
          <Stack direction={"row"} spacing={1} alignItems="center">
            <IconButton
              onClick={() => setOpenTaskForm(true)}
              sx={{ backgroundColor: Colors.medGrey, color: Colors.black }}
              aria-label="add task"
            >
              <AddRoundedIcon sx={{ fontSize: 15 }} />
            </IconButton>
            <IconButton
              onClick={(e) => setAnchorEl(e.currentTarget)}
              sx={{ backgroundColor: Colors.medGrey, color: Colors.black }}
              aria-label="menu"
            >
              <MoreHorizRoundedIcon sx={{ fontSize: 15 }} />
            </IconButton>
          </Stack>
        </Stack>
        <Stack spacing={2} mt={2}>
          {taskList?.map((task, index) => (
            <Task key={index} task={task} />
          ))}
        </Stack>
      </Stack>
      <Menu open={open} anchorEl={anchorEl} onClose={() => setAnchorEl(null)}>
        <MenuItem
          onClick={() => {
            setAnchorEl(null);
          }}
        >
          Edit Board
        </MenuItem>
        <MenuItem
          onClick={() => {
            setAnchorEl(null);
          }}
        >
          Delete Board
        </MenuItem>
        <MenuItem
          onClick={() => {
            setAnchorEl(null);
          }}
        >
          Remove Overdue Tasks
        </MenuItem>
        <MenuItem
          onClick={() => {
            setAnchorEl(null);
          }}
        >
          Clear
        </MenuItem>
      </Menu>
      <TaskFormModal
        open={openTaskForm}
        handleClose={() => setOpenTaskForm(false)}
      />
    </>
  );
};

export default Board;
