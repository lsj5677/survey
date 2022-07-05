import { atom } from "recoil";
import { getKey } from "../utils/recoil.util";

export interface IUserInfo {
  id: number,
  email: string,
  name?: string,
  accessToken: string,
  refreshToken: string
}

export const userInfoState = atom<IUserInfo>({
  key: getKey('userInfoState'),
  default: {} as IUserInfo,
});