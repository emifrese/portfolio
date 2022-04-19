import { Fragment } from "react";
import MainNavigation from "./MainNavigation";

const Layout = (props) => {
  return (
    <Fragment>
        <MainNavigation />
      <main className="text-gray-400 bg-gray-900 body-font">{props.children}</main>
    </Fragment>
  );
};

export default Layout;
