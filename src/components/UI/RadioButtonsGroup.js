import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import classes from "./Filter.module.css";

export default function RadioButtonsGroup(props) {
  const [value, setValue] = React.useState(props.option1);

  const handleChange = (event) => {
    console.log(event.target.value);
    setValue(event.target.value);
    props.onSubmitRadioBtn(event.target.value, event.target.name);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{props.title}</FormLabel>
      <RadioGroup
        className={classes.btnColor}
        aria-label="Jobs Filter"
        name={props.title}
        value={value}
        onChange={handleChange}
        id={props.title}
      >
        {props.option1 && (
          <FormControlLabel
            value={props.option1}
            control={<Radio />}
            label={props.option1}
          />
        )}
        {props.option2 && (
          <FormControlLabel
            value={props.option2}
            control={<Radio />}
            label={props.option2}
          />
        )}
        {props.option3 && (
          <FormControlLabel
            value={props.option3}
            control={<Radio />}
            label={props.option3}
          />
        )}
      </RadioGroup>
    </FormControl>
  );
}
