import { NextApiRequest, NextApiResponse } from "next";
import { postGetOne } from "../../../server/services/post.service";

export default async function hanndler(req: NextApiRequest, res: NextApiResponse) {
  const { query: { postId }, method, body } = req;
  console.log(`SUJIN:: ~ hanndler ~ postId`, postId)
  console.log(`SUJIN:: ~ hanndler ~ method`, method)

  // controller
  switch (method) {
    case 'GET':
      const getOneRes = await postGetOne(postId);
      res.status(200).json(getOneRes);

      break;

    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}