import { Fragment } from "react";
import classes from "./Loader.module.css";

const Loader = () => {
  return (
    <Fragment>
      <div className={classes.loader}></div>
    </Fragment>
  );
};

export default Loader;
