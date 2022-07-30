import { Fragment } from "react";

import MainBanner from "./main-banner";

function Banner(props) {
  return (
    <Fragment>
      <MainBanner />
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Banner;
