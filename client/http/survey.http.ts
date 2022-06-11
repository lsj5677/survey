import { IReqSurveyGetCreate } from "../../share/httpType/survey.type";
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