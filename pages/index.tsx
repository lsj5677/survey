/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next'
import Head from 'next/head'
import DefaultTemplate from '../template/default.template'
import { mainSectionStyle } from '../styles/index.style'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
      {/* use head and add meta tag in head component  */}
      <Head>
        <title>SURVeY</title>
        {/* font적용 */}
      </Head>
      <DefaultTemplate>
        <div className="main-container">
          <section css={mainSectionStyle}>
            This is Main :)
          </section>
          <section>
            <div className="section-items">
              <div className="section-item text">
                <h2>SURVeY</h2>
                <p>
                  Lorem!!! ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus ducimus veritatis dolor sit! Autem quas laudantium
                  voluptatibus sequi, quam officia enim nostrum error blanditiis,
                  cum fugit libero? Omnis, quas. Unde ad earum deleniti esse dolore beatae
                  eligendi similique molestias illo!
                </p>
              </div>
              <div className="section-item link">
                <Link href="/">Details</Link>
              </div>
            </div>
          </section>
          <section>

          </section>
          <section>
            <div className="card-list">

            </div>
          </section>
        </div>
      </DefaultTemplate>
    </>
  )
}

export default Home
