import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main";
import RoomsDetailPage from "./Pages/RoomsDetailPage";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import SignUpDetail from "./Components/SignUpDetail";
import HostRegiste from "./Pages/HostRegiste";
import HostRegisteStep2 from "./Pages/HostRegiste/HostRegisteStep2/";
import "./Styles/Common.scss";

export class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/RoomsDetailPage" component={RoomsDetailPage} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/SignUpDetail" component={SignUpDetail} />
          <Route exact path="/HostRegiste" component={HostRegiste} />
          <Route exact path="/HostRegisteStep2" component={HostRegisteStep2} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
