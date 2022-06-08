import { NextApiRequest, NextApiResponse } from "next";
import { createUser } from "../../../server/services/user.service";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { query, body, method } = req;

  switch (method) {
    case 'POST':
      const createParams = JSON.parse(body)
      // api 요청을 서버에서 받습니다.
      const createRes = await createUser(createParams);
      res.status(200).json(createRes);

      break;

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}