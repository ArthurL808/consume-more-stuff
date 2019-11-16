import React, { useState, Fragment } from "react";
import styles from "./LoginForm.module.scss";
import { animated, useSpring } from "react-spring";
import { login, register } from "../../actions";
import { connect } from "react-redux";

const LoginForm = ({ setAuth, setLogin, isAuth, ...props }) => {
  const [newUser, setNewUser] = useState(false);
  const [credentials, setCredentials] = useState({});

  const { login, register } = props

  function handleSubmit(event) {
    event.preventDefault();
    if (newUser) {
      register(credentials);
      setNewUser(false);
    } else {
      login(credentials);
      setAuth(true);
      setLogin(false);
    }
  }

  function handleChange(e) {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  const fade = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  });

  return (
    <animated.div className={styles.login_form} style={fade}>
      <form onSubmit={handleSubmit}>
        {newUser && (
          <Fragment>
            <input
              type="name"
              placeholder="cloutPanda5"
              name="name"
              onChange={handleChange}
            />
          </Fragment>
        )}

        <input
          type="email"
          placeholder="YourEmail@"
          name="email"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
        />
        <div className={styles.btn_collection}>
          <input
            type="submit"
            value={newUser ? "create account" : "sign in"}
            className={styles.submit}
          />
          <span>
            {newUser ? "already a user?" : "new user?"}
            <div
              className={styles.signup_btn}
              onClick={() => setNewUser(!newUser)}
            >
              {newUser ? "sign in" : "sign up"}
            </div>
          </span>
        </div>
      </form>
    </animated.div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    login: user => {
      dispatch(login(user));
    },
    register: user => {
      dispatch(register(user));
    }
  };
};

export default connect(null, mapDispatchToProps)(LoginForm);
