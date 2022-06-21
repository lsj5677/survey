import axios from "axios";
import { IReqAuthLogin } from "../httpType/auth.type";

export const httpLogin = async (params: IReqAuthLogin) => {
  try {
    const res = await axios.post(`http://localhost:8080/api/session`, params)
    return res.data;

  } catch (error) {
    throw error;
  }
}