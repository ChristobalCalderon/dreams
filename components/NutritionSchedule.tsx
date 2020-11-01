import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export interface NutritionScheduleProps {}

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(
  name: string,
  monday: string,
  tuesday: string,
  wednesday: string,
  thursday: string,
  friday: string,
  saturday: string,
  sunday: string
) {
  return {
    name,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    sunday,
  };
}

const rows = [
  createData(
    "Breakfast",
    "Spanish Zucchini Tortilla",
    "Omelet Wraps",
    "Egg & Turkey Stuffed Peppers",
    "Omelet Wraps",
    "Egg & Turkey Stuffed Peppers",
    "Cinnamon Roll Protein Smoothie",
    "Spanish Zucchini Tortilla"
  ),
  createData(
    "Meal",
    "Spanish Zucchini Tortilla",
    "Omelet Wraps",
    "Egg & Turkey Stuffed Peppers",
    "Omelet Wraps",
    "Egg & Turkey Stuffed Peppers",
    "Cinnamon Roll Protein Smoothie",
    "Spanish Zucchini Tortilla"
  ),
  createData(
    "Lunch",
    "Spanish Zucchini Tortilla",
    "Omelet Wraps",
    "Egg & Turkey Stuffed Peppers",
    "Omelet Wraps",
    "Egg & Turkey Stuffed Peppers",
    "Cinnamon Roll Protein Smoothie",
    "Spanish Zucchini Tortilla"
  ),
  createData(
    "Meal",
    "Spanish Zucchini Tortilla",
    "Omelet Wraps",
    "Egg & Turkey Stuffed Peppers",
    "Omelet Wraps",
    "Egg & Turkey Stuffed Peppers",
    "Cinnamon Roll Protein Smoothie",
    "Spanish Zucchini Tortilla"
  ),
  createData(
    "Dinner",
    "Spanish Zucchini Tortilla",
    "Omelet Wraps",
    "Egg & Turkey Stuffed Peppers",
    "Omelet Wraps",
    "Egg & Turkey Stuffed Peppers",
    "Cinnamon Roll Protein Smoothie",
    "Spanish Zucchini Tortilla"
  ),
];

export default function NutritionSchedule(props: NutritionScheduleProps) {
  const classes = useStyles();

  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={"responsive-table"} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Weekly food schedule</TableCell>
              <TableCell align="right">Monday</TableCell>
              <TableCell align="right">Tuesday</TableCell>
              <TableCell align="right">Wednesday</TableCell>
              <TableCell align="right">Thursday</TableCell>
              <TableCell align="right">Friday</TableCell>
              <TableCell align="right">Saturday</TableCell>
              <TableCell align="right">Sunday</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row" align="left">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.monday}</TableCell>
                <TableCell align="right">{row.tuesday}</TableCell>
                <TableCell align="right">{row.wednesday}</TableCell>
                <TableCell align="right">{row.thursday}</TableCell>
                <TableCell align="right">{row.friday}</TableCell>
                <TableCell align="right">{row.saturday}</TableCell>
                <TableCell align="right">{row.sunday}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
