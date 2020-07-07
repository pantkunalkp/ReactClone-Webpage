import React from "react";
import Navbar from "./component/navbar/Navbar";
import Jumbotron from "./component/jumbotron/Jumbotron";
import Details from "./component/details/Details";
import Footer from "./component/footer/Footer";
import PageNotFound from "./component/pageNotFound/PageNotFound";
import LinearBuffer from "./component/backdrop/Backdropp"
import SlowNet from './component/slowNet/SlowNet'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
      <Switch>
        <Route exact path = "/">
        <Navbar />
        <Jumbotron />
        <Details />
        <Footer />
        </Route>

        <Route exact path="/themes">
        <Navbar />
        <PageNotFound />
        </Route>
        <Route exact path = "/plugins">
        <Navbar />
        <LinearBuffer />
        <SlowNet />
        </Route>
        <Route exact path = "/mobile">
          <Navbar />
          <LinearBuffer />
          <PageNotFound />
        </Route>
        <Route exact path ="/support">
          <Navbar />
          <PageNotFound />
        </Route>
        <Route exact path = "/get-involved">
          <Navbar />
          <LinearBuffer />
          <SlowNet />
        </Route>
        <Route exact path = "/hosting">
          <Navbar />
          <PageNotFound />
        </Route>
      </Switch>
        
      </div>
    </Router>
  );
};

export default App;
