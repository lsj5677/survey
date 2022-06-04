/** @jsxImportSource @emotion/react */
import { mainStyle } from './main.layout.style';

const MainLayout = (props: any) => {
  return (
    <main css={mainStyle}>
      <article>
        {props.children}
      </article>
    </main>
  )
}
export default MainLayout
