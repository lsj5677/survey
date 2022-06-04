/** @jsxImportSource @emotion/react */
import Link from "next/link"
import { footerStyle } from "./footer.layout.style"

const FooterLayout = () => {
  return (
    <footer css={footerStyle}>
      <div className="footer-container">
        <span>Cyperight @ 2022 Agnessj Lee All Right Reserved.</span>
        <div className="footer-items">
          <Link href="/credits">Credits</Link>
          <Link href="/blog">Blog</Link>
        </div>
      </div>
    </footer>
  )
}

export default FooterLayout