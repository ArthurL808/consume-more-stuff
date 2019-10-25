import React from 'react';
import UnAuthAll from './Components/UnAuthAll';

export const routes = [
    {
        path: '/all',
        exact: true,
        main: () => <UnAuthAll />
    },
    {
        path: '/vehicles',
        main: () => <h2>vehicles</h2>
    },
    {
        path: '/computers',
        main: () => <h2>Computers</h2>
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