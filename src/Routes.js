import React from 'react';
import UnAuthAll from './Components/UnAuth/UnAuthAll';
import UnAuthSoftware from './Components/UnAuth/UnAuthSoftware';
import UnAuthAccessories from './Components/UnAuth/UnAuthAccessories';
import UnAuthMisc from './Components/UnAuth/UnAuthMisc';
import UnAuthHardware from './Components/UnAuth/UnAuthHardware';

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
    }
]

// Software
// Hardware
// Accessories
// Misc