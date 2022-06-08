import { NextApiRequest, NextApiResponse } from "next";
// import { userCreate } from "../../../server/services/user.service";

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const { query, body, method } = req;

//   switch (method) {
//     case 'POST':
//       const createRes = await userCreate(JSON.parse(body));
//       res.status(200).json(createRes);

//       break;

//     default:
//       res.setHeader('Allow', ['GET', 'POST']);
//       res.status(405).end(`Method ${method} Not Allowed`);
//   }
// }