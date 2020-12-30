import React from 'react';
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
  const [open, setOpen] = React.useState(false);
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleDialog = () => {
    setOpenDialog(true);
  };
  
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

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
        <Button size="small" color="primary">
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
    </Card>
  );
}