import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  Grid,
  Typography,
  Button,
  FormControl,
  TextField,
  FormHelperText,
} from '@material-ui/core';
import './signin-signup.css';
import { SideBanner } from './components/SideBanner';

const Signup = ({ user, register }) => {
  const history = useHistory();

  const [formErrorMessage, setFormErrorMessage] = useState({});

  const handleRegister = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const email = formElements.email.value;
    const password = formElements.password.value;
    const confirmPassword = formElements.confirmPassword.value;

    if (password !== confirmPassword) {
      setFormErrorMessage({ confirmPassword: 'Passwords must match' });
      return;
    }
    await register({ username, email, password });
  };

  useEffect(() => {
    if (user && user.id) history.push('/home');
  }, [user, history]);

  return (
    <Grid container className='container'>
      <SideBanner xs={12} sm={5} />
      {/** right side of the page */}
      <Grid
        item
        xs={12}
        sm={7}
        container
        alignItems='center'
        className='login-signup-container'
      >
        <Grid
          item
          container
          className='login-signup'
          alignItems='baseline'
          justifyContent='flex-end'
        >
          <Typography className='need-to-login-signup'>
            Already have an account?
          </Typography>
          <Link href='/login' to='/login'>
            <Button variant='outlined'>Login</Button>
          </Link>
        </Grid>
        <Grid className='forms'>
          <form onSubmit={handleRegister}>
            <Grid container justifyContent='center'>
              <Grid item xs={7}>
                <Typography variant='h4'>Create an account.</Typography>
              </Grid>
              <Grid item xs={7}>
                <FormControl fullWidth={true} className='formInput'>
                  <TextField
                    aria-label='username'
                    label='Username'
                    name='username'
                    type='text'
                    required
                  />
                </FormControl>
              </Grid>
              <Grid item xs={7}>
                <FormControl fullWidth={true} className='formInput'>
                  <TextField
                    label='E-mail address'
                    aria-label='e-mail address'
                    type='email'
                    name='email'
                    required
                  />
                </FormControl>
              </Grid>
              <Grid item xs={7}>
                <FormControl
                  error={!!formErrorMessage.confirmPassword}
                  fullWidth={true}
                  className='formInput'
                >
                  <TextField
                    aria-label='password'
                    label='Password'
                    type='password'
                    inputProps={{ minLength: 6 }}
                    name='password'
                    required
                  />
                  <FormHelperText>
                    {formErrorMessage.confirmPassword}
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={7}>
                <FormControl
                  error={!!formErrorMessage.confirmPassword}
                  fullWidth={true}
                  className='formInput'
                >
                  <TextField
                    label='Confirm Password'
                    aria-label='confirm password'
                    type='password'
                    inputProps={{ minLength: 6 }}
                    name='confirmPassword'
                    required
                  />
                  <FormHelperText>
                    {formErrorMessage.confirmPassword}
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid container justifyContent='center'>
                <Button type='submit' variant='contained'>
                  Create
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Signup;
