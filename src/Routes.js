import React from 'react';
import AuthNewItem from './Components/Auth/AuthNewItem';
import AuthHome from './Components/Auth/AuthHome';
import AuthMessages from './Components/Auth/AuthMessages';
import AuthSettings from './Components/Auth/AuthSettings';

export const routes = [
    {
        path: '/all',
        exact: true,
    },
    {
        path: '/software'
    },
    {
        path: '/hardware'
    },
    {
        path: '/accessories'
    },
    {
        path: '/misc'
    },
    {
        path: '/home',
        main: () => <AuthHome />
    },
    {
        path: '/new',
        main: () => <AuthNewItem />
    },
    {
        path: '/messages',
        main: () => <AuthMessages />
    },
    {
        path: '/settings',
        main: () => <AuthSettings />
    }
]
