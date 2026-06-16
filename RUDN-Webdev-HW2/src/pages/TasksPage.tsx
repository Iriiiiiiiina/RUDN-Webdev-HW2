import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import { CircularProgress } from "@mui/material";
import { Typography } from "@mui/material";

import Header from "../components/Header";
import TaskColumn from "../components/TaskColumn";

import { useTasksContext } from "../context/TasksContext";

export default function TasksPage() {
  const { tasks } = useTasksContext();

  if (!tasks.length) {
    return (
      <>
        <Header />

        <Container
          sx={{
            mt: 4,
            textAlign: "center"
          }}
        >
          <CircularProgress />
        </Container>
      </>
    );
  }

  const todoTasks = tasks.filter(
    task => task.status === 0
  );

  const inProgressTasks = tasks.filter(
    task => task.status === 1
  );

  const doneTasks = tasks.filter(
    task => task.status === 2
  );

  return (
    <>
      <Header />

      <Container
        maxWidth="xl"
        sx={{
          mt: 4
        }}
      >
        <Typography
          variant="h4"
          sx={{
            mb: 4
          }}
        >
          Kanban Board
        </Typography>

        <Grid container spacing={3}>
          <Grid size={4}>
            <TaskColumn
              title="К выполнению"
              tasks={todoTasks}
            />
          </Grid>

          <Grid size={4}>
            <TaskColumn
              title="В работе"
              tasks={inProgressTasks}
            />
          </Grid>

          <Grid size={4}>
            <TaskColumn
              title="Выполнено"
              tasks={doneTasks}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}


