import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image="/squat.png" title="Squat" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Squat
          </Typography>
          <Typography
            variant="body2"
            color="textPrimary"
            component="p"
            gutterBottom
          >
            Standing in a shoulder-width stance with feet slightly pointed out,
            rest a loaded barbell across the back of your shoulders holding it
            with an overhand grip.
          </Typography>
          <Typography
            variant="body2"
            color="textPrimary"
            component="p"
            gutterBottom
          >
            Descend into a squat position by pushing your hips back and bending
            at the knee. At the bottom of the squat, pause, and then drive your
            hips upward bringing you back to starting position.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
