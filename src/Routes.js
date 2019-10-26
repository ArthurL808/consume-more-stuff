import React from 'react';
import UnAuthAll from './Components/UnAuthAll';
import UnAuthVehicles from './Components/UnAuthVehicles';
import UnAuthComputers from './Components/UnAuthComputers';
import UnAuthAppliances from './Components/UnAuthAppliances';
import UnAuthFurniture from './Components/UnAuthFurniture';

export const routes = [
    {
        path: '/all',
        exact: true,
        main: () => <UnAuthAll />
    },
    {
        path: '/software',
        main: () => <UnAuthVehicles />
    },
    {
        path: '/hardware',
        main: () => <UnAuthComputers />
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