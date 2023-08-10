"use client"

import { ExpandMore, ExpandLess } from "@mui/icons-material";
import { Card, CardActions, CardContent, CardMedia, IconButton, TextField, Typography, Collapse } from "@mui/material";
import Graph from "./Graph";
import { useState } from "react";

export default function QuestionCard({
  id, question, answer, graph
}) {
  const [expanded, setExpanded] = useState(false);

  const showAnswer = () => {
    setExpanded(!expanded);
  }

  return (
    <Card variant="outlined" sx={{ width: "inherit" }}>
      {/* {graph !== "" ? */}
      {/*   <CardMedia */}
      {/*     component={Graph} */}
      {/*     equation={graph} */}
      {/*     sx={{ width: "inherit", background: "red" }} */}
      {/*   /> */}
      {/*   : */}
      {/*   null */}
      {/* } */}
      <CardContent sx={{
      }}>
        <Typography gutterBottom variant="body1">{id}. {question}</Typography>
        <TextField variant="outlined" label="Answer" />
      </CardContent>
      <CardActions sx={{
      }}>
        <IconButton aria-label="show-more" onClick={showAnswer}>
          {expanded ? <ExpandLess /> : <ExpandMore />}
        </IconButton>

      </CardActions>
      <Collapse in={expanded} unmountOnExit timeout="auto">
        <CardContent>
          <Typography variant="h6">Answer:</Typography>
          <Typography variant="body1">{answer}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  )

}
