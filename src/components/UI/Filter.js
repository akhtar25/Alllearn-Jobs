import { Fragment } from "react";
import Button from "./Button";
import classes from "./Filter.module.css";
import RadioButtonsGroup from "./RadioButtonsGroup";

const Filter = (props) => {
  const radioBtnHandler = (data, type) => {
    if (type === "Job Terms") {
      props.setSelectedJobTerms(data);
    }
    if (type === "Job Type") {
      props.setSelectedJobType(data);
    }
    // if (type === "City") {
    // }
  };

  return (
    <Fragment>
      <h3 className={classes.header}>Filters</h3>
      <div className={classes.filterBox}>
        <div className={classes.radioBtn}>
          <RadioButtonsGroup
            title="Job Terms"
            option1="All"
            option2="Long Term/Permanent"
            option3="Short Term/ Volunteer"
            onSubmitRadioBtn={radioBtnHandler}
          />
        </div>
        <div className={classes.radioBtn}>
          <RadioButtonsGroup
            title="Job Type"
            option1="All"
            option2="Full Time"
            option3="Part Time"
            onSubmitRadioBtn={radioBtnHandler}
          />
        </div>
        {/* <div className={classes.radioBtn}>
          <RadioButtonsGroup
            title="City"
            option1="All"
            onSubmitRadioBtn={radioBtnHandler}
          />
        </div> */}
      </div>
      <div className={classes.filterBtn}>
        <Button onclick={props.filterValues} name="filter list" />
      </div>
    </Fragment>
  );
};

export default Filter;
