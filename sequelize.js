import dotenv from 'dotenv';
dotenv.config();

import { Sequelize } from '@sequelize/core';
import { MariaDbDialect } from '@sequelize/mariadb';
import mariadb from 'mariadb';

const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 5,
  allowPublicKeyRetrieval: true, // Allow RSA key retrieval
  cachingRsaPublicKey: true,     // Cache the public key
  port: 3306,
});

const db = new Sequelize({
  dialect: MariaDbDialect,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  pool: pool,  // Use the custom pool
  connectTimeout: 1000,
});

db.authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

export default db;
