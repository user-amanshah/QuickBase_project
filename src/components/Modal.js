import React, { Component } from "react";
import ReactDOM from "react-dom";
import history from "./history";
import { connect } from "react-redux";
import { fetchFormValues } from "../actions/index";

class Modal extends React.Component {
  componentDidMount() {}
  renderList() {
    return this.props.fieldValue.Choices.map((i) => {
      return (
        <div className="item">
          <div className="ui checkbox">
            <input type="checkbox" />
            <label>{i}</label>
          </div>
        </div>
      );
    });
  }
  render() {
    console.log(this.props.fieldValue);
    return ReactDOM.createPortal(
      <div
        onClick={() => history.push("/form")}
        className="ui dimmer modals visible active"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="ui standard modal visible active"
        >
          <div className="header">Form Preview</div>
          <div className="content">
            <div className="ui horizontal divider">
              Sales Region  Form
            </div>
            <div className="ui  segment">
              <div className="ui two column very relaxed  grid">
                <div className="column">
                  <div className="ui form">
                    <div className="field">
                      Form:<h3>{this.props.fieldValue.label}</h3>
                    </div>
                    <div className="field">
                      Default Value:
                      <h3>{this.props.fieldValue.defaultChoice}</h3>
                    </div>
                    <div className="field">
                      Created On:
                      <h3>{Date()}</h3>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="ui  list">{this.renderList()}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="actions">
            <button
              onClick={() => history.push("/form")}
              className="ui primary button"
            >
              Return
            </button>
          </div>
        </div>
      </div>,
      document.querySelector("#modal")
    );
  }
}
const mapStateToProps = (state) => {
  return {
    fieldValue: state.rootReducer,
  };
};

export default connect(mapStateToProps, {
  fetchFormValues,
})(Modal);
