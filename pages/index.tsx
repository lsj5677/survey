import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import MainLayout from '../ui/layout/main/main.layout'
import FooterLayout from '../ui/layout/footer/footer.layout'
import GnbLayout from '../ui/layout/gnb/gnb.layout'

const Home: NextPage = () => {
  return (
    <>
      {/* <Head></Head> */}
      <GnbLayout />
      <MainLayout>
        main
      </MainLayout>
      <FooterLayout />
    </>
  )
}

export default Home
