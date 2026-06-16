import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import { Paper } from "@mui/material";

import Header from "../components/Header";

import { useTasksContext } from "../context/TasksContext";

export default function TaskPage() {
  const { id } = useParams();

  const navigate = useNavigate();

  const {
    tasks,
    deleteTask,
    updateStatus
  } = useTasksContext();

  const task = tasks.find(
    task => task.id === Number(id)
  );

  if (!task) {
    return (
      <>
        <Header />

        <Container sx={{ mt: 4 }}>
          <Typography>
            Задача не найдена
          </Typography>
        </Container>
      </>
    );
  }

  const handleDelete = () => {
    deleteTask(task.id);

    navigate("/");
  };

  return (
    <>
      <Header />

      <Container
        maxWidth="md"
        sx={{
          mt: 4
        }}
      >
        <Paper
          sx={{
            p: 4
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
          >
            Задача #{task.id}
          </Typography>

          <Typography
            variant="h6"
            gutterBottom
          >
            Название
          </Typography>

          <Typography
            sx={{
              mb: 3
            }}
          >
            {task.title}
          </Typography>

          <Typography
            variant="h6"
            gutterBottom
          >
            Описание
          </Typography>

          <Typography
            sx={{
              mb: 3
            }}
          >
            {task.description || "Нет описания"}
          </Typography>

          <Typography
            variant="h6"
            gutterBottom
          >
            Дата создания
          </Typography>

          <Typography
            sx={{
              mb: 3
            }}
          >
            {new Date(
              task.createdAt
            ).toLocaleString()}
          </Typography>

          <Typography
            variant="h6"
            gutterBottom
          >
            Статус
          </Typography>

          <Typography
            sx={{
              mb: 3
            }}
          >
            {task.status === 0 &&
              "К выполнению"}

            {task.status === 1 &&
              "В работе"}

            {task.status === 2 &&
              "Выполнено"}
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 2,
              flexWrap: "wrap"
            }}
          >
            <Button
              variant="contained"
              onClick={() =>
                updateStatus(
                  task.id,
                  0
                )
              }
            >
              К выполнению
            </Button>

            <Button
              variant="contained"
              onClick={() =>
                updateStatus(
                  task.id,
                  1
                )
              }
            >
              В работу
            </Button>

            <Button
              variant="contained"
              onClick={() =>
                updateStatus(
                  task.id,
                  2
                )
              }
            >
              Выполнено
            </Button>

            <Button
              variant="outlined"
              color="error"
              onClick={handleDelete}
            >
              Удалить
            </Button>
          </Box>
        </Paper>
      </Container>
    </>
  );
}


