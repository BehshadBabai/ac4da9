import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  Grid,
  Typography,
  Button,
  FormControl,
  TextField,
} from '@material-ui/core';
import { SideBanner } from './components/SideBanner';

const Login = ({ user, login }) => {
  const history = useHistory();

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const password = formElements.password.value;

    await login({ username, password });
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
        style={{ height: '500px' }}
      >
        <Grid
          item
          container
          className='login-signup'
          alignItems='baseline'
          alignContent='center'
          justifyContent='flex-end'
        >
          <Typography className='need-to-login-signup'>
            Don't have an account?
          </Typography>
          <Link href='/register' to='/register'>
            <Button variant='outlined'>Create Account</Button>
          </Link>
        </Grid>
        <Grid className='forms' container justifyContent='center'>
          <form onSubmit={handleLogin}>
            <Grid container justifyContent='center'>
              <Grid item xs={7}>
                <Typography variant='h4'>Welcome back!</Typography>
              </Grid>
              <Grid item xs={7}>
                <FormControl fullWidth={true} className='formInput'>
                  <TextField
                    aria-label='username'
                    label='Username'
                    name='username'
                    type='text'
                  />
                </FormControl>
              </Grid>
              <Grid item xs={7}>
                <FormControl fullWidth={true} className='formInput'>
                  <TextField
                    aria-label='password'
                    label='Password'
                    type='password'
                    inputProps={{ minLength: 6 }}
                    name='password'
                  />
                </FormControl>
              </Grid>
              <Grid container justifyContent='center'>
                <Button type='submit' variant='contained'>
                  Login
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
