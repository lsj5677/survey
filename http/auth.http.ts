import axios from "axios";
import { IReqAuthLogin } from "../httpType/auth.type";
import { getHostUrl } from "../utils/http.util";

const hostUrl = getHostUrl();

export const httpLogin = async (params: IReqAuthLogin) => {
  try {
    const res = await axios.post(`${hostUrl}/auth/sign-in`, params)
    return res.data;
  } catch (error) {
    throw error;
  }
}

export const httpSessionRegist = async (params: any) => {
  try {
    const res = await axios.post(`http://localhost:8080/api/session`, params);
    return res.data
  } catch (error) {
    throw error;
  }
}

export const httpSessionClear = async () => {
  try {
    const res = await axios.delete(`http://localhost:8080/api/session`)
    return res.data;
  } catch (error) {
    throw error;
  }
}