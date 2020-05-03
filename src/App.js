import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import { HashRouter} from "react-router-dom";

const App = () => {
  return (
    <HashRouter>
      <Navigation />
    </HashRouter>
  );
};

export default App;
