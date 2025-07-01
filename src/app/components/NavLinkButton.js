// Next 
import Link from "next/link";

// MUI
import Stack from "@mui/material/Stack";

// Constants
import { Colors } from "@/common/constants";

const NavLinkButton = ({ href, label, Icon }) => {
    return (
        <Link href={href} style={{ textDecoration: "none" }}>
            <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                sx={{
                    color: Colors.white,
                    padding: "8px 16px",
                }}
            >
                {Icon && <Icon style={{ color: Colors.white }} />}
                <span>{label}</span>
            </Stack>
        </Link>
    )
}

export default NavLinkButton;