import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { Stack } from "@mui/material";
import { useContext } from "react";
import UserContext from "../context/userContext";


export default function UserForm({changeComponents}) {
  const value = React.useContext(UserContext)

  return (
    <div id="UserForm">
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
              
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 , position: 'absolute', left: '50%', right: '50%', width: '200px'}}>
              User Details
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Container maxWidth="sm" sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '20px'}}>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        display: 'flex',
        flexDirection: 'column'
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="Enter First Name" defaultValue={value.fName} variant="standard" onChange={(e) => value.fName = e.target.value}/>
      <TextField id="standard-basic" label="Enter Last Name" defaultValue={value.lName} variant="standard" onChange={(e) => value.lName = e.target.value}/>
      <TextField id="standard-basic" label="Enter Email" defaultValue={value.email} variant="standard" onChange={(e) => value.email = e.target.value}/>
    </Box>
    <Stack spacing={2} direction="row" sx={{marginTop: '10px99'}}>
      <Button variant="contained" onClick={() => {
        changeComponents({
            componentClicked: 'UserForm',
            button: 'continue'           
        })
      }}>Continue</Button>
    </Stack>
      </Container>
    </div>
  );
}
