import { selector } from "recoil"
import { userInfoState } from "../atoms/auth.atom"
import { getKey } from "../utils/recoil.util";

export const authIsLogin = selector({
  key: getKey('auth/isLogin'),
  get: ({ get }) => {
    const userInfo = get(userInfoState);

    return !!userInfo?.email;
  }
})
