
// Next
import Link from "next/link";

// MUI]
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// Components
import NavLinkButton from "@/app/components/NavLinkButton";

// Constants
import { Colors } from "@/common/constants";

// Icons
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import SettingsApplicationsRoundedIcon from '@mui/icons-material/SettingsApplicationsRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

const MainMenu = () => {
    return (
        <Stack height="68px" alignItems={"center"} direction={"row"} justifyContent={"center"} spacing={3} sx={{backgroundColor: Colors.primary }}>
            <NavLinkButton href={"/"} label="Home" Icon={HomeRoundedIcon} />
            <NavLinkButton href={"/team"} label="Team" Icon={GroupsRoundedIcon} />
            <NavLinkButton href={"/settings"} label="Settings" Icon={SettingsApplicationsRoundedIcon} />
            <NavLinkButton href={"/profile"} label="Profile" Icon={AccountCircleRoundedIcon} />
        </Stack>
    )
}

export default MainMenu;
