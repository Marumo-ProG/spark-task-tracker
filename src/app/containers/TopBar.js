// "use client"

// MUI
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

// Constants
import { Colors } from "@/common/constants";

const TopBar = () => {
    return (
        <Stack height="64px" px={7} py={2} direction={"row"} alignItems="center" justifyContent="space-between" sx={{ backgroundColor: Colors.medGrey }}>
            </Stack>
    )
}

export default TopBar;

