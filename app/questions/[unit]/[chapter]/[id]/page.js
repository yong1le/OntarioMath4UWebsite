import QuestionCard from "@/app/components/QuestionCard";
import { Container, Button, Breadcrumbs } from "@mui/material";
import Link from "next/link";

export default function page({ params }) {
  return (
    <Container maxWidth="lg"
      sx={{
        paddingTop: 10
      }}>
      <QuestionCard
        id={params.id}
        question="What is my name"
        answer="Yong Le"
        graph="x^3"
      />
      <Container fixed disableGutters
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          marginY: 10,
        }}>
        <Button variant="contained">Next Question</Button>
      </Container>
    </Container>
  )

}
