import React from "react";
import styles from "./MainBody.module.scss";
// IMPORT ALL BODY COMPOENENTS HERE

const MainBody = ({ isAuth }) => {
  return (
    <div className={styles.main_body}>
      {/*ALL CONTENT FOR THE BODY SECTION GOES HERE*/}
      {isAuth ? <h1>Logged In</h1> : <UnAuth view={view} />}
    </div>
  );
};

export default MainBody;
