import { Sequelize } from 'sequelize';
import mysql2 from 'mysql2';

const db = new Sequelize({
  database: 'sapu_db',
  username: 'root',
  password: '',
  host: 'localhost',
  dialect: 'mysql',
  dialectModule: mysql2,
});
export default db;
