import React from 'react';
import UnAuthAll from './Components/UnAuthAll';
import UnAuthSoftware from './Components/UnAuthSoftware';
import UnAuthAppliances from './Components/UnAuthAppliances';
import UnAuthFurniture from './Components/UnAuthFurniture';
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
        main: () => <UnAuthAppliances />
    },
    {
        path: '/misc',
        main: () => <UnAuthFurniture />
    }
]

// Software
// Hardware
// Accessories
// Misc