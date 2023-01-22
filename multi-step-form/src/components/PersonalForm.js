import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import UserContext from "../context/userContext";
import { useContext } from "react";


export default function PersonalForm({changeComponents}) {
  const value = React.useContext(UserContext);
  return (
    <div id="PersonalForm">
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
              Personal Details
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
      <TextField id="standard-basic" label="Occupation" defaultValue={value.occupation} variant="standard" onChange={(e) => value.occupation = e.target.value}/>
      <TextField id="standard-basic" label="City" defaultValue={value.city} variant="standard" onChange={(e) => value.city = e.target.value}/>
      <TextField id="standard-basic" label="Bio" defaultValue={value.bio} variant="standard" onChange={(e) => value.bio = e.target.value}/>
    </Box>
    <Stack spacing={2} direction="row" sx={{marginTop: '10px'}}>
      <Button variant="contained" onClick={() => {
        changeComponents({
            componentClicked: 'PersonalForm',
            button: 'continue'            
        })
      }}>Continue</Button>
      <Button variant="contained" onClick={() => {
        changeComponents({
            componentClicked: 'PersonalForm',
            button: 'back'            
        })
      }}>Back</Button>
    </Stack>
      </Container>
    </div>
  );
}
