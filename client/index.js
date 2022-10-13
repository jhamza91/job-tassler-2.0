import React from "react";
import { render } from "react-dom";
import { BrowserRouter, HashRouter } from "react-router-dom";
import App from './App.jsx';

render(
  <HashRouter >
    <App />
  </HashRouter>,
  document.getElementById('root'),
);