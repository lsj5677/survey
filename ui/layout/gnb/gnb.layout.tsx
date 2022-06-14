/** @jsxImportSource @emotion/react */
import Link from "next/link"
import { useRecoilValue } from "recoil"
import { authIsLogin } from "../../../selectors/auth.selector"
import { IMenu } from "../../../types/router.type"
import { headerStyle } from "./gnb.layout.style"
import { getAuth } from "firebase/auth";

const GnbLayout = () => {

  const gnbMenus: IMenu[] = [
    {
      name: "About",
      address: "/about"
    },
    {
      name: "Survey",
      address: "/survey-board/list"
    },
    {
      name: "Q&A",
      address: "/qna"
    }
  ]

  const auth = getAuth();
  const isLogin = useRecoilValue(authIsLogin);

  return (
    <header css={headerStyle}>
      <div className="header-container">
        <div className="nav-logo">
          <Link href="/">Survey Logo</Link>
        </div>
        <nav className="nav-items nav-menu">
          {
            gnbMenus.map((menu: IMenu, index: number) => {
              return (
                <Link href={menu.address} key={index}>{menu.name}</Link>
              )
            })
          }
        </nav>
        <div className="nav-items">
          {
            !isLogin ?
              <div>
                <Link href="/account/sign-up">Sign Up</Link>
                <Link href="/account/sign-in">Login</Link>
              </div>
              :
              <div>
                <Link href="/mypage">My page</Link>
                <button onClick={() => auth.signOut()}>Logout</button>
              </div>
          }
        </div>
      </div>
    </header>
  )
}

export default GnbLayout