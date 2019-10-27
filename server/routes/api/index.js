const express = require('express')
const itemsRoutes = require('./items/items')
const userRoutes = require('./users/users')

module.exports = {
    items: itemsRoutes,
    users: userRoutes,
}