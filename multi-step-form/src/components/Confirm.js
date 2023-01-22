import React from 'react'
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from '@mui/material/Container'; 
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import UserContext from '../context/userContext';
import { useContext } from 'react';


export default function Confirm({changeComponents}) {
  const value = React.useContext(UserContext)
  return (
    <div id='Confirm'>
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
              Confirmation Details
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Container maxWidth="sm" sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '20px'}}>
      <Typography variant="h5" gutterBottom component="h1">
        First Name
      </Typography>
      <Typography variant="subtitle2" gutterBottom component="h2">
        {value.fName}
      </Typography>

      <Typography variant="h5" gutterBottom component="h1">
        Last Name
      </Typography>
      <Typography variant="subtitle2" gutterBottom component="h2">
      {value.lName}
      </Typography>

      <Typography variant="h5" gutterBottom component="h1">
        Email
      </Typography>
      <Typography variant="subtitle2" gutterBottom component="h2">
      {value.email}
      </Typography>

      <Typography variant="h5" gutterBottom component="h1">
        Occupation
      </Typography>
      <Typography variant="subtitle2" gutterBottom component="h2">
      {value.occupation}
      </Typography>

      <Typography variant="h5" gutterBottom component="h1">
        City
      </Typography>
      <Typography variant="subtitle2" gutterBottom component="h2">
      {value.city}
      </Typography>

      <Typography variant="h5" gutterBottom component="h1">
        Bio
      </Typography>
      <Typography variant="subtitle2" gutterBottom component="h2">
      {value.bio}
      </Typography>

      <Stack spacing={2} direction="row" sx={{marginTop: '10px'}}> 
      <Button variant="contained" onClick={() => {
        changeComponents({
            componentClicked: 'Confirm',
            button: 'continue'            
        })
      }}>Continue and Submit</Button>
      <Button variant="contained" onClick={() => {
        changeComponents({
            componentClicked: 'Confirm',
            button: 'back'            
        })
      }}>Back</Button>
      </Stack>
      </Container>
    </div>
  )
}
