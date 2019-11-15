import React, { useState, Fragment } from 'react';
import styles from './LoginForm.module.scss';
import { animated, useSpring } from 'react-spring';


const LoginForm = ({ setAuth, setLogin, isAuth }) => {
    const [newUser, setNewUser] = useState(false);
    const [credentials, setCredentials] = useState({})


    function handleSubmit(event) {
        event.preventDefault();
        console.log(JSON.stringify(credentials))
        setAuth(true);
        setLogin(false);
    }

    function handleChange(e) {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const fade = useSpring({
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        }
    })

    return (
        <animated.div style={fade} className={styles.login_wrapper}>
            <div className={styles.login_form}>
                <form onSubmit={handleSubmit}>
                    {
                        newUser &&
                        <Fragment>

                            <input type="email" placeholder="yo@email.com" name="email" onChange={handleChange} />
                        </Fragment>
                    }

                    <input type="text" placeholder="cloutPanda5" name="email" onChange={handleChange} />

                    <input type="password" name="password" placeholder="password" onChange={handleChange} />
                    <div className={styles.btn_collection}>
                        <input type="submit" value={newUser ? 'create account' : 'sign in'} className={styles.submit} />
                        <span>{newUser ? 'already a user?' : 'new user?'}
                            <div className={styles.signup_btn} onClick={() => setNewUser(!newUser)}>
                                {newUser ? 'sign in' : 'sign up'}
                            </div>
                        </span>
                    </div>
                </form>
            </div>
        </animated.div>

    )
}

export default LoginForm;