"use client"

import React from 'react'
import { Box, AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material'
import SchoolIcon from "@mui/icons-material/School"
import Link from 'next/link'
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
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <SchoolIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/">
              <Button color="inherit">
                Ontario Math 4U
              </Button>
            </Link>
          </Typography>

          <Button color="inherit">
            About
          </Button>
          <Button color="inherit">Contact</Button>
          <Button onClick={randomQuestion}
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
