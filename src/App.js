import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./home";
import Schedule from "./Schedules";

export default function App(){
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/showSchedule" component={Schedule} />
            </Switch>
        </Router>
    );
}