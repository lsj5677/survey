import { atom } from "recoil";

interface IUserInfo {
  id: number;
  email: string;
  name?: string;
  createdAt: Date,
  updatedAt: Date
}

export const userInfoState = atom<IUserInfo>({
  key: 'userInfoState',
  default: {} as IUserInfo,
});