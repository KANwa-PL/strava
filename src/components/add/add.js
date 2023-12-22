import TextField from "@mui/material/TextField";
import "./add.scss";
import { useState } from "react";
import { MenuItem } from "@mui/base";
import { Select, InputLabel, FormControl, List } from "@mui/material";
import sportTypeIcons from "../sportTypeIcons";

const initialActivity = {
  activity_name: "",
  type: "Run",
  sport_type: "",
  start_date_local: "2013-10-20T19:20:30+01:00",
  elapsed_time: 0,
  description: "",
  distance: 0.0,
  trainer: 0,
  commute: 0,
};

const activityTypes = ["Run", "WeightTraining", "Ride", "Other"];

export const Add = () => {
  const [newActivity, setNewActivity] = useState(initialActivity);

  const handleChange = (event) => {
    console.log("Value: " + event.target.value);
    console.log("Event target name: " + event.target.getAttribute("name"));
  };

  const menuItems = activityTypes.map((activity) => {
    return (
      <MenuItem
        key={activity}
        onClick={handleChange}
        value={activity.name}
        className="menuListItem"
      >
        {activity + " "}
        {sportTypeIcons(activity)}
      </MenuItem>
    );
  });

  return (
    <div className="container">
      <div className="top">
        <p>CUSTOM ACTIVITY</p>
      </div>
      <div className="bottom">
        <TextField
          name="activity_name"
          id="name"
          label="Activity Name"
          className="formText"
          onChange={handleChange}
        />
        <TextField
          name="start_date_local"
          id="start_date_local"
          label="Activity Start Date"
          className="formText"
        />
        <TextField
          name="elapsed_time"
          id="elapsed_time"
          label="Elapsed Time"
          className="formText"
        />
        <TextField
          name="description"
          id="description"
          label="Activity Description"
          className="formText"
        />
        <TextField
          name="distance"
          id="distance"
          label="Distance"
          className="formText"
        />
        <TextField
          name="average_hr"
          id="average_hr"
          label="Average Heartrate"
          className="formText"
        />
        <FormControl fullWidth>
          <InputLabel shrink id="type">
            Type
          </InputLabel>
          <Select
            notched
            labelId="type"
            name="type"
            label="Type"
            onChange={handleChange}
          >
            <List>{menuItems}</List>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};
