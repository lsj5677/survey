import { async } from "@firebase/util";
import axios, { AxiosRequestConfig } from "axios";
import { withIronSessionApiRoute, withIronSessionSsr } from "iron-session/next";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  NextApiHandler,
} from "next";
import { getServerSideProps } from "../pages/survey-board/list";

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

export const withAuth = (getServerSideProps: GetServerSideProps) => {

  return async (context: GetServerSidePropsContext) => {
    // const token = context?.req?.session?.user?.accessToken;
    // let Authorization: string = token ? `Bearer ${token}` : '';
    // axios.interceptors.request.use(
    //   (config: AxiosRequestConfig<any>) => {
    //     config.headers = { ...config.headers, Authorization }
    //     return config
    //   },
    //   (error) => {
    //     return Promise.reject(error)
    //   }
    // )
    return await getServerSideProps(context);
  }
}