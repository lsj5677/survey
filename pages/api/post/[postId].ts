import { NextApiRequest, NextApiResponse } from "next";
// import { postGetOne } from "../../../server/services/user.service";

// export default async function hanndler(req: NextApiRequest, res: NextApiResponse) {
//   const { query: { postId }, method, body } = req;

//   // controller
//   switch (method) {
//     case 'GET':
//       const getOneRes = await postGetOne(postId);
//       res.status(200).json(getOneRes);

//       break;

//     default:
//       res.status(405).end(`Method ${method} Not Allowed`);
//   }
// }