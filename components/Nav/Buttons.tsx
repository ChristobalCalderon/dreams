import React from "react";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import AccessibilityIcon from "@material-ui/icons/Accessibility";
import TimerIcon from "@material-ui/icons/Timer";
import KitchenIcon from "@material-ui/icons/Kitchen";
import BuildIcon from "@material-ui/icons/Build";
import AssignmentIcon from "@material-ui/icons/Assignment";
import StarIcon from "@material-ui/icons/Star";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import LockIcon from "@material-ui/icons/Lock";
import PersonIcon from "@material-ui/icons/Person";

const navButtons = [
  {
    label: "Unlock",
    path: "/api/login",
    icon: <LockOpenIcon />,
  },
  {
    label: "Profile",
    path: "/profile",
    icon: <PersonIcon />,
  },
  {
    label: "Check list",
    path: "/checklist",
    icon: <CheckBoxIcon />,
  },
  {
    label: "Weights",
    path: "/weights",
    icon: <FitnessCenterIcon />,
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
    label: "Timer",
    path: "/timer",
    icon: <TimerIcon />,
  },
  {
    label: "Nutrition",
    path: "/nutrition",
    icon: <KitchenIcon />,
  },
  {
    label: "Supplements",
    path: "/supplements",
    icon: <BuildIcon />,
  },
  {
    label: "Program",
    path: "/program",
    icon: <AssignmentIcon />,
  },
  {
    label: "LifeStyle",
    path: "/lifestyle",
    icon: <StarIcon />,
  },
  {
    label: "Lock",
    path: "/api/logout",
    icon: <LockIcon />,
  },
];

export default navButtons;
