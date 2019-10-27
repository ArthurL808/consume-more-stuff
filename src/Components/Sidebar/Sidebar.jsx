import React, { Fragment } from 'react';
import styles from './Sidebar.module.scss';
import { Link } from 'react-router-dom'

const Sidebar = ({ isAuth }) => {

    return (
        <div className={styles.sidebar}>
            {!isAuth && <h3>Home Categories</h3>}
            <ul className={styles.sidebar_links}>
                {isAuth ?
                    <Fragment>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/messages">Messages</Link></li>
                        <li>Setting</li>
                        <button><Link to="/new">new</Link></button>
                    </Fragment> :
                    <Fragment>
                        <li><Link to="/software">Software</Link></li>
                        <li><Link to="/hardware">Hardware</Link></li>
                        <li><Link to="/accessories">Accessories</Link></li>
                        <li><Link to="/misc">Misc</Link></li>
                        <button><Link to="/all">ALL</Link></button>
                    </Fragment>
                }
            </ul>
        </div>
    )
}

export default Sidebar;