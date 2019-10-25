import React from 'react';

export const routes = [
    {
        path: '/',
        exact: true,
        main: () => <h2>Home</h2>
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