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
        path: '/vehicles',
        main: () => <UnAuthVehicles />
    },
    {
        path: '/computers',
        main: () => <UnAuthComputers />
    },
    {
        path: '/appliances',
        main: () => <UnAuthAppliances />
    },
    {
        path: '/furniture',
        main: () => <UnAuthFurniture />
    }
]