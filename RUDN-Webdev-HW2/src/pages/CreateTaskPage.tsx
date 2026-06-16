import { useState } from "react";

import { Container } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";

import { useNavigate } from "react-router-dom";

import Header from "../components/Header";

import { useTasksContext } from "../context/TasksContext";

export default function CreateTaskPage() {
  const navigate = useNavigate();

  const { createTask } = useTasksContext();

  const [title, setTitle] = useState("");

  const [description, setDescription] =
    useState("");

  const handleCreate = () => {
    if (!title.trim()) {
      return;
    }

    createTask(title, description);

    navigate("/");
  };

  return (
    <>
      <Header />

      <Container
        maxWidth="sm"
        sx={{
          mt: 4
        }}
      >
        <Typography
          variant="h4"
          sx={{
            mb: 3
          }}
        >
          Создание задачи
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3
          }}
        >
          <TextField
            label="Название"
            value={title}
            onChange={e =>
              setTitle(e.target.value)
            }
            required
          />

          <TextField
            label="Описание"
            value={description}
            onChange={e =>
              setDescription(e.target.value)
            }
            multiline
            rows={5}
          />

          <Button
            variant="contained"
            onClick={handleCreate}
          >
            Создать
          </Button>
        </Box>
      </Container>
    </>
  );
}