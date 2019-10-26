import React from "react";
import styles from "./MainBody.module.scss";
import Auth from "../Auth";
// IMPORT ALL BODY COMPOENENTS HERE
import UnAuth from "../UnAuth";

const MainBody = ({ isAuth, view }) => {
  return (
    <div className={styles.main_body}>
      {/*ALL CONTENT FOR THE BODY SECTION GOES HERE*/}
      {isAuth ? <Auth /> : <UnAuth view={view} />}
    </div>
  );
};

export default MainBody;
