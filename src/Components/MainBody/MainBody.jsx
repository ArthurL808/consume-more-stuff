import React from "react";
import styles from "./MainBody.module.scss";

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
