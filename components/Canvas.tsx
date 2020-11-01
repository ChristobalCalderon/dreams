import { makeStyles, Theme, Typography } from "@material-ui/core";
import * as React from "react";
import {
  HorizontalGridLines,
  LineSeries,
  MarkSeries,
  VerticalGridLines,
  XAxis,
  XYPlot,
  YAxis,
} from "react-vis";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { useEffect } from "react";
import dayjs from "dayjs";

export interface CanvasProps {}

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

function getRandomData() {
  return new Array(100).fill(0).map((row) => ({
    x: Math.random() * 10,
    y: Math.random() * 20,
    size: Math.random() * 10,
    color: Math.random() * 10,
    opacity: Math.random() * 0.5 + 0.5,
  }));
}
const colorRanges = {
  typeA: ["#59E4EC", "#0D676C"],
  typeB: ["#EFC1E3", "#B52F93"],
};

const randomData = getRandomData();

export default function Canvas(props: CanvasProps) {
  const classes = useStyles();
  const MSEC_DAILY = 86400000;

  const timestamp = new Date("September 9 2017").getTime();

  let curr = new Date();
  let monday = curr.getDate() - curr.getDay() + 1;
  let tuesday = monday + 1;
  let wednesday = monday + 2;
  let thursday = monday + 3;
  let friday = monday + 4;
  let saturday = monday + 5;
  let sunday = monday + 6;

  let mondayday = new Date(curr.setDate(monday)).getTime();
  let tuesdayday = new Date(curr.setDate(tuesday)).getTime();
  let wednesdayday = new Date(curr.setDate(wednesday)).getTime();
  let thursdayday = new Date(curr.setDate(thursday)).getTime();
  let fridayday = new Date(curr.setDate(friday)).getTime();
  let saturdayday = new Date(curr.setDate(saturday)).getTime();
  let sundayday = new Date(curr.setDate(sunday)).getTime();

  useEffect(() => {
    let curr = new Date();
    let monday = curr.getDate() - curr.getDay() + 1;
    let sunday = curr.getDate() - curr.getDay() + 7;

    console.log("Chris", monday, sunday);

    let mondayDate = dayjs(curr.setDate(monday));
    let sundayDate = dayjs(curr.setDate(sunday));
    let startDate = mondayDate.subtract(1, "day").format("YYYY-MM-DD");
    let endDate = sundayDate.subtract(1, "day").format("YYYY-MM-DD");

    console.log("Chris", mondayDate, sundayDate);

    fetch(
      process.env.apiUrl +
        "/api/weekly?startDate=" +
        startDate +
        "&endDate=" +
        endDate
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <>
      <Typography variant="h2" component="h2">
        Weekly sets
      </Typography>
      {/* <Alert severity="error">
        5 out 28 sets left! Come on, you can do it!
      </Alert> */}
      <Alert severity="success">Great job this week</Alert>
      <XYPlot xType="time" width={300} height={300}>
        <HorizontalGridLines />
        <VerticalGridLines />
        <XAxis title="Monday to Sunday" />
        <YAxis title="Set 28" />
        <LineSeries
          data={[
            { x: mondayday, y: 10 },
            { x: tuesdayday, y: 5 },
            { x: wednesdayday, y: 15 },
            { x: thursdayday, y: 12 },
            { x: fridayday, y: 16 },
            { x: saturdayday, y: 16 },
            { x: sundayday, y: 28 },
          ]}
        />
      </XYPlot>

      {/* <XYPlot width={300} height={300}>
        <MarkSeries
          className="mark-series-example"
          sizeRange={[5, 15]}
          data={randomData}
        />
      </XYPlot> */}
    </>
  );
}
