import React, { useState, Fragment } from 'react';
import styles from './LoginForm.module.scss'

const LoginForm = ({ setAuth, setLogin }) => {
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

    return (
        <div className={styles.login_form}>
            <form onSubmit={handleSubmit}>
                {
                    newUser &&
                    <Fragment>
                        <label>email: </label>
                        <input type="email" placeholder="yo@email.com" name="email" onChange={handleChange} />
                    </Fragment>
                }

                <label>username: </label>
                <input type="text" placeholder="cloutPanda5" name="email" onChange={handleChange} />
                <label>password: </label>
                <input type="password" name="password" placeholder="password" onChange={handleChange} />
                <div>
                    <input type="submit" value={newUser ? 'create account' : 'sign in'} />
                    <span>{newUser ? 'sign in' : 'new user?'}
                        <button onClick={() => setNewUser(!newUser)}>
                            {newUser ? 'go back to sign in' : 'sign in'}
                        </button>
                    </span>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;