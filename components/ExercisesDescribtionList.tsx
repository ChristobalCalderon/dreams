import { FormControl, InputLabel, NativeSelect } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import {
  createStyles,
  makeStyles,
  Theme,
  withStyles,
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import list from "./ExerciseDescribtionContent";
import InputBase from "@material-ui/core/InputBase";

const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "label + &": {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: "relative",
      backgroundColor: theme.palette.background.paper,
      border: "1px solid #ced4da",
      fontSize: 16,
      padding: "10px 26px 10px 12px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      "&:focus": {
        borderRadius: 4,
        borderColor: "#80bdff",
        boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
      },
    },
  })
)(InputBase);

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginBottom: "10px",
  },
  media: {
    height: 140,
  },
});

export default function ExercisesDescribtionList() {
  const classes = useStyles();

  const [exercise, setExercise] = React.useState("");
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setExercise(event.target.value as string);
  };

  let showUser = list;

  if (exercise) {
    showUser = showUser.filter((element) => element.title == exercise);
  }

  return (
    <>
      <FormControl>
        <InputLabel htmlFor="demo-customized-select-native">
          Selecting exercise...
        </InputLabel>
        <NativeSelect
          id="demo-customized-select-native"
          value={exercise}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <option aria-label="None" value="" />
          {list.map((element) => {
            return <option value={element.title}>{element.title}</option>;
          })}
        </NativeSelect>
      </FormControl>

      {showUser.map((element) => {
        return (
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={element.image}
                title={element.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {element.title}
                </Typography>
                {element.paragraphs.map((p) => {
                  return (
                    <Typography
                      variant="body2"
                      color="textPrimary"
                      component="p"
                      gutterBottom
                    >
                      {p}
                    </Typography>
                  );
                })}
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
    </>
  );
}
