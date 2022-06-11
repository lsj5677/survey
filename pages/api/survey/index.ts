import { NextApiRequest, NextApiResponse } from "next";
import { getSurveyList } from "../../../server/services/survey.service";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { query, body, method } = req;

  switch (method) {

    case 'GET':
      const getSurveyListAllRes = await getSurveyList();
      res.status(200).json(getSurveyListAllRes);

      break;

    // case 'POST':
    //   const createRes = await createUser(JSON.parse(body));
    //   res.status(200).json(createRes);

    //   break;

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}