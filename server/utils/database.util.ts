import { createConnection } from "mysql2";

const connAsync = createConnection({
  // database info
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test'
})

// promise 형태로 사용
export const conn = connAsync.promise()