import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    
    cls:{
      width:'100%',
    }
  }));


export default function Landing(){
    const classes = useStyles();
    return (
        <div>
            <img src={'landing.jpg'}
           className={classes.cls}/>
        </div>
    );
}
