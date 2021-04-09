import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { InputLabel, NativeSelect } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
var store=require('store');
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function Home() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedMon: true,
    checkedTue: true,
    checkedWed: true,
    checkedThu: true,
    checkedFri: true,
    checkedSat: true,
    checkedSun: true,
  });
  const [startDate, setStartDate] = useState("");
  const [repeatType, setRepeatType] = useState("None");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [value, setValue] = useState(
    store.get("myValueInLocalStorage") || []
  );
  const handleCheckChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const handleDateChange = (event) => {
    setStartDate(event.target.value);
  };
  const handleRepeatType = (event) => {
    const data = event.target.value;
    setRepeatType(data);
  };
  const handleStartTime = (event) => {
    const data = event.target.value;
    setStartTime(data);
    console.log(data);
  };
  const handleEndTime = (event) => {
    const data = event.target.value;
    setEndTime(data);
    console.log(data);
  };
  const handleSubmit = (event) => {
    var tempVar = {};
    tempVar["Start Date"] = startDate;
    tempVar["Repeat Type"] = repeatType;
    tempVar["Shift"] = "Morning Shift - 5am to 9am";
    tempVar["Start Time"] = startTime;
    tempVar["End Time"] = endTime;
    var tempArr = [];
    if (state.checkedMon) {
      tempArr.push("Monday");
    }
    if (state.checkedTue) {
      tempArr.push("Tuesday");
    }
    if (state.checkedWed) {
      tempArr.push("Wednesday");
    }
    if (state.checkedThu) {
      tempArr.push("Thursday");
    }
    if (state.checkedFri) {
      tempArr.push("Friday");
    }
    if (state.checkedSat) {
      tempArr.push("Saturday");
    }
    if (state.checkedSun) {
      tempArr.push("Sunday");
    }
    tempVar["Days of the Week"] = tempArr;
    var pushToObject = value;
    
      // JSON.parse(pushToObject);
      pushToObject.push(tempVar);
      setValue(pushToObject);
    console.log(value);
    store.set("myValueInLocalStorage", value);
  };
  useEffect(() => {
    // Update the document title using the browser API
  });
  return (
    <React.Fragment>
      <Container fixed>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
            <div>
              <b>Select Start date and Shift times</b>
            </div>
          </Grid>
          <Grid container item xs={12} spacing={3}>
            <div>Each row represents a shift</div>
          </Grid>
          <Grid container item xs={12} spacing={3}>
            <form className={classes.container} noValidate>
              <div>
                <b>Select Start date</b>
                <TextField
                  id="date"
                  label="Select Start Date"
                  type="date"
                  defaultValue={startDate}
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={handleDateChange}
                />
              </div>
            </form>
          </Grid>
          <Grid container item xs={12} spacing={3}>
            <b>Select Repeat Type</b>
            <InputLabel htmlFor="select"></InputLabel>
            <NativeSelect
              id="select"
              onChange={handleRepeatType}
              default={repeatType}
            >
              <option value={"None"}>None</option>
              <option value={"Daily"}>Daily</option>
              <option value={"Weekly"}>Weekly</option>
            </NativeSelect>
          </Grid>
          <Grid container item xs={12} spacing={3}>
            <b>Select Shift</b>
            <InputLabel htmlFor="select"></InputLabel>
            <NativeSelect id="select">
              <option value="Morning Shift - 5am to 9am">
                Morning Shift - 5am to 9am
              </option>
            </NativeSelect>
          </Grid>
          <Grid container item xs={12} spacing={3}>
            <b>Select Start Time</b>
            <form className={classes.container} noValidate>
              <TextField
                id="time"
                label=""
                type="time"
                defaultValue=""
                className={classes.textField}
                onChange={handleStartTime}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </form>
          </Grid>
          <Grid container item xs={12} spacing={3}>
            <b>Select End Time</b>
            <form className={classes.container} noValidate>
              <TextField
                id="time"
                label=""
                type="time"
                defaultValue=""
                className={classes.textField}
                onChange={handleEndTime}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </form>
          </Grid>
          <Grid container item xs={12} spacing={3}>
            <b>Please select the day of the week</b>
            <FormGroup row>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedMon}
                    onChange={handleCheckChange}
                    name="checkedMon"
                  />
                }
                label="MON"
              />
            </FormGroup>
            <FormGroup row>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedTue}
                    onChange={handleCheckChange}
                    name="checkedTue"
                  />
                }
                label="TUE"
              />
            </FormGroup>
            <FormGroup row>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedWed}
                    onChange={handleCheckChange}
                    name="checkedWed"
                  />
                }
                label="WED"
              />
            </FormGroup>
            <FormGroup row>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedThu}
                    onChange={handleCheckChange}
                    name="checkedThu"
                  />
                }
                label="THU"
              />
            </FormGroup>
            <FormGroup row>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedFri}
                    onChange={handleCheckChange}
                    name="checkedFri"
                  />
                }
                label="FRI"
              />
            </FormGroup>
            <FormGroup row>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedSat}
                    onChange={handleCheckChange}
                    name="checkedSat"
                  />
                }
                label="SAT"
              />
            </FormGroup>
            <FormGroup row>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedSun}
                    onChange={handleCheckChange}
                    name="checkedSun"
                  />
                }
                label="SUN"
              />
            </FormGroup>
          </Grid>
        </Grid>
        <Button variant="contained" color="secondary" onClick={handleSubmit} href="/showSchedule">
          +ADD
        </Button>
      </Container>
    </React.Fragment>
  );
}
