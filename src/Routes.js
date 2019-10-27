import React from 'react';
import UnAuthAll from './Components/UnAuth/UnAuthAll';
import UnAuthSoftware from './Components/UnAuth/UnAuthSoftware';
import UnAuthAccessories from './Components/UnAuth/UnAuthAccessories';
import UnAuthMisc from './Components/UnAuth/UnAuthMisc';
import UnAuthHardware from './Components/UnAuth/UnAuthHardware';
import AuthNewItem from './Components/Auth/AuthNewItem';
import AuthHome from './Components/Auth/AuthHome';
import AuthMessages from './Components/Auth/AuthMessages';
import AuthSettings from './Components/Auth/AuthSettings';

export const routes = [
    {
        path: '/all',
        exact: true,
        main: () => <UnAuthAll />
    },
    {
        path: '/software',
        main: () => <UnAuthSoftware />
    },
    {
        path: '/hardware',
        main: () => <UnAuthHardware />
    },
    {
        path: '/accessories',
        main: () => <UnAuthAccessories />
    },
    {
        path: '/misc',
        main: () => <UnAuthMisc />
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
