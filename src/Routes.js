import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main";
import RoomsDetailPage from "./Pages/RoomsDetailPage";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import HostAdmin from "./Pages/HostAdmin";
import "./Styles/Common.scss";

import SignUpDetail from "./Components/SignUpDetail";
import ListPage from "./Pages/ListPage/ListPage";
import HostRegiste from "./Pages/HostRegiste";
import HostRegisteStep2 from "./Pages/HostRegiste/HostRegisteStep2/";
import GuestDetail from "./Pages/GuestDetail";
import "./Styles/Common.scss";
export class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/list" component={ListPage} />
          <Route exact path="/RoomsDetailPage" component={RoomsDetailPage} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/SignUpDetail" component={SignUpDetail} />
          <Route exact path="/HostRegiste" component={HostRegiste} />
          <Route exact path="/HostRegiste/2" component={HostRegisteStep2} />
          <Route exact path="/GuestDetail" component={GuestDetail} />
          <Route exact path="/HostAdmin" component={HostAdmin} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
