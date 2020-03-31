import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./layout/Header";
import Dashboard from "./contacts/Dashboard";
import { Provider } from "react-redux";
import store from "../store";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <div className="container">
            <Dashboard />
          </div>
        </div>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
