import React from "react";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import FastfoodIcon from "@material-ui/icons/Fastfood";

const navButtons = [
  {
    label: "Check list",
    path: "/",
    icon: <CheckBoxIcon />,
  },
  {
    label: "Exercises",
    path: "/exercises",
    icon: <FitnessCenterIcon />,
  },
  {
    label: "Food",
    path: "/food",
    icon: <FastfoodIcon />,
  },
];

export default navButtons;
