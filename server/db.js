import { createPool } from 'mysql2/promise';
// import pkg from 'mysql2/promise';
// const {Pool} = pkg;

export const pool = createPool({
   host: 'localhost',
   port: 3306,
   user: 'root',
   password: '',
   database: 'tareasdb'
});