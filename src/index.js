import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from './App'
import registerServiceworker from './registerServiceworker';
import 'tachyons';




ReactDOM.render(
  <App />
  , document.getElementById("root"));
registerServiceworker();