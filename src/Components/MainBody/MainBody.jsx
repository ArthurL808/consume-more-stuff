import React from "react";
import styles from "./MainBody.module.scss";
// IMPORT ALL BODY COMPOENENTS HERE
import Auth from "../Auth";
import UnAuth from "../UnAuth";

const MainBody = ({ isAuth }) => {
  return (
    <div className={styles.main_body}>
      {/*ALL CONTENT FOR THE BODY SECTION GOES HERE*/}
      {isAuth ? <Auth /> : <UnAuth view={view} />}
    </div>
  );
};

export default MainBody;
