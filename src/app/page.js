
// MUI
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

// Containers
import TopBar from "@/app/containers/TopBar";
import FilterComponent from "./containers/FilterComponent";
import Board from "./containers/Board";

const IndexPage = () => {
  return (
   <Stack spacing={3}>
    <TopBar />
    <FilterComponent />
    <Grid container spacing={3} px={7}>
      <Grid size={{ xs: 12, md: 3 }}>
      <Board title={"To do"}/>
      </Grid>
      <Grid size={{ xs: 12, md: 3 }}>
      <Board title={"In Progress"}/>
      </Grid>
      <Grid size={{ xs: 12, md: 3 }}>
      <Board title={"In Review"}/>
      </Grid>
      <Grid size={{ xs: 12, md: 3 }}>
      <Board title={"Done"}/>
      </Grid>
    </Grid>
   </Stack>
  )
}

export default IndexPage;
