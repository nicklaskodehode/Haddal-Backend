import dotenv from 'dotenv';
dotenv.config();

import { Sequelize } from '@sequelize/core';
import { MariaDbDialect } from '@sequelize/mariadb';
// const mariadb = require('mariadb');
// const pool = mariadb.createPool({
//      host: 'mydb.com', 
//      user:'myUser', 
//      password: 'myPassword',
//      connectionLimit: 5
// });

const db = new Sequelize({
dialect: MariaDbDialect,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password:  process.env.DB_PASSWORD,
  host:  process.env.DB_HOST,
  port: 3306,
  showWarnings: true,
  connectTimeout: 1000,  
}
    // process.env.DB_NAME,
    // process.env.DB_USER,
    // process.env.DB_PASSWORD,
    // {
    //     host: process.env.DB_HOST,
    //     port: process.env.DB_PORT,
    //     dialect: MariaDbDialect
    // }
);

export default db;