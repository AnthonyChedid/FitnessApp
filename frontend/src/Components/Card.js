import React,{useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import {postSession} from '../actions/postSessionAction';
import {getCurrentUser} from '../actions/CurrentUserAction';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import {getUsers} from '../actions/UsersAction';
const useStyles = makeStyles({
  root: {
    maxWidth: 320,
    minWidth: 320,
    marginRight:10,
    marginLeft:30,
    marginTop:15,
    marginBottom:15,
  },
  image:{
    height:500,
    width:400,
    marginTop:20,
    marginBottom:20,
    marginRight:10,
  },
  container:{
    margin:1,
  }
});



export default function TrainerCard(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [openFormDialog,setOpenFormDialog]=React.useState(false);
  const [date,setDate]=React.useState(new Date());
  const [snack,setSnack]=React.useState(false);
  const [length,setLength]=React.useState("1");
  const currentUser = useSelector(state => state.currentUser)
  const user = useSelector(state => state.users.users);
  const handleDialog = () => {
    setOpenDialog(true);
  };
  
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleFormDialog=()=>{
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleApointment=(e)=>{
    setDate(e.target.value);
  }
  const handleLength=(e)=>{
    setLength(e.target.value);
  }
  const handleSubmit=()=>{
    var ses={
      "user":user[0],
      "trainer":props.trainer,
      "sessionDate":date.toString(),
      "length":length
    }
    console.log(ses);
    setOpen(false);
    
    dispatch(postSession(ses));
    setSnack(true);
    console.log(user);
  }

  

  const handleSuccessClick=()=>{
    setSnack(false);
  }

  useEffect(()=>{
    dispatch(getCurrentUser());  
    dispatch(getUsers(currentUser.user.email))
  },[]);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="trainer image"
          height="200"
          image={props.trainer.image}
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {props.trainer.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.trainer.location}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleFormDialog}>
          Book Session
        </Button>
        <Button size="small" color="primary" onClick={handleDialog}>
          Learn More
        </Button>

        <Dialog
              open={openDialog}
              onClose={handleCloseDialog}
              fullWidth={true}
              maxWidth={"md"}
            >
            
            <DialogContent  maxWidth={"lg"}>
            <Grid container>
                <Grid item xs={20} md={6}>
                  <img src={props.trainer.image} className={classes.image}/>
                </Grid>
                <Grid item xs={12} md={6}>
                  <br/>
                <Typography variant="h6" fontWeight="fontWeightBold" gutterBottom>
                  <Box fontWeight="fontWeightBold" m={1}>Name : </Box>{props.trainer.name}
                  </Typography><br/>
                <Typography variant="h6" gutterBottom><Box fontWeight="fontWeightBold" m={1}>
                  Type : </Box>{ props.trainer.categories.map((item)=> <h6>{item.name}, </h6> ) }</Typography><br/>
                <Typography variant="h6" gutterBottom><Box fontWeight="fontWeightBold" m={1}>
                  location : </Box>{ props.trainer.location}</Typography><br/>
                <Typography variant="h6" gutterBottom><Box fontWeight="fontWeightBold" m={1}>
                  Email : </Box>{ props.trainer.email}</Typography><br/>
                <Typography variant="h6" gutterBottom><Box fontWeight="fontWeightBold" m={1}>
                  Birthday : </Box>{ props.trainer.dateOfBirth}</Typography><br/>
                </Grid>
                
                
      </Grid>
            </DialogContent>
          </Dialog>
      </CardActions>
      <div>
      <Dialog
        open={open}
        onClose={handleClose}
        
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Book
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            
          </DialogContentText>
          <DialogContent>
          <TextField
            fullWidth
            onChange={handleApointment}
            id="datetime-local"
            label="Next appointment"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
      <TextField
            onChange={handleLength}
            margin="dense"
            id="number"
            label="length"
            type="number"
            fullWidth
            
          />
      </DialogContent>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Book
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    <Snackbar open={snack} autoHideDuration={3000} onClose={handleSuccessClick}>
        <Alert onClose={handleSuccessClick} severity="success">
          Session booked
        </Alert>
    </Snackbar>
    </Card>
    
  );
}