/** @jsxImportSource @emotion/react */
import Link from "next/link"
import { useRecoilState, useRecoilValue } from "recoil"
import { authIsLogin } from "../../../selectors/auth.selector"
import { IMenu } from "../../../types/router.type"
import { headerStyle } from "./gnb.layout.style"
import { getAuth } from "firebase/auth";
import { IUserInfo, userInfoState } from "../../../atoms/auth.atom"
import { httpSessionClear } from "../../../http/auth.http"

const GnbLayout = () => {

  const gnbMenus: IMenu[] = [
    {
      name: "About",
      address: "/about/about"
    },
    {
      name: "Survey",
      address: "/survey-board/list"
    },
    {
      name: "Q&A",
      address: "/qna/qna"
    }
  ]

  const auth = getAuth();
  const isLogin = useRecoilValue(authIsLogin);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  // recoil, IIronsession 비워주기 = 공통유틸
  const handleLogout = async () => {
    if (window.confirm('Are you sure you want to Logout?')) {
      setUserInfo({} as IUserInfo);
      const sessionRes = await httpSessionClear();
      auth.signOut();
    }
  }

  return (
    <header css={headerStyle}>
      <div className="header-container">
        <div className="nav-logo">
          <a href="/">SURV<span>e</span>e</a>
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
                <Link href="/account/my-page">My page</Link>
                <button onClick={handleLogout}>Logout</button>
              </div>
          }
        </div>
      </div>
    </header>
  )
}

export default GnbLayout