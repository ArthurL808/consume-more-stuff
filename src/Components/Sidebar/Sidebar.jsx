import React, { Fragment } from 'react';
import styles from './Sidebar.module.scss';
import { Link } from 'react-router-dom';

const Sidebar = ({ isAuth }) => {


    return (
        <div className={styles.sidebar}>
            {!isAuth && <h3>Home</h3>}

            <ul className={styles.sidebar_links}>
                {isAuth ?
                    <Fragment>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/messages">Messages</Link></li>
                        <li><Link to="/settings">Setting</Link></li>
                        <button><Link to="/new">new</Link></button>
                    </Fragment> :
                    <Fragment>
                        {/* Replace these with the real routes later */}
                        <li><Link to="/dodge">Software</Link></li>
                        <li><Link to="/ford">Hardware</Link></li>
                        <li><Link to="/toyota">Accessories</Link></li>
                        <li><Link to="/misc">Misc</Link></li>
                        <button><Link to="/all">ALL</Link></button>
                    </Fragment>
                }
            </ul>
        </div>
    )
}

export default Sidebar;