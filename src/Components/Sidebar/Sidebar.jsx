import React, { Fragment } from 'react';
import styles from './Sidebar.module.scss';

const Sidebar = ({ isAuth }) => {
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
                        <li>- Vehicles</li>
                        <li>- Computers</li>
                        <li>- Appliances</li>
                        <li>- Furniture</li>
                        <button>ALL</button>
                    </Fragment>
                }


            </ul>
        </div>
    )
}

export default Sidebar;