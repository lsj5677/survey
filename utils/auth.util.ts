import { selector, useRecoilValue } from "recoil"
import { userInfoState } from "../atoms/userInfo.atom"

// export const isLogin = () => {
//   // 이메일 여부에 따라 리턴
//   const userInfo = useRecoilValue(userInfoState)
//   console.log(`SUJIN:: ~ isLogin ~ userInfo`, userInfo)
// }

export const authIsLogin = selector({
  key: 'auth/isLogin',
  get: ({ get }) => {
    const userInfo = get(userInfoState);

    return !!userInfo?.email;
  }
})