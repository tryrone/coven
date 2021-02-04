import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginTop: 20,
    cursor: 'pointer',
  },
  media: {
    height: 200,
    width: 346,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function CustomCard({ name, image, setOpen }) {
  const classes = useStyles();

  return (
    <Card
      raised={true}
      onClick={() => {
        setOpen(true);
      }}
      className={classes.root}
    >
      <CardHeader title={name} />
      <CardMedia className={classes.media} image={image} title="Paella dish" />
    </Card>
  );
}
