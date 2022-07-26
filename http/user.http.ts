import { IReqVerifyToken } from "../httpType/user.type";
import { httpPost } from "../utils/http.util";

export const httpTokenVerify = async (params: IReqVerifyToken) => {
  try {

    const res = await httpPost('auth/token-verify', params);
    return res.data;

  } catch (error) {
    throw error;
  }
}