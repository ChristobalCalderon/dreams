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

export interface CanvasProps {}

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
  const data = [
    { x: 0, y: 8 },
    { x: 1, y: 5 },
    { x: 2, y: 4 },
    { x: 3, y: 9 },
    { x: 4, y: 1 },
    { x: 5, y: 7 },
    { x: 6, y: 6 },
    { x: 7, y: 3 },
    { x: 8, y: 2 },
    { x: 9, y: 0 },
  ];

  return (
    <>
      <XYPlot width={300} height={300}>
        <MarkSeries
          className="mark-series-example"
          sizeRange={[5, 15]}
          data={randomData}
        />
      </XYPlot>
    </>
  );
}
