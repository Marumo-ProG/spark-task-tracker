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

// Constants
import { Colors } from "@/common/constants";

// Icons
import AttachFileRoundedIcon from "@mui/icons-material/AttachFileRounded";
import FlagRoundedIcon from '@mui/icons-material/FlagRounded';
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';

const Task = ({ task, onEdit, onDelete }) => {
  return (
    <Paper elevation={0} sx={{}}>
      <Stack padding={2} spacing={2}>
        <Typography variant="h6" sx={{ fontSize: 14, fontWeight: 700 }}>
          {task.title}
        </Typography>
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
          
          <Stack direction="row" spacing={0.5} alignItems="center" sx={{ cursor: "pointer" }}>
            <AttachFileRoundedIcon sx={{ fontSize: 20, color: Colors.primary }} />
            <Typography variant="body2" sx={{ fontSize: 12, color: Colors.medGrey }}>
              1
            </Typography>
        </Stack>
          <IconButton
            sx={{ padding: 0.5}}
            aria-label="flag task"
            >
            <FlagRoundedIcon sx={{ fontSize: 20, color: "red" }} />
          </IconButton>
          <IconButton
         
            aria-label="due date"
            >
            <AccessTimeFilledRoundedIcon sx={{ fontSize: 20, color: "green" }} />
            </IconButton>
        </Stack>
        <AvatarGroup max={2} sx={{ "& .MuiAvatar-root": { width: 24, height: 24 } }}>
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
  );
};

export default Task;
