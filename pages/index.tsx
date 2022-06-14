import type { NextPage } from 'next'
import Head from 'next/head'
import MainLayout from '../ui/layout/main/main.layout'
import FooterLayout from '../ui/layout/footer/footer.layout'
import GnbLayout from '../ui/layout/gnb/gnb.layout'
import { authInit } from '../utils/auth.util'
import { useRecoilState } from 'recoil'
import { userInfoState } from '../atoms/auth.atom'
import DefaultTemplate from '../template/default.template'

const Home: NextPage = () => {
  return (
    <DefaultTemplate>
      {/* <Head></Head> 
      <GnbLayout />
      <MainLayout>
        main
      </MainLayout>
      <FooterLayout />
      */}
    </DefaultTemplate>
  )
}

export default Home
