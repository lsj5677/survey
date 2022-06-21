/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next'
import Head from 'next/head'
import DefaultTemplate from '../template/default.template'
import { mainSectionStyle } from '../styles/index.style'

const Home: NextPage = () => {
  return (
    <>
      {/* use head and add meta tag in head component  */}
      <Head>
        <title>SURVeY</title>
        {/* font적용 */}
      </Head>
      <DefaultTemplate>
        <section css={mainSectionStyle}>
          This is Main :)
        </section>
      </DefaultTemplate>
    </>
  )
}

export default Home
