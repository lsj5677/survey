import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { RecoilRoot, useRecoilState } from 'recoil'
import { firebaseConfig } from "../config/firebase.config";
import { IIronSessionUser } from "../types/auth.type";
import { consoleDebugSetting } from "../utils/environment.util";
import { STAGE_TYPE } from "../types/environment.type";

// type 확장
declare module 'iron-session' {
  interface IronSessionData {
    user?: IIronSessionUser;
  }
}

function MyApp({ Component, pageProps }: AppProps) {

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  let analytics;

  if (app.name && typeof window !== 'undefined') {
    analytics = getAnalytics(app);
    consoleDebugSetting(STAGE_TYPE.LOCAL)
  }


  return (
    <RecoilRoot>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </RecoilRoot>
  )
}

export default MyApp
