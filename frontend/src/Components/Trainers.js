import React,{useEffect} from 'react'
import TrainerCard from './Card';
import {useSelector, useDispatch} from 'react-redux';
import {getTrainers} from '../actions/TrainersActions';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';



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
    },
    mrgn:{
        marginTop:15,
    },
    bttnmrg:{
        marginTop:30,
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
    const classes = useStyles();

    useEffect(()=>{
        dispatch(getTrainers(state));
    },[]);
    console.log(trainers);
    return (
        <div>

            <Grid container className={classes.root} spacing={6} >
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={spacing} >
                        {trainers.length>0 && trainers.map((trainer) => (
                            <TrainerCard trainer={trainer} key={trainer.id} />
                            )) }
                        
                        {trainers.length===0 && <p>No trainers availble </p>}
                        
                    </Grid>
                </Grid>
            </Grid>
            
        </div>
    )
}
