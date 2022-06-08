import { IReqUserCreate } from "../../share/httpType/user.type";
import { getHostUrl, http } from "../utils/http.util";

const hostUrl = getHostUrl();

export const httpUserCreate = async (params: IReqUserCreate) => {
  try {
    const { email, password, name } = params;
    const body = { email, password, name };
    console.log(`SUJIN:: ~ httpPostCreate ~ body`, body)

    const createRes = await http(
      `${hostUrl}/api/user`,
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