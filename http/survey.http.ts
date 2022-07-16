import { IReqSurveyCreate } from "../httpType/survey.type";
import { IIronSessionUser } from "../types/auth.type";
import { httpGet, httpPost } from "../utils/http.util";
import * as qs from 'qs';

export const httpSurveyCreate = async (params: IReqSurveyCreate, userInfo?: IIronSessionUser) => {
  try {

    const res = await httpPost('survey/write', params, userInfo);
    return res.data;

  } catch (error) {
    throw error;
  }
}


export const httpSurveyReadAll = async (user: any, options?: any) => {
  try {

    const queryString = qs.stringify(options);

    // promise 편하게 사용 : async, await
    // await -> then 필요 없음 await 수행까지 기다리고 결과 리턴
    // 결과값 res(변수)에 저장

    const res = await httpGet(`survey/list?${queryString}`, user);

    return res.data;

  } catch (error) {
    throw error;
  }
}

export const httpSurveyReadDetail = async (user: any, options?: any) => {
  console.debug(`SUJIN:: ~ httpSurveyReadDetail ~ user`, user)
  console.debug(`SUJIN:: ~ httpSurveyReadDetail ~ options`, options)
  const res = await httpGet(`survey/list-one/${options.id}`, user);
}