import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Draggable from 'react-draggable';

const useStyles = makeStyles({
  position: {
    width: '250px',
  },

  root: {
    minWidth: 175,
    maxWidth: 200,
    background: '#ffe2d8',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
      <div className={classes.positon}>
        <Draggable>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Word of the Day
              </Typography>
              <Typography variant="h5" component="h2">
                be{bull}nev{bull}o{bull}lent
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                adjective
              </Typography>
              <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                onClick={(e) =>
                  (window.location =
                    'https://www.dictionary.com/browse/benevolent')
                }
                size="small"
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Draggable>
        <br></br>
        <Draggable>
          <Card className={classes.root} variant="outlined" display="flex">
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Place of the Day
              </Typography>
              <Typography variant="h5" component="h2">
                Dev Mountain
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                kick ass place
              </Typography>
              <Typography variant="body2" component="p">
                Teaching the ways of the code
                <br />
                {'"Code Life @ DevMnt"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                onClick={(e) => (window.location = 'https://devmountain.com/')}
                size="small"
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Draggable>
        <br></br>
        <Draggable>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Quote of the day
              </Typography>
              <Typography variant="h5" component="h2">
                Obstacles are things a person sees when he takes his eyes off
                his goal.
              </Typography>
              <Typography
                className={classes.pos}
                color="textSecondary"
              ></Typography>
              <Typography variant="body2" component="p">
                <br />
                {'E. Joseph Cossman'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                onClick={(e) =>
                  (window.location =
                    'https://www.brainyquote.com/authors/e-joseph-cossman-quotes')
                }
                size="small"
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Draggable>
        <br></br>
        <Draggable>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Song of the Day
              </Typography>
              <Typography variant="h5" component="h2">
                you broke me first
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                Tate McRae
              </Typography>
              <Typography variant="body2" component="p">
                Todays Top Hits
                <br />
                {'"Lets Jam"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                onClick={(e) =>
                  (window.location =
                    'https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M')
                }
                size="small"
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Draggable>
      </div>
    </div>
  );
}
