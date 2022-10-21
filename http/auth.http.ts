import axios from "axios";
import { IReqAuthLogin } from "../httpType/auth.type";
import { IReqUserCreate } from "../httpType/user.type";
import { httpPost } from "../utils/http.util";

const getUrl = () => {
  console.debug(`SUJIN:: ~ url ~ process.env.STAGE`, process.env.STAGE)
  return process.env.STAGE === 'production' ? 'https://survee.link' : 'http://localhost:8080';
}
const url = getUrl();

console.debug(`SUJIN:: ~ url ~ process.env.STAGE`, process.env.STAGE)

export const httpGetSession = async () => {
  try {
    const res = await axios.get(`/api/session`);
    return res.data
  } catch (error) {
    throw error;
  }
}

export const httpSessionRegist = async (params: any) => {
  try {
    const res = await axios.post(`/api/session`, params);
    return res.data
  } catch (error) {
    throw error;
  }
}

export const httpSessionClear = async () => {
  try {
    const res = await axios.delete(`/api/session`)
    return res.data;
  } catch (error) {
    throw error;
  }
}

export const httpLogin = async (params: IReqAuthLogin) => {
  try {
    const res = await httpPost('auth/sign-in', params);
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