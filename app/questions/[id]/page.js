'use client'
import QuestionCard from "@/app/components/QuestionCard";
import QuestionQuery from "@/app/components/QuestionQuery";
import { checkId } from "@/app/utils/Model";
import { navigateFromMemory } from "@/app/utils/Navigation";
import { ExpandLess, ExpandMore, Navigation } from "@mui/icons-material";
import { Button, Collapse, Container, IconButton } from "@mui/material";
import ErrorPage from 'next/error';
import { useRouter } from "next/navigation";
import { useState } from "react";
import { data } from "../../utils/db";


export default function page({ params }) {

  const router = useRouter();

  const nextQuestion = () => {
    navigateFromMemory(router);
  }


  // If the user enters an invalid url
  if (!checkId(params.id)) {
    return (
      <ErrorPage statusCode={404} />
    )
  }

  const question = data[params.id].question;
  const answer = data[params.id].answer;
  let graph = data[params.id].graph;
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
