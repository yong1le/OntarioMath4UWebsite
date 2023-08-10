"use client"

import { Paper, FormControl, MenuItem, Select, InputLabel, Button } from "@mui/material";
import { useRef, useState } from "react";
import { getChapters } from "../utils/Model";
import { navigateFromMemory } from "../utils/Navigation";
import { useRouter } from "next/navigation";

export default function QuestionQuery() {

  const chapterRef = useRef(0);

  const [unit, setUnit] = useState("");
  const [chapter, setChapter] = useState("");
  const [chaps, setChaps] = useState([]);

  const changeUnit = (e) => {
    const unit = e.target.value;
    setUnit(unit);
    changeChapter("");
    if (unit === "") {
      chapterRef.current.style.opacity = 0;
    }
    else {
      chapterRef.current.style.width = 200;
      chapterRef.current.style.opacity = 1;

      setChaps(Array.from(getChapters(e.target.value)));
    }
  }

  const changeChapter = (e) => {
    if (e === "")
      setChapter(e)
    else
      setChapter(e.target.value);
  }

  const router = useRouter();

  const setSearch = () => {
    sessionStorage.setItem("unit", unit);
    sessionStorage.setItem("chapter", chapter);
    navigateFromMemory(router);
  }

  return (
    <Paper elevation={3}
      sx={{
        paddingX: 1,
        paddingY: 3,
        display: "flex",
        justifyContent: "space-evenly"
      }}>
      <FormControl
        sx={{
          minWidth: 200,
        }}>
        <InputLabel id="unit-label">Unit</InputLabel>
        <Select
          labelId="unit-label"
          label="unit"
          value={unit}
          onChange={changeUnit}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value={0}>Unit 0</MenuItem>
          <MenuItem value={1}>Unit 1</MenuItem>
          <MenuItem value={2}>Unit 2</MenuItem>
          <MenuItem value={3}>Unit 3</MenuItem>
          <MenuItem value={4}>Unit 4</MenuItem>
          <MenuItem value={5}>Unit 5</MenuItem>
          <MenuItem value={6}>Unit 6</MenuItem>
        </Select>

      </FormControl>
      <FormControl
        ref={chapterRef}
        sx={{
          minWidth: 200,
          opacity: 0
        }}>
        <InputLabel id="chapter-label">Chapter</InputLabel>
        <Select
          labelId="chapter-label"
          label="chapter"
          value={chapter}
          onChange={changeChapter}
        >
          <MenuItem value="">All</MenuItem>
          {chaps.map((e) => (<MenuItem value={e} key={e}>Chapter {e}</MenuItem>))}
        </Select>
      </FormControl>
      <Button onClick={setSearch} variant="contained">Search</Button>
    </Paper>
  )
}
