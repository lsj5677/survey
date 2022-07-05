/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Suspense, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { userInfoState } from '../atoms/auth.atom';
import FooterLayout from '../ui/layout/footer/footer.layout';
import GnbLayout from '../ui/layout/gnb/gnb.layout';
import MainLayout from '../ui/layout/main/main.layout';
import { httpGetSession } from '../http/auth.http';

const DefaultTemplate = (props: any) => {

  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  console.log(`SUJIN:: ~ DefaultTemplate ~ userInfo`, userInfo)

  const appInit = async () => {
    // session에 userInfo recoil에 넣어주기
    const sessionRes = await httpGetSession();
    setUserInfo(sessionRes.user);

    // client 쪽에서 session 부를 떄는 recoil
    // ssr에서 부를 때는 withSessionSsr 사용 : [session.util.ts] => req.session.user에 접근가능
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