import { Paper } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";

import TaskCard from "./TaskCard";

import type { Task } from "../types/Task";

interface Props {
  title: string;
  tasks: Task[];
}

export default function TaskColumn({
  title,
  tasks
}: Props) {
  return (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        minHeight: "500px"
      }}
    >
      <Typography
        variant="h6"
        sx={{
          mb: 2,
          textAlign: "center"
        }}
      >
        {title}
      </Typography>

      <Box>
        {tasks.map(task => (
          <TaskCard
            key={task.id}
            id={task.id}
            title={task.title}
          />
        ))}
      </Box>
    </Paper>
  );
}