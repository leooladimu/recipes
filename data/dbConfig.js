const knex = require('knex');
const config = require('../knexfile.js')

const enviroment = process.env.DB_ENV || 'development';

console.log('db env', enviroment);

module.exports = knex(config[enviroment]);
