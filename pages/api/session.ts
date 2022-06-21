// pages/api/login.ts

import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";

export default withIronSessionApiRoute(
  // req body로 보냄
  // next -> nest 요청
  // 사용자정보 클라이언트, 서버 동시에 가지고 있어야 함 
  async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
    const { query, body, method } = req;
    console.log(`SUJIN:: ~ loginRoute ~ body`, body)

    switch (method) {
      case 'POST':
        req.session.user = body
        await req.session.save();
        res.send({ ok: true });

        break;

      default:
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${method} Not Allowed`)
    }

  },
  {
    cookieName: "survey_user",
    password: "this_is_cookie_survey_password_copyright_sujin",
    // secure option : https만 사용 가능
    // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
    cookieOptions: {
      // production 에서만 true
      // https에서만 보임
      secure: process.env.NODE_ENV === "production",
      // httpOnly : application 에서 안보임
      httpOnly: process.env.NODE_ENV === "production",
      // expires: (() => {
      //   const today = new Date();
      //   const tomorrow = new Date();
      //   const timestamp = tomorrow.setDate(today.getDate() + 1);
      //   return new Date(timestamp);
      // })(),
      maxAge: 60 * 60 * 24,
    },
  },
);
