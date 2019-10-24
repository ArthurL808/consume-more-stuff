import React from 'react';
import styles from './Header.module.scss'

const Header = () => {
    return (
        <header>
            <div className={styles.logo}>logo</div>

            <div className={styles.right}>
                <span>Hello, User</span>
                <button className={styles.log_btn}>logout</button>
            </div>
        </header>
    )
}

export default Header