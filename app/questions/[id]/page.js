'use client'
import QuestionCard from "@/app/components/QuestionCard";
import { Container, Button, Collapse, IconButton } from "@mui/material";
import { data } from "../../utils/db";
import { useState } from "react";
import QuestionQuery from "@/app/components/QuestionQuery";
import { ExpandLess, ExpandMore, Navigation } from "@mui/icons-material";
import { navigateFromMemory } from "@/app/utils/Navigation";
import { useRouter } from "next/navigation";
import { checkId } from "@/app/utils/Model";


export default function page({ params }) {

  const router = useRouter();

  const nextQuestion = () => {
    navigateFromMemory(router);
  }

  // Question information
  let question = "";
  let answer = "";
  let graph = "";

  if (checkId(params.id)) {
    question = data[params.id].question;
    answer = data[params.id].answer;
    graph = data[params.id].graph;
  }

  if (graph == null) graph = "";

  const expandQuery = () => {
    setQueryExpanded(!queryExpanded)
  }

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
          justifyContent: "center"
        }}>
        <IconButton
          color="primary"
          onClick={expandQuery}
        >
          {queryExpanded ? <ExpandLess /> : <ExpandMore />}
        </IconButton>
      </Container>

      {/* Question */}
      <Container fixed
        sx={{
          paddingTop: 10
        }}>
        <QuestionCard
          id={params.id}
          question={question}
          answer={answer}
          graph={graph}
        />

        {/* Nav */}
        <Container fixed disableGutters
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            marginY: 10,
          }}>
          <Button
            onClick={nextQuestion}
            variant="contained"
          >
            Next Question
          </Button>
        </Container>

      </Container>

    </Container>
  )

}
