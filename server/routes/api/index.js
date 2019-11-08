const express = require('express')
const itemsRoutes = require('./items/items')
const userRoutes = require('./users/users')
const authRoutes = require('./auth/auth');

module.exports = {
    items: itemsRoutes,
    users: userRoutes,
    auth: authRoutes
}