import React from 'react';
import styles from './UnAuth.module.scss'
import { Route } from 'react-router-dom'
import { routes } from '../../Routes';

const UnAuth = () => {
    return (
        <div className={styles.container}>
            {routes.map(route => (
                <Route
                    key={route.path}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                />
            ))}
        </div>
    )
}

export default UnAuth;