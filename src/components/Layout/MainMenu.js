import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import classes from "./MainNavigation.module.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Fragment } from "react";
import { userLogout } from "../api/user-api";
import { loginSliceActions } from "../store/login-slice";
import Modal from "../UI/Modal";

function MainMenu() {
  const history = useHistory();
  // const { isAuth } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [openModal, setOpenModal] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogin = () => {
    setAnchorEl(null);
    // history.replace("/login");
    setOpenModal(true);
  };

  const onHideHandle = () => {
    setOpenModal(false);
  };

  const handleReister = () => {
    setAnchorEl(null);
    history.replace("/register");
  };

  const handleLogout = () => {
    console.log("inside handleLogout");
    setAnchorEl(null);
    localStorage.removeItem("token");
    userLogout();
    setOpenModal(false);
    console.log("inside handleLogout");
    dispatch(loginSliceActions.logout());
    history.replace("/");
    window.location.reload();
  };

  const UnauthorizedOption = (
    <Fragment>
      <MenuItem onClick={handleLogin} className={classes.menuItem}>
        {/* <Link to="/login" className={classes.loginBtn}> */}
        Login
        {/* </Link> */}
      </MenuItem>
      <Modal show={openModal} onHide={onHideHandle} />
      <MenuItem onClick={handleReister} className={classes.menuItem}>
        {/* <Link to="/register" className={classes.registerBtn}> */}
        Register
        {/* </Link> */}
      </MenuItem>
    </Fragment>
  );
  const isToken = !!localStorage.getItem("token");
  console.log("isToken", isToken);
  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <AccountCircleIcon className={classes.size} />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {isToken ? (
          <MenuItem className={classes.menuItem} onClick={handleLogout}>
            Logout
          </MenuItem>
        ) : (
          UnauthorizedOption
        )}
      </Menu>
    </div>
  );
}

export default MainMenu;
