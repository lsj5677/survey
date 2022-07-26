import { async } from "@firebase/util";
import axios, { Axios, AxiosRequestConfig } from "axios";
import { withIronSessionApiRoute, withIronSessionSsr } from "iron-session/next";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  NextApiHandler,
} from "next";
import { getServerSideProps } from "../pages/survey-board/list";
import { SSRPropsContext } from "../types/util.type";
import { getHostUrl } from "./http.util";

const sessionOptions = {
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
}

export function withSessionRoute(handler: NextApiHandler) {
  return withIronSessionApiRoute(handler, sessionOptions);
}

// Theses types are compatible with InferGetStaticPropsType https://nextjs.org/docs/basic-features/data-fetching#typescript-use-getstaticprops
export function withSessionSsr<
  P extends { [key: string]: unknown } = { [key: string]: unknown },
  >(
    getServerSideProps: GetServerSideProps
  ) {
  return withIronSessionSsr(withAuth(getServerSideProps), sessionOptions);
}

const hostUrl = getHostUrl();

export const withAuth = (getServerSideProps: GetServerSideProps) =>
  async (context: SSRPropsContext) => {
    const token = context?.req?.session?.user?.accessToken;
    context.req.ssrAxios = getSsrAxios(token)

    return await getServerSideProps(context);
  }


const getSsrAxios = (token?: string) =>
  async (callback: () => AxiosRequestConfig<any> | Promise<AxiosRequestConfig<any>>) => {
    const reqConfig = await callback();
    reqConfig.baseURL = hostUrl;

    // ironsession token 있으면 hedaers 정보 넣어주기
    if (token) reqConfig.headers = { ...reqConfig.headers, Authorization: `Bearer ${token}` };

    // axios 호출
    return await axios(reqConfig)
  }
