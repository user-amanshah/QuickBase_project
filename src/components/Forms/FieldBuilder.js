import React from "react";
import { Field, reduxForm } from "redux-form";
import { postFormValues, clearFormValues } from "../../actions/index";
import { connect } from "react-redux";

class FieldBuilder extends React.Component {

  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }
  renderInput = ({ input, fieldLabel, autoComplete, meta }) => {
    const errorClassName = `field ${
      meta.error && meta.touched ? "error" : " "
    }`;
    return (
      <div className={errorClassName}>
        <label> {fieldLabel}</label>
        <input {...input} autoComplete={autoComplete} />
        {this.renderError(meta)}
      </div>
    );
  };
  onSubmit = (formValues) => {
    this.props.postFormValues(formValues);
  };
  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <div className="ui segment">
          <Field
            name="label"
            component={this.renderInput}
            fieldLabel="Label"
            autoComplete="off"
          />
        </div>
        <div className="ui segment">
          <div className="two fields">
            <div className="field">
              <h5>Type</h5>
            </div>
            <div className="field">
              <Field
                className="ui checkbox"
                name="multiSelect"
                component="input"
                type="checkbox"
              />
              &nbsp; &nbsp;Multi-Select
            </div>
          </div>
        </div>
        <div className="ui segment">
          <Field
            name="defaultChoice"
            component={this.renderInput}
            fieldLabel="Default Choice"
          />
        </div>
        <div className="ui segment">
          <Field
            name="addChoice"
            component={this.renderInput}
            fieldLabel="Add Choice"
          />
          <div className="ui bottom attached buttons">
            <button className="ui positive button" type="submit">
              Add
            </button>
            <div className="or"></div>
            <button
              className="ui red button"
              type="button"
              onClick={() => this.props.clearFormValues()}
            >
              Clear
            </button>
          </div>
        </div>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.label) {
    errors.label = "Label is required";
  }
  if (!formValues.addChoice) {
    errors.addChoice = "Add a choice to add  ";
  }
  return errors;
};


