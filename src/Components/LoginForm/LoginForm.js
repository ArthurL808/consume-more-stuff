import React, { useState, Fragment } from 'react';
import styles from './LoginForm.module.scss'

const LoginForm = () => {
    const [newUser, setNewUser] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        // console.log(JSON.stringify(this.state))
    }

    return (
        <div className={styles.login_form}>
            <form onSubmit={handleSubmit}>
                {
                    newUser &&
                    <Fragment>
                        <label>email: </label>
                        <input type="email" placeholder="yo@email.com" />
                    </Fragment>
                }

                <label>username: </label>
                <input type="text" placeholder="cloutPanda5" />
                <label>password: </label>
                <input type="password" placeholder="password" />
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