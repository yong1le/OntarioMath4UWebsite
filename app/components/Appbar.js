"use client"

import React from 'react'
import { Box, AppBar, Toolbar, IconButton, Typography, Button, Link } from '@mui/material'
import SchoolIcon from "@mui/icons-material/School"
import { navigateFromMemory } from '../utils/Navigation'
import { useRouter } from 'next/navigation'


function Appbar() {
  const router = useRouter();

  const randomQuestion = () => {
    sessionStorage.clear()
    navigateFromMemory(router);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" >
        <Toolbar>
          <Link href="/" color="inherit">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <SchoolIcon />
            </IconButton>
          </Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Ontario Math 4U
          </Typography>

          <Link href="/about" color="inherit">
            <Button color="inherit">About</Button>
          </Link>
          <Link href="/contact" color="inherit">
            <Button color="inherit">Contact</Button>
          </Link>
          <Button
            onClick={randomQuestion}
            color="inherit"
          >
            Study
          </Button>
        </Toolbar>
      </AppBar>
    </Box >
  )
}

export default Appbar
