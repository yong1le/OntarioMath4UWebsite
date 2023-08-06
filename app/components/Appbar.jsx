import React from 'react'
import { Box, AppBar, Toolbar,IconButton, Typography, Button } from '@mui/material'
import SchoolIcon from "@mui/icons-material/School"

function Appbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <SchoolIcon/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button color="inherit">Ontario Math 4U</Button>
          </Typography>

          <Button color="inherit">About</Button>
          <Button color="inherit">Contact</Button>
          <Button color="inherit">Study</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Appbar
