import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";

import AssignmentIcon from "@mui/icons-material/Assignment";

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <AssignmentIcon />

        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            ml: 2
          }}
        >
          Доска задач
        </Typography>

        <Button
          color="inherit"
          component={Link}
          to="/"
        >
          Задачи
        </Button>

        <Button
          color="inherit"
          component={Link}
          to="/create"
        >
          Создать
        </Button>
      </Toolbar>
    </AppBar>
  );
}