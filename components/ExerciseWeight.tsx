import { ListItem, TextField, Input, InputAdornment } from "@material-ui/core";
import * as React from "react";
import Exercises, { Exercise } from "./exercises/exercisesModel";

export default function ExerciseWeight() {
  const [values, setValues] = React.useState<Exercise[]>(Exercises);

  const handleChange = (index: number) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    // 1. Make a shallow copy of the items
    let items: Exercise[] = [...values];
    // 2. Make a shallow copy of the item you want to mutate
    let updatedItem: Exercise = { ...items[index] };
    // 3. Replace the property you're intested in
    updatedItem.value = +event.target.value;
    // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
    items[index] = updatedItem;
    // 5. Set the state to our new copy
    setValues(items);
  };

  return (
    <>
      {values.map((item: Exercise, index: number) => {
        return (
          <>
            <ListItem key={"listitem_" + item.label}>
              <TextField
                id={`fill-basic-${item.property}`}
                label={item.label}
                variant="filled"
                disabled
              />
            </ListItem>
            <ListItem key={"listitem2_" + item.label}>
              <Input
                id={`standard-adornment-${item.property}`}
                style={{ margin: 8 }}
                value={item.value}
                onChange={handleChange(index)}
                endAdornment={
                  <InputAdornment position="end">Kg</InputAdornment>
                }
                aria-describedby={`standard-${item.property}-helper-text`}
                fullWidth
                inputProps={{
                  "aria-label": item.property,
                }}
              />
            </ListItem>
          </>
        );
      })}
    </>
  );
}
