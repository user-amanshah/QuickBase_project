import React from "react";

function Button(props) {
  const className = "ui  button";

  return (
    <button className={className} onClick={props.handleClick}>
      {props.icon && props.icon} {props.label}
    </button>
  );
}

Button.defaultProps = {
  type: "ui button",
};

export default Button;
