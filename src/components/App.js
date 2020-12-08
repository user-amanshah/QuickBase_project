import React from "react";
import { Router, Route } from "react-router-dom";
import Home from "./Home";
import FormBuilder from "./FormBuilder";
import Header from "./Header";
import Modal from "./Modal";
import history from "./history";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <Router history={history}>
          <div>
            <Header />
            <Route path="/" exact component={Home} />
            <Route path="/QuickBase" exact component={Home} />
            <Route path="/form" exact component={FormBuilder} />
            <Route path="/preview" exact component={Modal} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
