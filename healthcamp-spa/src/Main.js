import React, { Component } from "react";
import {
  Route,
  HashRouter
} from "react-router-dom";
import Demographics from './Demographics';
import Health_Vitals from "./Health_Vitals";
import Reports from "./Reports"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation_Bar from './Navigation_Bar'; 
import Switch from "react-bootstrap/esm/Switch";
 
class Main extends Component {
  render() {
    return (
        <React.Fragment>
            <HashRouter>
            <Navigation_Bar />
            <Switch>
                <Route exact path = "/" component = { Demographics }/>
                <Route path = "/Health_Vitals" component = { Health_Vitals }/>
                <Route path = "/Reports" component = { Reports }/>
            </Switch>
            </HashRouter>
        </React.Fragment>
    );
  }
}
 
export default Main;