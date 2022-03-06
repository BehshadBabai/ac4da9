import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  Grid,
  Typography,
  Button,
  FormControl,
  TextField,
} from '@material-ui/core';

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
    <Grid item xs={12} sm={5} className='side-banner'>
      <Grid item container justifyContent='center' alignContent='center' className='overlay'>
        <Grid item container className='chat' justifyContent='center'>
          <Grid item className='chatImage'></Grid>
          <Grid item className='chatText' xs={12}>Converse With anyone with any language</Grid>
        </Grid>
      </Grid>
    </Grid>
    {/** right side of the page */}
    <Grid item xs={12} sm={7}>
      <Grid item container className='login-signup' alignItems='baseline' alignContent='center' justifyContent='flex-end'>
        <Typography className='need-to-login-signup'>Don't have an account?</Typography>
        <Link href="/register" to="/register" className='login-signup-button-link'>
          <Button variant='outlined'>Create Account</Button>
        </Link>
      </Grid>
      <Grid className='forms'>
        <form onSubmit={handleLogin}>
          <Grid container justifyContent='center'>
            <Grid item xs={7}>
                <h2>Welcome back!</h2>
            </Grid>
            <Grid item xs={7}>
              <FormControl fullWidth={true} className='formInput'>
                <TextField
                  aria-label="username"
                  label="Username"
                  name="username"
                  type="text"
                />
              </FormControl>
            </Grid>
            <Grid item xs={7}>
              <FormControl fullWidth={true}  className='formInput'>
                <TextField
                  aria-label="password"
                  label="Password"
                  type="password"
                  inputProps={{ minLength: 6 }}
                  name="password"
                />
              </FormControl>
            </Grid>
            <Grid container justifyContent='center'>
              <Button type="submit" variant="contained">
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
