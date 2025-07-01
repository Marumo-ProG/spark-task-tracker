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
  const TASK_LIST = [
    {
      title: "Make the Teams Page",
      description: "Show the entire Sprint team, and roles",
      author: { id: 123, name: "John Doe", image: TestProfilePic },
      assigned_to: [
        { id: 1, name: "Alice", image: TestProfilePic },
        { id: 2, name: "Bob", image: TestProfilePic },
      ],
      due_date: "2023-10-01",
      priority: "high",
      status: "todo",
    },
    {
      title: "Create the Login Page",
      description: "Design and implement the login page",
      author: { id: 124, name: "Jane Smith", image: TestProfilePic },
      assigned_to: [
        { id: 3, name: "Charlie", image: TestProfilePic },
        { id: 4, name: "David", image: TestProfilePic },
      ],
      due_date: "2023-10-05",
      priority: "medium",
      status: "in_progress",
    },
    {
      title: "Implement the Dashboard",
      description: "Create the main dashboard for users",
      author: { id: 125, name: "Alice Johnson", image: TestProfilePic },
      assigned_to: [
        { id: 5, name: "Eve", image: TestProfilePic },
        { id: 6, name: "Frank", image: TestProfilePic },
      ],
      due_date: "2023-10-10",
      priority: "low",
      status: "in_review",
    },
  ];

  const todoBoardTasks = TASK_LIST.filter((task) => task.status === "todo");
  const inProgressBoardTasks = TASK_LIST.filter(
    (task) => task.status === "in_progress"
  );
  const inReviewBoardTasks = TASK_LIST.filter(
    (task) => task.status === "in_review"
  );
  const doneBoardTasks = TASK_LIST.filter((task) => task.status === "done");

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
