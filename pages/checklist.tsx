import Checkbox from "@material-ui/core/Checkbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import dayjs from "dayjs";
import React from "react";
import Layout from "../components/Layout";
import Activity from "./api/activity";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  dividerFullWidth: {
    margin: `5px 0 0 ${theme.spacing(2)}px`,
  },
  dividerInset: {
    margin: `5px 0 0 ${theme.spacing(9)}px`,
  },
}));

export interface ChecklistProps {
  data: Activity[];
}

export default function Checklist(props: ChecklistProps) {
  const classes = useStyles();
  const today = dayjs(new Date()).format("YYYY-MM-DDTHH:mm:ss");
  const [results, setResults] = React.useState(props.data);

  const getDataForPreviousDay = async () => {
    let currentDate = dayjs(results[0].date);
    let newDate = currentDate.subtract(1, "day").format("YYYY-MM-DD");
    const res = await fetch(process.env.apiUrl + "/api/daily?date=" + newDate);
    const json = await res.json();

    setResults(json);
  };

  const getDataForNextDay = async () => {
    let currentDate = dayjs(results[0].date);
    let newDate = currentDate.add(1, "day").format("YYYY-MM-DD");
    const res = await fetch(process.env.apiUrl + "/api/daily?date=" + newDate);
    const json = await res.json();

    setResults(json);
  };

  const update = async (activity: Activity) => {
    const res = await fetch(process.env.apiUrl + "/api/daily", {
      method: "post",
      body: JSON.stringify(activity),
    });
  };

  const handleToggle = (newValue: Activity) => () => {
    let newArray = [...results];

    for (let index = 0; index < newArray.length; index++) {
      if (newArray[index].type === newValue.type) {
        newArray[index].isChecked = !!!newArray[index].isChecked;
        update(newArray[index]);
        setResults(newArray);
      }
    }
  };

  return (
    <>
      <Layout>
        <main className={classes.root}>
          <div className="flex text-center">
            <div className="w-1/3 bg-gray-200 p-4">
              <button onClick={getDataForPreviousDay}>Previous Day</button>
            </div>
            <div className="w-1/3 p-4">
              {dayjs(results[0].date).format("MM/DD/YYYY")}
            </div>
            <div className="w-1/3 bg-gray-200 p-4">
              <button onClick={getDataForNextDay}>Next Day</button>
            </div>
          </div>

          <List className={classes.root}>
            {results.map((value: Activity) => {
              const labelId = `checkbox-list-label-${value}`;

              return (
                <ListItem
                  key={value.type}
                  role={undefined}
                  dense
                  button
                  onClick={handleToggle(value)}
                >
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={value.isChecked}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ "aria-labelledby": labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText id={labelId} primary={`${value.text}`} />
                </ListItem>
              );
            })}
          </List>
        </main>
      </Layout>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const today = dayjs(new Date()).format("YYYY-MM-DD");
  const res = await fetch(process.env.apiUrl + "/api/daily?date=" + today);

  const json = await res.json();
  return {
    props: {
      data: json,
    },
  };
}
