import React from 'react';
import styles from './Header.module.scss'

const Header = ({ isAuth, setAuth }) => {
    return (
        <header>
            <div className={styles.logo}>logo</div>

            <div className={styles.right}>
                {isAuth && <span>Hello, User</span>}

                <button onClick={() => setAuth(!isAuth)} className={styles.log_btn}>
                    {isAuth ?
                        <p>logout</p> : <p>login</p>
                    }
                </button>
            </div>
        </header>
    )
}

export default Header