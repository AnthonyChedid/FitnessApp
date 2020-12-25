import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import {Link} from 'react-router-dom';

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

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography edge="start" color="inherit">
           <Link to="/"><h2>Getfit</h2></Link>
          </Typography>
          <Box display='flex' flexGrow={1}>
          {/* <Typography variant="h6" className={classes.title}>
            Getfit
          </Typography> */}
          </Box>
          <Button color="inherit">About us</Button>
          <Button color="inherit">Contact us</Button>
          <Button color="inherit">Trainers</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
