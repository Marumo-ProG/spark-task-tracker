"use client";

import { useState, useEffect } from "react";

// MUI
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";

// Containers
import TaskFormModal from "./TaskFormModal";

// Constants
import { Colors } from "@/common/constants";

// Icons
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import FilterAltRoundedIcon from "@mui/icons-material/FilterAltRounded";

const FilterComponent = ({}) => {
  const [openTaskForm, setOpenTaskForm] = useState(false);
  return (
    <>
      <Stack
        px={7}
        direction="row"
        alignItems={"center"}
        justifyContent={"space-between"}
        spacing={2}
        sx={{ maxHeight: "40px" }}
      >
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search tasks..."
          sx={{ width: "300px" }}
        />
        <Stack direction={"row"} spacing={2} alignItems={"center"}>
          <IconButton sx={{ backgroundColor: Colors.medGrey }}>
            <FilterAltRoundedIcon sx={{ color: Colors.primary }} />
          </IconButton>
          <Button
            variant="contained"
            startIcon={<AddRoundedIcon />}
            onClick={() => setOpenTaskForm(true)}
            sx={{ backgroundColor: Colors.primary, color: Colors.white }}
          >
            Add Task
          </Button>
        </Stack>
      </Stack>
      <TaskFormModal
        open={openTaskForm}
        handleClose={() => setOpenTaskForm(false)}
      />
    </>
  );
};

export default FilterComponent;
