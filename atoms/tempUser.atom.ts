import { atom } from "recoil";
import { getKey } from "../utils/recoil.util";

export interface ITempUser {
  email: string;
}

export const tempUserState = atom<ITempUser>({
  key: getKey('tempUserState'),
  default: {} as ITempUser,
});