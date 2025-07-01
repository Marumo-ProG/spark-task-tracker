
// MUI
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

// Containers
import TopBar from "@/app/containers/TopBar";
import FilterComponent from "./containers/FilterComponent";

const IndexPage = () => {
  return (
   <Stack spacing={3}>
    <TopBar />
    <FilterComponent />
   </Stack>
  )
}

export default IndexPage;
