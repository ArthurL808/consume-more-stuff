import React from "react";
import styles from "./MainBody.module.scss";
import Auth from "../Auth";
// IMPORT ALL BODY COMPOENENTS HERE

const MainBody = ({ isAuth }) => {
  return (
    <div className={styles.main_body}>
      {/*ALL CONTENT FOR THE BODY SECTION GOES HERE*/}
      {isAuth ? <Auth></Auth> : <h1>Logged Out</h1>}
    </div>
  );
};

export default MainBody;
