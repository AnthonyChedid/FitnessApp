import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import {Link} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  cls:{
    width:'100%',
  }
}));

function Navbar() {
  const classes = useStyles();
  const [openLogin, setOpenLogin] = React.useState(false);
  const [openSignin, setOpenSignin] = React.useState(false);

  const handleClickOpen=() => {
    setOpenLogin(true);
  }

  const handleLoginClose = () => {
    setOpenLogin(false);
  };

  const handleSignin=()=>{
    setOpenSignin(true);
    setOpenLogin(false);
  }
  const handleSigninClose=()=>{
    setOpenSignin(false);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography edge="start" color="inherit">
           <Link to="/"><h2>Getfit</h2></Link>
          </Typography>
          <Box display='flex' flexGrow={1}>
          
          </Box>
          <Link to="/aboutus"><Button color="inherit">About us</Button></Link>
          <Link to="/contactus"><Button color="inherit">Contact us</Button></Link>
          <Link to="/trainers"><Button color="inherit">Trainers</Button></Link>
          <Button color="inherit" onClick={handleClickOpen}>Login</Button>
          
        </Toolbar>
      </AppBar>
      
      <div>
      <Dialog open={openLogin} onClose={handleLoginClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Log in</DialogTitle>
        <DialogContent>
          <DialogContentText>
            If you already have an account login if not create a new one
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
          <TextField
            margin="dense"
            id="pass"
            label="Password"
            type="password"
            fullWidth
          />
        </DialogContent>
        
        <DialogActions>
          <Button onClick={handleLoginClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleLoginClose} color="primary">
            Log in
          </Button>
          <Button onClick={handleSignin} color="primary">
            Sign in
          </Button>
        </DialogActions>
      </Dialog>
    </div>

    <div>
      <Dialog open={openSignin} onClose={handleSigninClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Sign in</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Create new account
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="firstName"
            label="First Name"
            fullWidth
            
          />
          <TextField
            
            margin="dense"
            id="lastName"
            label="Last Name"
            fullWidth
          />
          <TextField
            
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
          />
          <TextField
            margin="dense"
            id="pass"
            label="Password"
            type="password"
            fullWidth
          />
        </DialogContent>
        
        <DialogActions>
          <Button onClick={handleSigninClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSigninClose} color="primary">
            Create Account
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    </div>
  );
}

export default Navbar;
