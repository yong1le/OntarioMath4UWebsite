import { Box, Button, Card, Container, Divider, Icon, Paper, Typography } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School"

export default function Home() {
  return (
    <Box>
      <Container className="info"
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          marginBottom: 10,
        }}
        maxWidth="lg">
        <SchoolIcon color="primary" sx={{ fontSize: 150 }} />

        <Typography variant="h6">Need practice for Ontario Grade 12 Math?</Typography>
        <Typography variant="h6">We have it 4U</Typography>
        <Button variant="contained">Find Topics</Button>
      </Container>
      <Container className="body"
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h6">Find Practice Problems</Typography>
        <Paper variant="outlined" elevation={3}
          sx={{
            width: 600,
            height: 200
          }}
        />
        <Typography variant="h6">Questions Provided With Answers</Typography>
        <Paper variant="outlined" elevation={3}
          sx={{
            width: 600,
            height: 200
          }}
        />

        <Typography variant="h6">Demonstrate Your Understanding With Practice Tests</Typography>
        <Paper variant="outlined" elevation={3}
          sx={{
            width: 600,
            height: 200
          }}
        />

      </Container>
    </Box>
  )
}
