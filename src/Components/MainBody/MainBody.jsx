import React from "react";
import styles from "./MainBody.module.scss";
// IMPORT ALL BODY COMPOENENTS HERE
import UnAuth from "../UnAuth";

import Routes from "../../Routes";

const MainBody = () => {
  return (
    <div className={styles.main_body}>
      {/*ALL CONTENT FOR THE BODY SECTION GOES HERE*/}
      <Routes />
    </div>
  );
};

export default MainBody;
