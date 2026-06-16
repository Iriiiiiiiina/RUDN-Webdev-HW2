import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { Typography } from "@mui/material";

import { Link } from "react-router-dom";

interface Props {
  id: number;
  title: string;
}

export default function TaskCard({
  id,
  title
}: Props) {
  return (
    <Card
      sx={{
        mb: 2
      }}
    >
      <CardContent>
        <Typography
          component={Link}
          to={`/task/${id}`}
          sx={{
            textDecoration: "none",
            fontWeight: "bold",
            display: "block",
            mb: 1
          }}
        >
          #{id}
        </Typography>

        <Typography>
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}