import React, { Fragment } from 'react';
import styles from './Sidebar.module.scss';

const Sidebar = ({ isAuth, view, setView }) => {
    return (
        <div className={styles.sidebar}>
            {!isAuth && <h3>Home Categories</h3>}
            <ul className={styles.sidebar_links}>
                {isAuth ?
                    <Fragment>
                        <li>Home</li>
                        <li>Messages</li>
                        <li>Setting</li>
                        <button>new</button>
                    </Fragment> :
                    <Fragment>
                        <li onClick={(e) => setView(e.target.textContent)}>Vehicles</li>
                        <li onClick={(e) => setView(e.target.textContent)}>Computers</li>
                        <li onClick={(e) => setView(e.target.textContent)}>Appliances</li>
                        <li onClick={(e) => setView(e.target.textContent)}>Furniture</li>
                        <button>ALL</button>
                    </Fragment>
                }


            </ul>
        </div>
    )
}

export default Sidebar;