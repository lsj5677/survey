import { UserEntity } from "../entity/user.entity";
import { getDatabase } from "../utils/database.util";
// import { conn } from "../utils/database.util";

// 실질적 비지니스 로직이 이루어지는 부분

// export const postGetOne = async (id: string | string[]) => {
//   try {
//     if (Array.isArray(id)) throw 'CANNOT_GET_ONE';

//     // database 관련된 로직 = model
//     let query = `SELECT * FROM post WHERE id = ${id}`;
//     // 2가지 결과 리턴
//     // row: 데이터들 , fields: database에 컬럼들에 대한 데이터
//     const [rows, fields] = await conn.query<any[]>(query);
//     console.log(`SUJIN:: ~ postGetOne ~ rows`, rows)

//     // obj return
//     return rows[0];

//   } catch (error) {
//     throw error;
//   }
// }

export const createUser = async (params?: any) => {
  try {
    const { email, password, name } = params;
    const db = await getDatabase();
    const userRepo = db.getRepository(UserEntity);
    const newUser = userRepo.create();

    newUser.email = `'${params.email}'`;
    newUser.password = `'${params.password}'`;
    newUser.name = `'${params.name}'`;

    // save : promise
    await userRepo.save(newUser);

  } catch (error) {
    throw error;
  }
}

export const getUserList = async () => {
  const db = await getDatabase();
  const userRepo = db.getRepository(UserEntity);
  const userAll = await userRepo.find();

  return userAll;
}

// export const getUserList = async () => {
//   const db = await getDatabase();
//   const userRepo = db.getRepository(UserEntity);
//   // find : array - getAll
//   // findOne : obj - getOne
//   const userAll = await userRepo.findOne({
//     // 조건 obj
//     where: { id: 10 }
//   });
//   console.log(`SUJIN:: ~ getUserList ~ userAll`, userAll);

//   return userAll;
// }