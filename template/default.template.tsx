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

const DefaultTemplate = (props: any) => {

  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  console.log('test')

  useEffect(() => {
    const auth = getAuth();
    // firebase 제공 onAuthStateChanged:::lifecycle event 비슷 
    auth.onAuthStateChanged(firebaseUser => {
      console.log(`SUJIN:: ~ useEffect ~ user`, firebaseUser)

      if (!firebaseUser) {
        setUserInfo({} as IUserInfo);
      } else {
        authInit(firebaseUser)
          .then((userInfoRes) => {
            console.log(`SUJIN:: ~ .then ~ userInfoRes`, userInfoRes)
            if (userInfoRes) {
              setUserInfo(userInfoRes)
            }

          })
          .catch((error) => {
            console.log(`SUJIN:: ~ MyApp ~ error`, error)
          })
      }
    })
  }, [])




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