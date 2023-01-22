import React from 'react'
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from '@mui/material/Container';

export default function ThankYou() {
  return (
    <div id='ThankYou'>
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 , position: 'absolute', left: '50%', right: '50%', width: '200px'}}>
              Success
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
        <Container maxWidth="sm" sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '20px'}}>
        <Typography variant='h4' component='h1'>Thank You For Submitting The Form</Typography>
        <Typography variant='h6' component='h2'>You will receive further details through email</Typography>
        </Container>
    </div>
  )
}
