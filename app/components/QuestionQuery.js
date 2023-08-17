"use client";

import {
  Paper,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  Button,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { getChapters, getTopics, getUnits } from "../utils/Model";
import { navigateFromMemory } from "../utils/Navigation";
import { useRouter } from "next/navigation";

export default function QuestionQuery() {
  // Routing
  const router = useRouter();
  const setSearch = () => {
    sessionStorage.setItem("unit", unit);
    sessionStorage.setItem("chapter", chapter);
    sessionStorage.setItem("topic", topic);
    navigateFromMemory(router);
  };

  const chapterRef = useRef(0);
  const topicRef = useRef(0);

  const [unit, setUnit] = useState("");
  const [chapter, setChapter] = useState("");
  const [topic, setTopic] = useState("");

  const units = getUnits();
  const [chapters, setChapters] = useState([]); // Array of ints representing the chapters
  const [topics, setTopics] = useState([]);

  const changeUnit = (e) => {
    const unit = e.target.value;
    setUnit(unit);
    changeChapter("");
    changeTopic("");
    topicRef.current.style.opacity = 0;
    if (unit === "") {
      chapterRef.current.style.opacity = 0;
    } else {
      chapterRef.current.style.width = 200;
      chapterRef.current.style.opacity = 1;

      setChapters(getChapters(unit));
    }
  };

  const changeChapter = (e) => {
    // sent by changing units
    if (e === "") {
      setChapter(e);
    }
    // sent by changing chapters
    else {
      const chapter = e.target.value;
      setChapter(chapter);
      changeTopic("");

      if (chapter === "") {
        topicRef.current.style.opacity = 0;
      } else {
        topicRef.current.style.width = 200;
        topicRef.current.style.opacity = 1;

        setTopics(getTopics(unit, chapter));
      }
    }
  };

  const changeTopic = (e) => {
    if (e === "") setTopic(e);
    else setTopic(e.target.value);
  };

  return (
    <Paper
      elevation={3}
      sx={{
        paddingX: 1,
        paddingY: 3,
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <FormControl
        sx={{
          minWidth: 200,
        }}
      >
        <InputLabel id="unit-label">Unit</InputLabel>
        <Select
          labelId="unit-label"
          label="unit"
          value={unit}
          onChange={changeUnit}
        >
          <MenuItem value="">All</MenuItem>
          {units.map((e) => (
            <MenuItem value={e} key={e}>
              Unit {e}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl
        ref={chapterRef}
        sx={{
          minWidth: 200,
          opacity: 0,
        }}
      >
        <InputLabel id="chapter-label">Chapter</InputLabel>
        <Select
          labelId="chapter-label"
          label="chapter"
          value={chapter}
          onChange={changeChapter}
        >
          <MenuItem value="">All</MenuItem>
          {chapters.map((e) => (
            <MenuItem value={e} key={e}>
              Chapter {e}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl
        ref={topicRef}
        sx={{
          minWidth: 200,
          opacity: 0,
        }}
      >
        <InputLabel id="topic-label">Topic</InputLabel>
        <Select
          labelId="topic-label"
          label="topic"
          value={topic}
          onChange={changeTopic}
        >
          <MenuItem value="">All</MenuItem>
          {topics.map((e, i) => (
            <MenuItem value={e} key={i}>
              {e}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button onClick={setSearch} variant="contained">
        Search
      </Button>
    </Paper>
  );
}
