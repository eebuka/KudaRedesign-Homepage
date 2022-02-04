import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Frame6 from "./components/Frame6";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|frame-6)">
          <Frame6 {...frame6Data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const frame6Data = {
    wereTheBankOfTheFree: "We’re the bank of the free",
    personalBusinessCompanyHelp: "Personal           Business               Company               Help",
    getKuda1: "Get Kuda",
    a11: "/img/a1-1@1x.png",
    a21: "/img/a2-1@1x.png",
    a41: "/img/a4-1@1x.png",
    a31: "/img/a3-1@1x.png",
    wereHereToHelpY: "We’re here to help you get the best out of your money, no strings attached. Welcome to your freedom!",
    getKuda2: "Get Kuda",
    group249: "/img/kuda-bank-logo-1@2x.png",
};

