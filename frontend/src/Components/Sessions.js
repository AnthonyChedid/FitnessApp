import React,{useEffect} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Container from '@material-ui/core/Container';
import {useSelector, useDispatch} from 'react-redux';
import {getSessions} from '../actions/SessionsAction';
import Loading from './Loading';
import {getCurrentUser} from '../actions/CurrentUserAction';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
  const useStyles = makeStyles({
    table: {
      minWidth: 500,
      maxWidth:500,
      marginTop:30,
    },
  });
  
  const Session=()=>{
  
    const dispatch = useDispatch();
    const sessions = useSelector(state => state.sessions.sessions);
    const currentUser = useSelector(state => state.currentUser);

    const loading =useSelector(state => state.sessions.loading);
   
    useEffect(()=>{
      
        dispatch(getCurrentUser());
        console.log("email used to dispatch",currentUser.user.email);
        dispatch(getSessions((currentUser.user.email).toString()))
        console.log("sessions = ",sessions);
        if(currentUser!==false){
            console.log("user",currentUser);
        }else{
            console.log("talk amongst yourself");
        }
      },[]);
  
      const classes = useStyles();
    
      while(loading===true){
        return(
            <div>
                <Loading/>
            </div>
        )
    }
  
    return (
      <>
      {console.log("email : ",currentUser.user.email)}
      <Container maxWidth="sm">
      <TableContainer>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Trainer Name</StyledTableCell>
              <StyledTableCell align="right">Date Session</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sessions.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {row.trainer.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.sessionDate}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {sessions.length===0 && <p>No sessions yet</p>}
      </Container>
      
      </>
      )
    }
  
  
  
  export default Session;


