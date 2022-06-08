/** @jsxImportSource @emotion/react */
import Link from "next/link"
import { useState } from "react"
import { IMenu } from "../../../types/router.type"
import { headerStyle } from "./gnb.layout.style"

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

  const [login, setLogin] = useState<boolean>(false);

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
            !login ?
              <div>
                <Link href="/account/sign-up">Sign Up</Link>
                <Link href="/login">Login</Link>
              </div>
              :
              <div>
                <Link href="/mypage">My page</Link>
                <Link href="/logout">Logout</Link>
              </div>
          }
        </div>
      </div>
    </header>
  )
}

export default GnbLayout