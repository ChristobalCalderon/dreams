import {
  makeStyles,
  Theme,
  createStyles,
  Button,
  ButtonGroup,
  Typography,
} from "@material-ui/core";
import * as React from "react";
import useSound from "use-sound";
// const boop = require("../public/boop.mp3");

export interface TimerCountDownProps {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  })
);

export default function TimerCountDown(props: TimerCountDownProps) {
  const classes = useStyles();
  const [selectedTime, setSelectedTime] = React.useState(60);
  const [seconds, setSeconds] = React.useState(60);
  const [start, setStart] = React.useState(false);

  React.useEffect(() => {
    if (start && seconds > 0) {
      setTimeout(
        () => {
          setSeconds(seconds - 1);
          if (seconds === 1) play();
        },
        1000,
        seconds
      );
    } else {
      setStart(false);
    }
  });

  function startCountDown() {
    setStart(true);
  }

  function play() {
    var audio = new Audio("/boop.mp3");
    audio.play();
  }

  function selectTimeReset(time: number) {
    setSeconds(selectedTime);
    setSelectedTime(time);
    // reset();
  }

  function reset() {
    setStart(false);
    // setTimeout(() => {
    //   setSeconds(selectedTime);
    // }, 1000);
  }

  return (
    <div className={classes.root}>
      <div style={{ marginTop: "100px" }}></div>
      <Typography variant="h1" component="h2" gutterBottom>
        {seconds}
      </Typography>
      <ButtonGroup
        variant="contained"
        color="primary"
        aria-label="contained primary button group"
      >
        <Button onClick={startCountDown}>START</Button>
        <Button onClick={reset}>RESET</Button>
      </ButtonGroup>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button onClick={() => selectTimeReset(30)}>30 sec</Button>
        <Button onClick={() => selectTimeReset(60)}>1 min</Button>
        <Button onClick={() => selectTimeReset(120)}>2 min</Button>
        <Button onClick={() => selectTimeReset(180)}>3 min</Button>
      </ButtonGroup>
    </div>
  );
}
