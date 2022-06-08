import { createConnection } from "mysql2";
import "reflect-metadata";
import { DataSource } from "typeorm";
import { UserEntity } from "../entity/user.entity";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "survey",
  logging: true,
  entities: [UserEntity],
  subscribers: [],
  migrations: [],
})

let database: DataSource;

export const getDatabase = async () => {
  if (!database?.isInitialized) {
    database = await AppDataSource.initialize();
  }

  return database;
}

// const connAsync = createConnection({
//   // database info
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'survey'
// })

// // promise 형태로 사용
// export const conn = connAsync.promise()
