import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Collapse } from '@material-ui/core';
import Button from '@material-ui/core/Button';
//import ButtonRedirection from './ButtonRedirection'


const useStyles = makeStyles({
  root: {
    maxWidth: 645,
    background: 'rgba(0,0,0,0.5)', 
    margin: '20px',
    alignItems:'center',
  },
  media: {
    height: 440,
  },
  title: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: '2rem',
    color: '#fff',
  },
  desc: {
    fontFamily: 'Nunito',
    fontSize: '1.1rem',
    color: '#ddd',
  },
  buttonRedirection:{
   marginTop:'10px'
  },
  center:{
    textAlign: 'center'
  }
});

export default function ImageCard({ place, checked }) {
  const classes = useStyles();
  const urlDirection = place.urlDirection;
  const handleClick = ()=>{window.location.href = urlDirection} 

  return (
    <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
      <Card className={classes.root} >
        <CardMedia
          className={classes.media}
          image={place.imageUrl}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.center}>
          <Typography
            gutterBottom
            variant="h5"
            component="h1"
            className={classes.title} 
          >
            {place.title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.desc}
          >
            {place.description}
          </Typography>
              <Button className={classes.buttonRedirection} onClick={handleClick} variant="contained">Visitar Sitio web</Button>
        </CardContent>
       
      </Card>
      
    </Collapse>
  );
}
