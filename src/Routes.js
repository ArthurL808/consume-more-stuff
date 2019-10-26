import React from 'react';
import UnAuthAll from './Components/UnAuthAll';
import UnAuthSoftware from './Components/UnAuthSoftware';
import UnAuthAccessories from './Components/UnAuthAccessories';
import UnAuthMisc from './Components/UnAuthMisc';
import UnAuthHardware from './Components/UnAuthHardware';

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