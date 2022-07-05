import { IReqSurveyCreate } from "../httpType/survey.type";
import { IIronSessionUser } from "../types/auth.type";
import { httpGet, httpPost } from "../utils/http.util";

export const httpSurveyCreate = async (params: IReqSurveyCreate, userInfo?: IIronSessionUser) => {
  try {

    const res = await httpPost('survey/write', params, userInfo);
    return res.data;

  } catch (error) {
    throw error;
  }
}


export const httpSurveyReadAll = async (user: any) => {
  try {
    // promise 편하게 사용 : async, await
    // await -> then 필요 없음 await 수행까지 기다리고 결과 리턴
    // 결과값 res(변수)에 저장

    const res = await httpGet(`survey/list`, user);
    return res.data;

  } catch (error) {
    throw error;
  }
}