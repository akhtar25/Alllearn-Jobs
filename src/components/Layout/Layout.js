import { Fragment } from "react";
import Footer from "./Footer";
import MainNavigation from "./MainNavigation";

const Layout = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <main className="code">{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
