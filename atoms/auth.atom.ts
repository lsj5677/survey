import { atom, AtomEffect } from "recoil";
import { setClientInterceptor } from "../utils/http.util";
import { getKey } from "../utils/recoil.util";

export interface IUserInfo {
  id: number,
  email: string,
  name?: string,
  accessToken: string,
  refreshToken: string
}

// onSet : atom state가 바뀔 때 마다 실행
const setToken: AtomEffect<IUserInfo> = ({ onSet }) => {
  onSet((userInfo: IUserInfo) => {
    // userInfo가 있으면 accessToken 들어감
    setClientInterceptor(userInfo?.accessToken)
  })
}


export const userInfoState = atom<IUserInfo>({
  key: getKey('userInfoState'),
  default: {} as IUserInfo,
  effects: [setToken]
});
