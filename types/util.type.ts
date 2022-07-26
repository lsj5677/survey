import { IncomingMessage } from "http";
import { GetServerSidePropsContext } from "next";
import { NextApiRequestCookies } from "next/dist/server/api-utils";

// custom 확장
export interface SSRPropsContext extends GetServerSidePropsContext {
  req: IncomingMessage
  & { cookies: NextApiRequestCookies }
  // 타입찾아서 넣기
  & { ssrAxios?: any }
}