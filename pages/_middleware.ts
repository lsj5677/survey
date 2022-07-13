import { unsealData } from "iron-session";
import { NextFetchEvent, NextRequest } from "next/server";

export function middleware(req: NextRequest, ev: NextFetchEvent) {

  // if (!window) {
  //   console.debug(`SUJIN:: ~ middleware ~ middleware!!!!!!!!!!!`)
  //   const userCookie = req.cookies['survey_user']
  //   unsealData(userCookie, { password: 'this_is_cookie_survey_password_copyright_sujin' })
  //     .then(res => {
  //       console.debug(`SUJIN:: ~ middleware ~ res`, res)

  //     });
  // }
}