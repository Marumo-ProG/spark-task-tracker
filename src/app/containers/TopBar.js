"use client";

import { useAppContext } from "../AppContext";

// MUI
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import AvatarGroup from "@mui/material/AvatarGroup";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Skeleton from "@mui/material/Skeleton";

// Constants
import { Colors } from "@/common/constants";

// Images
import TestProfilePic from "@/assets/images/test_profile.jpg";

// Icons
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";

const TopBar = () => {
  const { allUsers, loading } = useAppContext();
  return (
    <Stack
      height="64px"
      px={7}
      py={2}
      direction={"row"}
      alignItems="center"
      justifyContent="space-between"
      sx={{ backgroundColor: Colors.medGrey }}
    >
      <Stack direction={"row"} spacing={2} alignItems={"center"}>
        <Typography variant="h6">Product Design Team</Typography>
        <Chip
          label="Sprint 112"
          size="small"
          color="success"
          onClick={() => alert("no other sprints available")}
        />
      </Stack>

      <Stack direction={"row"} spacing={2} alignItems={"center"}>
        <AvatarGroup
          max={5}
          sx={{ "& .MuiAvatar-root": { width: 32, height: 32 } }}
        >
          {loading
            ? Array.from({ length: 5 }).map((_, index) => (
                <Skeleton
                  key={index}
                  variant="circular"
                  width={32}
                  height={32}
                  sx={{ bgcolor: Colors.lightGrey }}
                />
              ))
            : allUsers.map((user, index) => (
                <Avatar
                  key={index}
                  alt={user.name}
                  src={process.env.NEXT_PUBLIC_API_URL + user.image}
                  sx={{ width: 32, height: 32, cursor: "pointer" }}
                />
              ))}
        </AvatarGroup>
        <Divider orientation="vertical" flexItem />
        <Button
          variant="outlined"
          startIcon={<PersonAddAltRoundedIcon sx={{ color: Colors.accent }} />}
          sx={{ color: Colors.accent, border: "none" }}
        >
          Invite
        </Button>
      </Stack>
    </Stack>
  );
};

export default TopBar;
