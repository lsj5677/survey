import { IReqUserCreate, IReqVerifyToken } from "../httpType/user.type";
import { getHostUrl, http } from "../utils/http.util";
import axios from 'axios';

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

    return createRes;
  } catch (error) {
    throw error;
  }
}


export const httpTokenVerify = async (params: IReqVerifyToken) => {
  try {
    const userInfo = await http(
      `${hostUrl}/auth/token-verify`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params)
      }
    );

    return await userInfo.json();
  } catch (error) {
    throw error;
  }
}