import mysql from 'mysql2';

const pool = mysql.createPool({
    host: '127.0.0.1',
    port: '3306',
    database: 'my_db_01',
    user: 'root',
    password: 'xixi666...',
})

export default pool.promise()