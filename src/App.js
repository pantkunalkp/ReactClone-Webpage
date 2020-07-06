import React from "react";
import Navbar from "./component/navbar/Navbar.jsx";
import Jumbotron from "./component/jumbotron/Jumbotron";
import Details from "./component/details/Details";
import GettingStarted from "./component/extra/GettingStarted";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        {/* <Navbar />
      <Jumbotron />
      <Details /> */}
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Jumbotron />
            <Details />
          </Route>
          <Route exact path="/AboutUs">
            <Navbar />
            <Details />
          </Route>
          <Route exact path="/GettingStarted">
            <Navbar />
            <GettingStarted />
          </Route>
          <Route exact path="/Components">
            <Navbar />
            <GettingStarted />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
