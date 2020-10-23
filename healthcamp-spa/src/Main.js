import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Demographics from "./Demographics";

 
class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <h1>Health Camp SPA</h1>
          <ul className="header">
            {/* <li><NavLink to = "/">Demographics</NavLink></li> */}
            <li><a href="/"> Demographics</a></li>
            {/* <li><NavLink to = "/health_vitals.html">Health Vitals</NavLink></li>
            <li><NavLink to = "/reports.html">Reports</NavLink></li> */}
          </ul>
          <div className="content">
            <Route exact path = "/" component = {Demographics}/>
            {/* <Route path = "/health_vitals" component = {HealthVitals}/>
            <Route path = "/reports" component = {Reports}/> */}
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;