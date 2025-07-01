"use client"

// MUI
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";

// Constants
import { Colors } from "@/common/constants";

// Icons
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';

const FilterComponent = ({  }) => {
    return (
        <Stack px={7} direction="row" alignItems={"center"} justifyContent={"space-between"} spacing={2} sx={{maxHeight: "40px"}}>
            <TextField variant="outlined" size="small" placeholder="Search tasks..." sx={{ width: "300px" }} />
            <Stack direction={"row"} spacing={2} alignItems={"center"}>
                <IconButton sx={{ backgroundColor: Colors.medGrey}}>
                    <FilterAltRoundedIcon sx={{ color: Colors.primary }} />
                </IconButton>
                <Button variant="contained" startIcon={<AddRoundedIcon />} sx={{ backgroundColor: Colors.primary, color: Colors.white }}>
                    Add Task
                </Button>
            </Stack>
        </Stack>
    )
}

export default FilterComponent;