import { httpTokenVerify } from "../http/user.http";
import { IReqVerifyToken } from "../httpType/user.type";
import { EAUTH_ERROR } from "../types/error.type";

export const authInit = async (firebaseUser: any) => {

  if (!firebaseUser) throw EAUTH_ERROR.EMPTY_USER;
  const token = await firebaseUser.getIdToken();
  const param: IReqVerifyToken = { token: await firebaseUser.getIdToken() }
  const userInfoRes = await httpTokenVerify(param);

  return userInfoRes;
}