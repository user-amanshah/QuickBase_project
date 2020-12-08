import React from "react";
import FieldBuilder from "../components/Forms/FieldBuilder";
import FieldShow from "../components/Forms/FieldShow";
import SecondFieldBuilder from "./Forms/SecondFieldBuilder";

const App = () => {
  return (
    <div className="ui container">
      <div className="ui grid">
        <div className="ui two column padded grid">
          <div className="column">
            <FieldBuilder />
            {/* <SecondFieldBuilder /> */}
          </div>
          <div className="column">
            <div className="ui segment">
              <div className="ui fluid selection dropdown">
                <input type="hidden" name="dropdown" />
                <i className="dropdown icon" />
                <div className="default text">Arrange Alphabetically</div>
                <div className="menu">
                  <div className="item" data-value="dropdown1">
                    Arrange
                  </div>
                </div>
              </div>
            </div>
            <div className="ui segment">
              <FieldShow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
