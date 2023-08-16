"use client";
import QuestionCard from "@/app/components/QuestionCard";
import QuestionQuery from "@/app/components/QuestionQuery";
import { getSpecificQuestion } from "@/app/utils/Model";
import { navigateFromMemory } from "@/app/utils/Navigation";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Breadcrumbs,
  Button,
  Collapse,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import ErrorPage from "next/error";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function page({ params }) {
  // router stuff
  const router = useRouter();
  const nextQuestion = () => {
    navigateFromMemory(router);
  };

  const question = getSpecificQuestion(params.id);
  if (question == null) {
    return <ErrorPage statusCode={404} />;
  }

  // Opening/Closing the "search"
  const expandQuery = () => {
    setQueryExpanded(!queryExpanded);
  };
  const [queryExpanded, setQueryExpanded] = useState(false);

  return (
    <Container maxWidth="lg">
      <Collapse in={queryExpanded}>
        <QuestionQuery />
      </Collapse>

      {/* Query */}
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <IconButton color="primary" onClick={expandQuery}>
          {queryExpanded ? <ExpandLess /> : <ExpandMore />}
        </IconButton>
      </Container>

      {/* Question */}
      <Container
        fixed
        sx={{
          paddingTop: 10,
        }}
      >
        <Breadcrumbs>
          <Typography>Unit {question.unit}</Typography>
          <Typography>Chapter {question.chapter}</Typography>
          <Typography>{question.topic}</Typography>
        </Breadcrumbs>
        <QuestionCard
          id={params.id}
          question={question.question}
          answer={question.answer}
          graph={question.graph}
        />

        {/* Nav */}
        <Container
          fixed
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            marginY: 10,
          }}
        >
          <Button onClick={nextQuestion} variant="contained">
            Next Question
          </Button>
        </Container>
      </Container>
    </Container>
  );
}
