const express = require('express');

const configureMiddleware = require('./middleware.js');
const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');
const recipesRouter = require('../recipes/recipes-router.js')


const server = express();

configureMiddleware(server);

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);
server.use('/api/recipes', recipesRouter);



server.get('/', (req, res) => {
  res.send('TAKE TWO!!');
});

module.exports = server;
