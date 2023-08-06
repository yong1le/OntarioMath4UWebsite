"use client"

import { ExpandMore, ExpandLess } from "@mui/icons-material";
import { Button, Card, CardActions, CardContent, CardMedia, Paper, IconButton, TextField, Typography, Collapse } from "@mui/material";
import Graph from "./Graph";
import { useState } from "react";

export default function QuestionCard({
  id, unit, chapter, question, answer, graph
}) {
  const [expanded, setExpanded] = useState(false);

  const showAnswer = () => {
    setExpanded(!expanded);
  }

  return (
    <Card variant="outlined" sx={{ width: "inherit" }}>
      {graph !== "" ?
      <CardMedia
        component={Graph}
        equation={graph}
      />
      :
      <div/>
      }
      <CardContent sx={{
      }}>
        <Typography gutterBottom variant="body1">{id}. {question}</Typography>
        <TextField variant="outlined" label="Answer" />
      </CardContent>
      <CardActions sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
      }}>
        <IconButton aria-label="show-more" onClick={showAnswer}>
          {expanded ? <ExpandLess/> : <ExpandMore/>}
          {/* <ExpandLess/> */}
        </IconButton>

        <Paper variant="elevation" elevation={0}>
          <Button variant="contained">Unit {unit}</Button>
          <Button variant="contained">Chapter {chapter.split(".")[1]}</Button>
        </Paper>
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
