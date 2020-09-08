import React, { useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://blog.hdwallsource.com/wp-content/uploads/2014/11/coffee-cup-wallpaper-38720-39606-hd-wallpapers.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function LoginPage(props) {
  const classes = useStyles();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loggedin, setLogin] = useState(false)


  function signIn() {
    console.log('sign in')
    axios.get('/signin', { params: { email: email, pwd: password } })
      .then(res => {
        console.log(res.data.logdin)
        if(res.data.logdin === true){
          setLogin(true)
        }else{
          alert('working credentials')
        }
      })
  }

  return (
    <div>

      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          {(loggedin === false) ?
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
          </Typography>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                placeholder="enter email"
                className="useremail"
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                placeholder="enter password"
                className="userpassword"
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <div><b>Guest Login: </b><span>root</span></div>
              <div><b>Guest Pswrd: </b><span>toor</span></div>
              <br />
              <Button
                style={{ backgroundColor: 'blue' }}
                onClick={signIn}
              >
                Sign In
            </Button>
            </div> :
            <div className={classes.paper}>
              <div><p>Logged In Successfully</p></div>
              <Link to={`/blogs`}>
                <Button>View Blogs</Button>
              </Link>
            </div>
          }
        </Grid>
      </Grid>
    </div>
  );
}