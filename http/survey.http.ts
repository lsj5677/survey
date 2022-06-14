import { IReqSurveyGetCreate } from "../httpType/survey.type";
import { getHostUrl, http } from "../utils/http.util";

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
    const res = await http(
      `${hostUrl}/test`,
      {
        method: 'GET',
      }
    );

    if (res.status === 500) throw 'INTERNAL_SERVER_ERROR';

    return res;

  } catch (error) {
    throw error;
  }
}

export const httpSurveyReadAll = async () => {
  try {
    const getListAll = await http(
      `${hostUrl}/survey/list`,
      {
        method: 'GET',
      }
    );

    if (getListAll.status === 500) throw 'INTERNAL_SERVER_ERROR';

    return await getListAll.json();

  } catch (error) {
    throw error;
  }
}