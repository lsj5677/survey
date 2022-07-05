import { IReqSurveyGetCreate } from "../httpType/survey.type";
import { getHostUrl, http, httpGet } from "../utils/http.util";
import axios from 'axios';

const hostUrl = getHostUrl();

export const httpSurveyCreate = async (params: IReqSurveyGetCreate) => {
  try {
    const { title, date, time, target } = params;
    const body = { title, date, time, target };

    const createRes = await http(
      `${hostUrl}/api/survey`,
      {
        method: 'POST',
        body: JSON.stringify(body)
      }
    );

    if (createRes.status === 500) throw 'INTERNAL_SERVER_ERROR';

    return createRes;
  } catch (error) {
    throw error;
  }
}

export const httpTest = async () => {
  try {
    const res = await axios.get(`http://localhost:8080/api/session`);
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