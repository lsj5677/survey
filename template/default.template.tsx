/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { IUserInfo, userInfoState } from '../atoms/auth.atom';
import FooterLayout from '../ui/layout/footer/footer.layout';
import GnbLayout from '../ui/layout/gnb/gnb.layout';
import MainLayout from '../ui/layout/main/main.layout';
import { authInit } from '../utils/auth.util';
import { getAuth } from "firebase/auth";
import axios, { AxiosRequestConfig } from 'axios';

const DefaultTemplate = (props: any) => {

  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  console.log('test')

  const appInit = () => {
    const auth = getAuth();
    // firebase 제공 onAuthStateChanged:::lifecycle event 비슷 
    auth.onAuthStateChanged(async (firebaseUser) => {

      console.log(`SUJIN:: ~ useEffect ~ user 1111111`, firebaseUser)

      if (!firebaseUser) {
        setUserInfo({} as IUserInfo);
        return false;
      }

      if (!firebaseUser.emailVerified) return false;

      const userInfoRes = await authInit(firebaseUser)
      if (userInfoRes) setUserInfo(userInfoRes)

      const token = await firebaseUser.getIdToken();
      let Authorization: string = token ? `Bearer ${token}` : '';

      axiosInterceptorConfig(Authorization);
    })
  }

  const axiosInterceptorConfig = (auth: string) => {
    axios.interceptors.request.use((config: AxiosRequestConfig<any>) => {
      config.headers = { ...config.headers, Authorization: auth }
      return config
    })
  }

  // nextjs Auth : iron session : session 관리 | next auth : token으로 
  // next / nest 로 분리해서 사용 x
  useEffect(() => {
    appInit();
  }, [])



  // appInit이 다 끝나고 실행되도록 suspense로 감싸기
  return (
    <div css={wrapperStyle}>
      <GnbLayout />
      <MainLayout>
        {props.children}
      </MainLayout>
      <FooterLayout />
    </div>
  )
}

const wrapperStyle = css`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export default DefaultTemplate