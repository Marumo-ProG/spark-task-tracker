
// MUI
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

// Containers
import TopBar from "@/app/containers/TopBar";
import FilterComponent from "./containers/FilterComponent";
import Board from "./containers/Board";

// Images
import TestProfilePic from "@/assets/images/test_profile.jpg";


const IndexPage = () => {
  return (
   <Stack spacing={3}>
    <TopBar />
    <FilterComponent />
    <Grid container spacing={3} px={7}>
      <Grid size={{ xs: 12, md: 3 }}>
      <Board title={"To do"} taskList={[{
        title: "Task 1",
        description: "This is the first task",
        author: { id: 123,name: "John Doe", image: TestProfilePic },
        assigned_to:[
          { id: 1, name: "Alice", image: TestProfilePic },
          { id: 2, name: "Bob", image: TestProfilePic }
        ],
        due_date: "2023-10-01",
        priority: "High",
        status: "todo"
      }]}/>

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
