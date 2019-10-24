import React from 'react';
import styles from './Sidebar.module.scss';

const Sidebar = ({ isAuth }) => {
    return (
        <div className={styles.sidebar}>
            <ul className={styles.sidebar_links}>
                <li>Home</li>
                <li>Messages</li>
                <li>Setting</li>

                {isAuth && <button>new</button>}
            </ul>
        </div>
    )
}

export default Sidebar;