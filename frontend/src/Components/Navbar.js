import React,{useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';

import {getCategories} from '../actions/CategoriesAction';
import ImageUploader from 'react-images-upload';

import { Button} from './Button' ;

import '../Styling/Navbar.css';

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
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

function Navbar() {
  const dispatch = useDispatch();
  const [openLogin, setOpenLogin] = React.useState(false);
  const [openSignin, setOpenSignin] = React.useState(false);
  const [userState, setUserState] = React.useState('user');
  const [click, setClick] = React.useState(false);
  const categories = useSelector(state => state.categories.categories);
  let state2={};
  { categories.map((cat) => (
    state2[cat.name]=false
  ))}
  const [state, setState] = React.useState(state2);
  const [image,setImage] = React.useState();
  const [button, setButton] = React.useState(true);
  
  const classes = useStyles();

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

  const handleChange = (event) => {
    setUserState(event.target.value);
  };
  
  const handleCheckboxChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const onDrop=(picture) => {
    setState(picture);
  };

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };


  useEffect(()=>{
    dispatch(getCategories());
    showButton();
},[]);

  window.addEventListener('resize', showButton);
  return (
    <div className={classes.root}>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            GetFit  
            <i class='fas fa-dumbbell fa-fw' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to="/aboutus" className='nav-links' onClick={closeMobileMenu}>
                About us
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/contactus'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact us
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/trainers'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Trainers
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                className='nav-links'
                onClick={closeMobileMenu,handleClickOpen}
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      
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
        <DialogTitle id="form-dialog-title">Sign up</DialogTitle>
        <DialogContent>

        <FormControl component="fieldset">
          <FormLabel component="legend">Account Type</FormLabel>
          <RadioGroup aria-label="Type" value={userState} onChange={handleChange}>
            <FormControlLabel value="User" control={<Radio />} label="User" />
            <FormControlLabel value="Trainer" control={<Radio />} label="Trainer" />
          </RadioGroup>
        </FormControl>


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
          <br/><br/>


          <form className={classes.container} noValidate>
            <TextField
              id="date"
              label="Birthday"
              type="date"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>

          <TextField
            
            margin="dense"
            id="location"
            label="Location"
            type="location"
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
          
          {(userState==="Trainer") ? categories.map((cat) => (
            <FormControlLabel
              control={<Checkbox checked={state[cat.name]} onChange={handleCheckboxChange} name={cat.name} />}
              label={cat.name}
            />)
            ) : console.log("machi")}
          {(userState==="Trainer") ? 
            <ImageUploader
            singleImage={true}
            withPreview={true}
            withIcon={true}
            buttonText="Choose Image"
            label="Max file size: 5mb, accepted: jpg, png"
            buttonText='Choose images'
            onChange={onDrop}
            imgExtension={['.jpg', '.png']}
            maxFileSize={5242880}/>
          
          : console.log("machi kmn")}
          
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
