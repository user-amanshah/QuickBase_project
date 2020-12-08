import React from "react";
import Button from "../Button/button";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchFormValues, deleteFormValues } from "../../actions/index";
import { saveFormValues } from "../../saveData/index";
import history from "../history";

class FieldShow extends React.Component {
  componentDidMount() {
    this.props.fetchFormValues();
  }

  showModal() {
    history.push("/preview");
  }
  renderList() {
    return this.props.fieldValue.Choices.map((i) => {
      let x = i.slice(0, 40);
      let y = i.slice(41, i.length);
      if (i.length < 41) {
        return (
          <div className="item">
            {i}
            <i
              onClick={() => this.props.deleteFormValues(i)}
              className="right floated trash alternate icon"
            />
          </div>
        );
      } else {
        return (
          <div className="item">
            <font>{x}</font>
            <font color="red">{y}</font>
            <i
              onClick={() => this.props.deleteFormValues(i)}
              className="right floated trash alternate icon"
            />
          </div>
        );
      }
    });
  }
  render() {
    return (
      <div>
        <h4>Choices</h4>
        <div className="ui celled list">{this.renderList()}</div>
        <div className="ui bottom attached buttons">
          <button
            className="ui positive button"
            onClick={() => saveFormValues(this.props.fieldValue)}
          >
            Save
          </button>
          <div className="or"></div>
          <Link className="ui red button" to="/">
            Drop
          </Link>
        </div>
        <div className="ui bottom attached buttons">
          <Button
            type=""
            handleClick={() => this.showModal()}
            icon={<i className="eye icon" />}
            label="Preview"
          />{" "}
        </div>
      </div>
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
  deleteFormValues,
})(FieldShow);
