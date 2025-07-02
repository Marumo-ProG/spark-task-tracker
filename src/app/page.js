"use client";

import { useAppContext } from "./AppContext";

// MUI
import Stack from "@mui/material/Stack";
// import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

// Containers
import TopBar from "@/app/containers/TopBar";
import FilterComponent from "./containers/FilterComponent";
import Board from "./containers/Board";

const IndexPage = () => {
  const { tasks, loading } = useAppContext();

  const todoBoardTasks = tasks.filter((task) => task.status === "todo");
  const inProgressBoardTasks = tasks.filter(
    (task) => task.status === "in_progress"
  );
  const inReviewBoardTasks = tasks.filter(
    (task) => task.status === "in_review"
  );
  const doneBoardTasks = tasks.filter((task) => task.status === "done");

  return (
    <Stack spacing={3}>
      <TopBar />
      <FilterComponent />
      <Grid container spacing={3} px={7}>
        <Grid size={{ xs: 12, md: 3 }}>
          <Board title={"To do"} taskList={todoBoardTasks} />
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <Board title={"In Progress"} taskList={inProgressBoardTasks} />
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <Board title={"In Review"} taskList={inReviewBoardTasks} />
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <Board title={"Done"} taskList={doneBoardTasks} />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default IndexPage;
