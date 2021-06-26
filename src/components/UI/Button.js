import { Fragment } from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <Fragment>
      <button onClick={props.onclick} className={classes.btn}>
        {props.name}
      </button>
    </Fragment>
  );
};

export default Button;
