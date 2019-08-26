import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Mklogo from './mklogo.png';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    float: 'right',
  },
  logo: {
    width: '80%',
  }
}));

export default function Mkform() {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <img className={classes.logo} src={Mklogo} alt="MK Logo" />
        <Typography component="h1" variant="h5">
          Interview Challenge
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="Name"
                id="Name"
                label="Name"
                variant="outlined"
                required
                fullWidth
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="email"
                id="email"
                variant="outlined"
                label="Email Address"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="message"
                id="message"
                label="Message"
                variant="outlined"
                autoComplete="message"
                multiline={true}
                rows={5}
                required
                fullWidth
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
}