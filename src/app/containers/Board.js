// MUI
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Chip from "@mui/material/Chip";

// Constants
import { Colors } from "@/common/constants";

// Icons
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';

const Board = ({title,taskList }) => {
    return (
        <Stack padding={2} sx={{backgroundColor: Colors.lightGrey, borderRadius: "8px", minHeight: "400px"}}>
            <Stack direction="row" alignItems={"center"} justifyContent="space-between" maxHeight="56px">
                <Typography variant="h6" sx={{fontSize: 15}}>{title}</Typography>
                <Stack direction={"row"} spacing={1} alignItems="center">
                <IconButton sx={{ backgroundColor: Colors.medGrey, color: Colors.white }} aria-label="add task">
                    <AddRoundedIcon sx={{fontSize: 15}}/>
                </IconButton>
                <IconButton sx={{ backgroundColor: Colors.medGrey, color: Colors.white }} aria-label="menu">
                    <MoreHorizRoundedIcon sx={{fontSize: 15}}/>
                </IconButton>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Board;