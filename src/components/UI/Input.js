import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
// import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
// import DirectionsIcon from "@material-ui/icons/Directions";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    fontSize: 14,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function Input(props) {
  const classes = useStyles();
  const onChangeHandler = (event) => {
    // console.log("onChangeHandler");
    props.setSearchValue(event.target.value);
    props.searchHandler(event.target.value);
  };
  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder={props.placeHolder}
        inputProps={{ "aria-label": "search google maps" }}
        onChange={onChangeHandler}
      />
      <IconButton
        type="button"
        className={classes.iconButton}
        aria-label="search"
        disabled
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
