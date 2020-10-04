import { ListItem, TextField, Input, InputAdornment } from "@material-ui/core";
import * as React from "react";

export interface IWeightsProps {}

export interface State {
  squat: string;
  stiffLegDeads: string;
  benchpress: string;
  dips: string;
  showPassword: boolean;
}

export interface WeightInput {
  property: string;
  label: string;
}

export default function Weights(props: IWeightsProps) {
  const [values, setValues] = React.useState<State>({
    squat: "",
    stiffLegDeads: "",
    benchpress: "",
    dips: "",
    showPassword: false,
  });

  const [weightInput, setWeightInput] = React.useState<WeightInput[]>([
    {
      property: "squat",
      label: "Squat",
    },
    {
      property: "stiffLegDeads",
      label: "Stiff Leg Deads",
    },
    {
      property: "benchpress",
      label: "Bench Press",
    },
    {
      property: "dips",
      label: "Dips",
    },
  ]);

  const handleChange = (prop: keyof State) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <>
      <ListItem>
        <TextField id="filled-basic" label="Squat" variant="filled" disabled />
      </ListItem>
      <ListItem>
        <Input
          id="standard-adornment-squat"
          style={{ margin: 8 }}
          value={values.squat}
          onChange={handleChange("squat")}
          endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
          aria-describedby="standard-squat-helper-text"
          fullWidth
          inputProps={{
            "aria-label": "squat",
          }}
        />
      </ListItem>
      <ListItem>
        <TextField
          id="filled-basic"
          label="Stiff Leg Deads"
          variant="filled"
          disabled
        />
      </ListItem>
      <ListItem>
        <Input
          id="standard-adornment-stiffLegDeads"
          style={{ margin: 8 }}
          value={values.squat}
          onChange={handleChange("stiffLegDeads")}
          endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
          aria-describedby="standard-stiffLegDeads-helper-text"
          fullWidth
          inputProps={{
            "aria-label": "stiffLegDeads",
          }}
        />
      </ListItem>
      <ListItem>
        <TextField
          id="filled-basic"
          label="Bench Press"
          variant="filled"
          disabled
        />
      </ListItem>
      <ListItem>
        <Input
          id="standard-adornment-benchpress"
          style={{ margin: 8 }}
          value={values.squat}
          onChange={handleChange("benchpress")}
          endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
          aria-describedby="standard-benchpress-helper-text"
          fullWidth
          inputProps={{
            "aria-label": "benchpress",
          }}
        />
      </ListItem>
      <ListItem>
        <TextField id="filled-basic" label="Dips" variant="filled" disabled />
      </ListItem>
      <ListItem>
        <Input
          id="standard-adornment-dips"
          style={{ margin: 8 }}
          value={values.squat}
          onChange={handleChange("dips")}
          endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
          aria-describedby="standard-dips-helper-text"
          fullWidth
          inputProps={{
            "aria-label": "dips",
          }}
        />
      </ListItem>
      {}
    </>
  );
}
