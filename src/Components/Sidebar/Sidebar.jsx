import React, { Fragment } from "react";
import styles from "./Sidebar.module.scss";
import { Link } from "react-router-dom";

const Sidebar = ({ isAuth }) => {
  return (
    <div className={styles.sidebar}>
      {!isAuth && <Link to="/" className={styles.home_btn}>Home</Link>}

      <ul className={styles.sidebar_links}>
        {isAuth ? (
          <Fragment>
            <li>
              <Link to="/all">Home</Link>
            </li>
            <li>
              <Link to="/messages">Messages</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
            <button>
              <Link to="/new">new</Link>
            </button>
          </Fragment>
        ) : (
            <Fragment>
              {/* Replace these with the real routes later */}
              <li>
                <Link to="/software">Software</Link>
              </li>
              <li>
                <Link to="/hardware">Hardware</Link>
              </li>
              <li>
                <Link to="/accessories">Accessories</Link>
              </li>
              <li>
                <Link to="/miscellaneous">Misc</Link>
              </li>
              <button>
                <Link to="/">ALL</Link>
              </button>
            </Fragment>
          )}
      </ul>
    </div>
  );
};

export default Sidebar;
