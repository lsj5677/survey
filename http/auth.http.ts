import axios from "axios";
import { IReqAuthLogin } from "../httpType/auth.type";
import { IReqUserCreate } from "../httpType/user.type";
import { getHostUrl, httpPost } from "../utils/http.util";

const hostUrl = getHostUrl();

export const httpLogin = async (params: IReqAuthLogin) => {
  try {
    const res = await httpPost('auth/sign-in', params);
    return res.data;
  } catch (error) {
    throw error;
  }
}

export const httpGetSession = async () => {
  try {
    const res = await axios.get(`${hostUrl}/api/session`);
    return res.data
  } catch (error) {
    throw error;
  }
}

export const httpSessionRegist = async (params: any) => {
  try {
    const res = await axios.post(`${hostUrl}/api/session`, params);
    return res.data
  } catch (error) {
    throw error;
  }
}

export const httpSessionClear = async () => {
  try {
    const res = await axios.delete(`${hostUrl}/api/session`)
    return res.data;
  } catch (error) {
    throw error;
  }
}


export const httpSignUp = async (params: IReqUserCreate) => {
  try {
    const res = await httpPost('auth/sign-up', params);
    return res.data;

  } catch (error) {
    throw error;
  }
}