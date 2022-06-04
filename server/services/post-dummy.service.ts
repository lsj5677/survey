// import { db } from "../utils/firebase.util"
// import { ECollection } from "../constants/firestore.constant"
// import { IReqPostGetAll, IResPostGetAll } from "../../share-resources/httpType/post.type"
// import { IPostModel } from "../../share-resources/models/post.model"
// import { conn } from "../utils/database.util"


// export const postGetOne = async (id: string | string[]) => {
//   try {

//     if (Array.isArray(id)) throw 'CANNOT_GET_ONE'

//     const query = `SELECT * FROM post WHERE id = ${id}`
//     const [rows, fields] = await conn.query<any[]>(query)

//     return rows[0]

//   } catch (error) {
//     throw error
//   }
// }

// export const postGetAll = async (params: IReqPostGetAll = { page: 1, limit: 10 }): Promise<IResPostGetAll> => {
//   try {
//     const { page, limit } = params
//     const offset = limit * (page - 1);

//     const query = `SELECT * FROM post LIMIT ${offset}, ${limit}`
//     const [rows,] = await conn.query<any[]>(query)

//     const totalQuery = `SELECT count(*) as totalCount from post`
//     const [countRows,] = await conn.query<any[]>(totalQuery)

//     //title, content, createdAt

//     const totalCount = countRows[0]?.totalCount ?? 0

//     return {
//       items: rows as IPostModel[],
//       meta: {
//         total: totalCount,
//         page,
//         limit
//       }
//     }

//   } catch (error) {
//     throw error
//   }
// }

// export const postCreate = async (params?: any) => {
//   try {

//     const { title, content } = params

//     let query = `INSERT INTO post (title, content) VALUES('${title}', '${content})`
//     const [rows,] = await conn.query<any[]>(query)
//     console.log('rows: ', rows);

//     return rows[0]

//   } catch (error) {
//     throw error
//   }
// }

// export const postUpdate = async (id: string | string[], params: any) => {
//   try {
//     if (Array.isArray(id)) throw 'CANNOT_GET_ONE'

//     let query = `UPDATE post SET`

//     const setQuery = Object.entries(params).map(ele => {
//       console.log('ele: ', ele);
//       return ` ${ele[0]} = '${ele[1]}'`
//     }).join(',')

//     query += setQuery
//     query += ` WHERE id = ${id}`

//     const [rows,] = await conn.query<any[]>(query)

//     const findQuery = `SELECT * FROM post WHERE id = ${id}`
//     const [foundRows,] = await conn.query<any[]>(findQuery)

//     console.log('foundRows: ', foundRows);

//     return foundRows[0]

//   } catch (error) {
//     throw error
//   }

// }

// export const postRemove = async (id: string | string[]) => {

// }