/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import FooterLayout from '../ui/layout/footer/footer.layout'
import GnbLayout from '../ui/layout/gnb/gnb.layout'
import MainLayout from '../ui/layout/main/main.layout'

const DefaultTemplate = (props: any) => {
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