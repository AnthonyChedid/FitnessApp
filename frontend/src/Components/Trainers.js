import React,{useEffect} from 'react'
import TrainerCard from './Card';
import {useSelector, useDispatch} from 'react-redux';
import {getTrainers} from '../actions/TrainersActions';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Loading from './Loading';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      minWidth: 120,
      marginTop:15
    },
    control: {
      padding: theme.spacing(2),
    },
    bttn:{
        marginLeft:40,
        marginTop:15,
    },
    mrgn:{
        marginTop:15,
    },
    bttnmrg:{
        marginTop:30,
    },

    crd:{
        marginRight:10,
        marginLeft:10,
        marginTop:10,
    }
  }))

  var state={
    searchText:"",
    type:"",
};

export default function Trainers() {

    const dispatch = useDispatch();
    const trainers = useSelector(state => state.trainers.trainers)
    const loading =useSelector(state => state.trainers.loading);
    const error =useSelector(state => state.trainers.error);

    const [spacing] = React.useState(2);
    const [type, setType] = React.useState("");
    const classes = useStyles();

    const OnTextChange= (e) =>{
        state.searchText=e.target.value;
    }
    
    const HandleChange =(e) =>{
        state.type=e.target.value;
        setType(e.target.value)
    }

    const HandleSubmit =()=>{
        dispatch(getTrainers(state));
        state.searchText="";
    }


    useEffect(()=>{
        dispatch(getTrainers(state));
    },[]);
    console.log(trainers);

    while(loading===true){
        return(
            <div>
                <Loading/>
            </div>
        )
    }

    
    return (
        <div>

        <Container maxWidth="lg">
            <Grid container spacing={10}>
                <Grid item xs={12} sm={6} >
                    <Grid container justify="center" >
                        <TextField id="textField" 
                            label="Search Athlete"
                            fullWidth={true}
                            onChange={OnTextChange}
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Grid container justify="center">
                        <FormControl fullWidth >
                            <InputLabel id="selectField">Sports Category</InputLabel>
                                <Select
                                    className={classes.root}
                                    id="selectField"
                                    value={type}
                                    onChange={HandleChange}
                                    >
                                    <option value={""}>All</option>
                                    <option value={"Bodybuilding"}>Bodybuilding</option>
                                    <option value={"Basketball"}>Basketball</option>
                                 </Select>
                        </FormControl>

                    </Grid>
                </Grid>
            
                 <Grid item xs={12} sm={3}>
                    <Grid container justify="center" >
                        <Button  onClick={HandleSubmit} className={classes.bttn} variant="contained" color="secondary">Search</Button>
                    </Grid>
                </Grid>
            </Grid>









            <Grid container className={classes.root} spacing={20} >
                <Grid item xs={12} >
                    <Grid container justify="center" spacing={spacing} >
                        {trainers.length>0 && trainers.map((trainer) => (
                            <TrainerCard trainer={trainer} key={trainer.id} />
                            )) }
                        
                        {trainers.length===0 && <p>No trainers availble </p>}
                        
                    </Grid>
                </Grid>
            </Grid>
            </Container>
        </div>
    )
}
