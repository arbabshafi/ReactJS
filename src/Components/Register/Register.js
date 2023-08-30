import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import { Button, TextField, Box } from '@mui/material';

const Register = () => {

  function userReg(){
    
  }
  return (
    <Box className='register' display="flex" flexDirection="column" alignItems="center">
      <h1>Register</h1>
      <TextField type='text' label="First Name" variant="outlined" />
      <TextField type='text' label="Last Name" variant="outlined" />
      <TextField type='email' label="Email" variant="outlined" />
      <TextField type='password' label="Password" variant="outlined" />
      <TextField type='password' label="Confirm Password" variant="outlined" />
      <Button variant="contained" color="primary" onClick={userReg}>
        Register
      </Button>
      <p className="signin-link">
        Already have an account? <Link href="">Sign in</Link>
      </p>
    </Box>
  );
};
export default Register;