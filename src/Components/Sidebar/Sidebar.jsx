import React, { Fragment } from 'react';
import styles from './Sidebar.module.scss';
import { Link } from 'react-router-dom'

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
                        <li><Link to="/vehicles">Vehicles</Link></li>
                        <li><Link to="/computers">Computers</Link></li>
                        <li><Link to="/appliances">Appliances</Link></li>
                        <li><Link to="/furniture">Furniture</Link></li>
                        <button><Link to="/all">ALL</Link></button>
                    </Fragment>
                }


            </ul>
        </div>
    )
}

export default Sidebar;