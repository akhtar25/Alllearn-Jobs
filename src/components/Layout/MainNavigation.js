import { useSelector } from "react-redux";
import img from "../assets/alllearnGreenLogo.png";
import MainMenu from "./MainMenu";
import classes from "./MainNavigation.module.css";
// import MenuIcon from "@material-ui/icons/Menu";
import Sidebar from "./Sidebar";
import { NavLink } from "react-router-dom";
// import { Row, Container, Col } from "react-bootstrap";

const MainNavigation = () => {
  // const { isAuth } = useSelector((state) => state.login);
  const isToken = !!localStorage.getItem("token");
  const { school_logo, school_name } = useSelector((state) => state.user.user);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        {school_logo ? (
          <img src={school_logo} alt="school logo" width="150px" />
        ) : (
          <img src={img} alt="school logo" width="150px" />
        )}
        {school_name && <span className={classes.schName}>{school_name}</span>}
      </div>
      <div className={classes.menu}>
        <NavLink to="/" className={classes.linkBtnHome}>
          Home
        </NavLink>
        {isToken ? <Sidebar /> : ""}

        <MainMenu />
      </div>
    </header>
  );
};

export default MainNavigation;
