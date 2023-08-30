import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { Button, TextField, Box } from '@mui/material';
const Login = () => {
  return(
    <Box className='login' display="flex" flexDirection="column" alignItems="center">
      <h1>Login</h1>
      <TextField type='email' id="outlined-basic" label="Email" variant="outlined" />
      <TextField type='password' id="outlined-basic" label="Password" variant="outlined" />
      <Button variant="contained" color="success">
        Login
      </Button>
      <p className="signup-link">
        Don't have an account? <Link href="">Signup</Link>
      </p>
    </Box>
  );
};
export default Login;