/** @jsxImportSource @emotion/react */
import type { NextPage } from "next";
import Head from "next/head";
import DefaultTemplate from "../template/default.template";
import { mainSectionStyle } from "../styles/index.style";
import Link from "next/link";

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
            <h2>Hello, my name is Agnes :)</h2>
            <article>
              <p>
                I am Front-End devloper.
                <br />
                This is my first project to grow into a Full stack developer.
                <br />
                So it is still work in progress since Jun 2022.
                <br />
                I am applying updates while I studying.
                <br />
                <span>
                  Used by React.js, Next.js, Nest.js, ChakraUI, emotion,
                  firebase, AWS
                </span>
              </p>
            </article>
            <article>
              <p>
                If you want to see my resume and contact, please check the link
                below.
              </p>
              <a
                href="https://www.linkedin.com/in/agnes-lee-041971189/"
                target="_blank"
                rel="noreferrer"
              >
                View my profile
              </a>
            </article>
          </section>
        </div>
      </DefaultTemplate>
    </>
  );
};

export default Home;
