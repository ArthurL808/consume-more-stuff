import React, { useState, Fragment } from 'react';
import styles from './LoginForm.module.scss';
import { animated, useSpring } from 'react-spring';


const LoginForm = ({ setAuth, setLogin }) => {
    const [newUser, setNewUser] = useState(false);
    const [credentials, setCredentials] = useState({})


    function handleSubmit(event) {
        event.preventDefault();
        console.log(JSON.stringify(credentials))
        setAuth(true);
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
        <animated.div className={styles.login_form} style={fade}>
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
                    <input type="submit" value={newUser ? 'create account' : 'sign in'} className={styles.submit} onClick={() => setLogin(false)} />
                    <span>{newUser ? 'sign in' : 'new user?'}
                        <button onClick={() => setNewUser(!newUser)}>
                            {newUser ? 'go back to sign in' : 'sign up'}
                        </button>
                    </span>
                </div>
            </form>
        </animated.div>
    )
}

export default LoginForm;