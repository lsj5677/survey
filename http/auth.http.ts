import axios from "axios";
import { IReqAuthLogin } from "../httpType/auth.type";
import { IReqUserCreate } from "../httpType/user.type";
import { httpPost } from "../utils/http.util";

export const httpLogin = async (params: IReqAuthLogin) => {
  try {
    const res = await httpPost('auth/sign-in', params);
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


export const httpSignUp = async (params: IReqUserCreate) => {
  try {
    const res = await httpPost('auth/sign-up', params);
    return res.data;

  } catch (error) {
    throw error;
  }
}