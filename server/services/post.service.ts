import { conn } from "../utils/database.util";

// 실질적 비지니스 로직이 이루어지는 부분

export const postGetOne = async (id: string | string[]) => {
  try {
    if (Array.isArray(id)) throw 'CANNOT_GET_ONE';

    // database 관련된 로직 = model
    let query = `SELECT * FROM post WHERE id = ${id}`;
    // 2가지 결과 리턴
    // row: 데이터들 , fields: database에 컬럼들에 대한 데이터
    const [rows, fields] = await conn.query<any[]>(query);
    console.log(`SUJIN:: ~ postGetOne ~ rows`, rows)

    // obj return
    return rows[0];

  } catch (error) {
    throw error;
  }
}

export const postCreate = async (params?: any) => {
  try {
    const { email, password, name } = params;
    let query = `INSERT user 
                (email, password, name) 
                VALUES 
                (${params.email}, ${params.password}, ${params.name})`;


  } catch (error) {
    throw error;
  }
}