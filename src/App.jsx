import React from "react";


import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

import './App.scss';
import Footer from "./components/Footer/Footer";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <div className="wrapper">
          <Header/>
          <Main/>
          <Footer/>
          <Route path='1'/>
          <Route path='2'/>
          <Route path='3'/>
          <Route path='4'/>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
