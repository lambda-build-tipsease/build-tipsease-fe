import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers'



ReactDOM.render(
    <Provider store={createStore(reducers)}>
  <Router>
    <App />
  </Router>
  </Provider>,
  document.getElementById("root")
);
