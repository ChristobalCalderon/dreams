import React from "react";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import AccessibilityIcon from "@material-ui/icons/Accessibility";
import TimerIcon from "@material-ui/icons/Timer";

const navButtons = [
  {
    label: "Check list",
    path: "/",
    icon: <CheckBoxIcon />,
  },
  {
    label: "Exercises",
    path: "/exercises",
    icon: <AccessibilityIcon />,
  },
  {
    label: "Statistics",
    path: "/statistics",
    icon: <EqualizerIcon />,
  },
  {
    label: "Weights",
    path: "/weights",
    icon: <FitnessCenterIcon />,
  },
  {
    label: "Timer",
    path: "/timer",
    icon: <TimerIcon />,
  },
];

export default navButtons;
