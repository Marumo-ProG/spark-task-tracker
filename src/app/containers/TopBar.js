"use client"

// MUI
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import AvatarGroup from "@mui/material/AvatarGroup";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

// Constants
import { Colors } from "@/common/constants";

// Images
import TestProfilePic from "@/assets/images/test_profile.jpg";

// Icons
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';

const TopBar = () => {
    return (
        <Stack height="64px" px={7} py={2} direction={"row"} alignItems="center" justifyContent="space-between" sx={{ backgroundColor: Colors.medGrey }}>
        
        <Stack direction={"row"} spacing={2} alignItems={"center"}>
            <Typography variant="h6" >Product Design Team</Typography>
            <Chip label="Sprint 112" size="small" color="success" onClick={() => alert("no other sprints available")}/>
            </Stack>

            <Stack direction={"row"} spacing={2} alignItems={"center"}>
            <AvatarGroup max={5} sx={{ "& .MuiAvatar-root": { width: 32, height: 32 } }} >
                <Avatar alt="Lenny" src={TestProfilePic.src} />
                <Avatar alt="John" src={TestProfilePic.src} />
                <Avatar alt="Jane" src={TestProfilePic.src} />
                <Avatar alt="Doe" src={TestProfilePic.src} />
            </AvatarGroup>
            <Divider orientation="vertical" flexItem />
            <Button variant="outlined" startIcon={<PersonAddAltRoundedIcon sx={{color: Colors.accent}}/>} sx={{ color: Colors.accent, border: "none" }}>
                Invite
            </Button>
            </Stack>

        </Stack>
    )
}

export default TopBar;

