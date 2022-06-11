import { IReqUserCreate } from "../../share/httpType/user.type";
import { getHostUrl, http } from "../utils/http.util";

const hostUrl = getHostUrl();

export const httpUserCreate = async (params: IReqUserCreate) => {
  try {
    // const { email, password, name } = params;
    // const body = { email, password, name };

    const createRes = await http(
      `${hostUrl}/auth/sign-up`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params)
      }
    );

    if (createRes.status === 500) throw 'INTERNAL_SERVER_ERROR';

    return createRes;
  } catch (error) {
    throw error;
  }
}