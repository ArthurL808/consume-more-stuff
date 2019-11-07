import React from 'react';
import styles from './Header.module.scss'

const Header = ({ isAuth, setAuth, setLogin, setSidebarOn, sidebarOn }) => {

    function verifyAuth() {
        if (isAuth) {
            setAuth(false);
            setLogin(false);
        } else {
            setLogin(true);
        }
    }

    return (
        <header>
            <div className={styles.logo}>
                <img src="https://www.badmckinney.dev/static/893e1c51d66ba434dee2809cda645d8a/e8897/brad-and-wife.jpg" alt="brad logo"></img>
            </div>

            <div className={styles.right}>
                {isAuth && <span>Hello, User</span>}

                <button className={styles.toggle_sidebar} onClick={() => setSidebarOn(!sidebarOn)}>
                    {sidebarOn ? 'close' : 'menu'}
                </button>

                <button onClick={verifyAuth} className={styles.log_btn}>
                    {isAuth ?
                        <p>logout</p> : <p>login</p>
                    }
                </button>
            </div>
        </header>
    )
}

export default Header