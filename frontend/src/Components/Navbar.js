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
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

import {getCategories} from '../actions/CategoriesAction';
import ImageUploader from 'react-images-upload';

import { Button} from './Button' ;

import '../Styling/Navbar.css';
import {postNewTrainer,postNewUser,checkLogin} from './SignupFunction';
import {postTrainer} from '../actions/addTrainerAction'
import {postUser} from '../actions/addUserAction';
import {getUsers} from '../actions/UsersAction';
import {setCurrentUser} from '../actions/CurrentUserAction';

//import postNewTrainer from './SignupFunction';

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
  const allUsers= useSelector(state =>state.users.users);
  const [state, setState] = React.useState([]);
  
  const [button, setButton] = React.useState(true);
  const [firstName,setFirstName]=React.useState("");
  const [LastName,setLastName]=React.useState("");
  const [dateOfBirth,setDateOfBirth]=React.useState(new Date());
  const [location,setLocation]=React.useState("");
  const [email,setEmail]=React.useState("");
  const [password,setPassword]=React.useState("");
  const [image,setImage] = React.useState();
  const [number,setNumber]=React.useState("");
  const [open, setOpen] = React.useState(false);
  const [createUserSuccess,setCreateUserSuccess]=React.useState(false);
  const [LoginUserSuccess,setLoginUserSuccess]=React.useState(false);
  const currentUser=useSelector(state=>state.currentUser.user);
  
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
    let tmp=state;
    tmp[event.target.name]=event.target.checked;
    setState(tmp);
    console.log(state);
  };

  const onDrop=(picture) => {
    setImage(picture);
    console.log(picture);
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
  
  const handleFirstName=(e)=>{
    setFirstName(e.target.value);
  }
  const handleLastName=(e)=>{
    setLastName(e.target.value);
  }
  const handleDateOfBirth=(e)=>{
    console.log(e.target.value);
    setDateOfBirth(e.target.value);
  }
  const handleLocation=(e)=>{
    setLocation(e.target.value);
  }
  const handleEmail=(e)=>{
    setEmail(e.target.value);
  }
  const handlePassword=(e)=>{
    setPassword(e.target.value);
  }
  const handleNumber=(e)=>{
    setNumber(e.target.value);
  }
  const handleSuccessClick=()=>{
    setCreateUserSuccess(false);
    setLoginUserSuccess(false);
  }

  const handleClickOpenSessions=()=>{
    
  }

  const handleLogingIn=()=>{
    var tmp=checkLogin(email,password,allUsers);
    console.log("tmp : ",tmp);
    if(tmp===false){
      setLoginUserSuccess(true);
    }else{
      setOpenLogin(false);
      dispatch(setCurrentUser(tmp));
      setCreateUserSuccess(true);
      console.log("currentUser",currentUser)
    }
  }

  const handleSigninCreate=()=>{
    setOpenSignin(false);
    if(userState==="Trainer"){
      var trainer=postNewTrainer(firstName,LastName,dateOfBirth,location,email,
        password,number,state,image,categories);
      dispatch(postTrainer(trainer));
    }
    else{
      var user=postNewUser(firstName,LastName,dateOfBirth,location,email,
        password);
      dispatch(postUser(user));
      setCreateUserSuccess(true);
      dispatch(setCurrentUser(user));

    }
  }

  const handleOpenProfile=()=>{
    
  }

  let state2={}
  useEffect(()=>{
    dispatch(getCategories());
    showButton();
    { categories.map((cat) => (
      state2[cat.name]=false
    ))}
    setState(state2);
    dispatch(getUsers(""));
    
},[]);

  window.addEventListener('resize', showButton);
  return (
    <div className={classes.root}>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            GetFit  
            <i className='fas fa-dumbbell fa-fw' />
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

            <ul className='nav-item'>
              {(currentUser===false? <li
                className='nav-links'
                onClick={closeMobileMenu,handleClickOpen}
              >
                Sign Up
              </li> : <li
                className='nav-item'
                onClick={closeMobileMenu,handleClickOpenSessions}
              >
                <Link to="/sessions" className='nav-links' onClick={closeMobileMenu}>
                  Profile
                </Link>
              </li>)}
              
            </ul>
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
            id="email1"
            label="Email Address"
            type="email"
            fullWidth
            value={email}
            onChange={handleEmail}
          />

          <TextField
            margin="dense"
            id="pass1"
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={handlePassword}
          />
        </DialogContent>
        
        <DialogActions>
          <Button onClick={handleLoginClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleLogingIn} color="primary">
            Log in
          </Button>
          <Button onClick={handleSignin} color="primary">
            Sign up
          </Button>
        </DialogActions>
      </Dialog>
    </div>

    <div>
      <Dialog open={openSignin} onClose={handleSigninClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Sign up</DialogTitle>
        <DialogContent>

        {/* <FormControl component="fieldset">
          <FormLabel component="legend">Account Type</FormLabel>
          <RadioGroup aria-label="Type" value={userState} onChange={handleChange}>
            <FormControlLabel value="User" control={<Radio />} label="User" />
            <FormControlLabel value="Trainer" control={<Radio />} label="Trainer" />
          </RadioGroup>
        </FormControl> */}


          <TextField
            autoFocus
            margin="dense"
            id="firstName"
            label="First Name"
            fullWidth
            value={firstName}
            onChange={handleFirstName}
          />
          <TextField
            
            margin="dense"
            id="lastName"
            label="Last Name"
            fullWidth
            value={LastName}
            onChange={handleLastName}
          />
          <br/><br/>


          <form className={classes.container} noValidate>
            <TextField
              id="date"
              onChange={handleDateOfBirth}
              label="Birthday"
              type="date"
              value={dateOfBirth}
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
            value={location}
            onChange={handleLocation}
          />

          <TextField
            
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            value={email}
            onChange={handleEmail}
          />

          <TextField
            margin="dense"
            id="pass"
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={handlePassword}
          />

          <TextField
            margin="dense"
            id="number"
            label="number"
            type="number"
            fullWidth
            value={number}
            onChange={handleNumber}
          />
          
          {/* {(userState==="Trainer") ? categories.map((cat) => (
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
            value={image}
            buttonText="Choose Image"
            label="Max file size: 5mb, accepted: jpg, png"
            buttonText='Choose images'
            onChange={onDrop}
            imgExtension={['.jpg', '.png']}
            maxFileSize={5242880}/>
          
          : console.log("machi kmn")}
           */}
        </DialogContent>
        
        <DialogActions>
          <Button onClick={handleSigninClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSigninCreate} color="primary">
            Create Account
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    <Snackbar open={createUserSuccess} autoHideDuration={3000} onClose={handleSuccessClick}>
        <Alert onClose={handleSuccessClick} severity="success">
          welcome
        </Alert>
    </Snackbar>
    <Snackbar open={LoginUserSuccess} autoHideDuration={3000} onClose={handleSuccessClick}>
        <Alert onClose={handleSuccessClick} severity="error">
          wrong email or password
        </Alert>
      </Snackbar>

    </div>
  );
}

export default Navbar;
