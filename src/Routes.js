import React from 'react';
import UnAuthAll from './Components/UnAuthAll';
import UnAuthVehicles from './Components/UnAuthVehicles';
import UnAuthComputers from './Components/UnAuthComputers';

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
        main: () => <h2>appliances</h2>
    },
    {
        path: '/furniture',
        main: () => <h2>furniture</h2>
    }
]