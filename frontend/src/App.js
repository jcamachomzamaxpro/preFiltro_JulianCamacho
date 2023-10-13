import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./App.css";
import { Home } from "./Components/Home";

function App() {

  return (
    <Router>
      <Route exact path="/" component={Home}></Route>
    </Router>
  );
}

export default App;
