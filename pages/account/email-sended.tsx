/** @jsxImportSource @emotion/react */
import DefaultTemplate from "../../template/default.template"
import { emailSendedStyle } from '../../styles/account/email-sended.style'
import { ITempUser, tempUserState } from "../../atoms/tempUser.atom"
import { useRecoilState } from "recoil"
import { useEffect, MouseEvent } from "react"
import { useRouter } from "next/router"

const EmailSended = () => {
  const router = useRouter();
  const [tempUser, setTempUser] = useRecoilState(tempUserState);
  console.debug(`SUJIN:: ~ EmailSended ~ tempUser`, tempUser.email)


  // useEffect(() => {
  //   return () => {
  //     console.debug('return >>>>>>')
  //     setTempUser({} as ITempUser);
  //   }
  // }, [])

  const handleClick = (event: MouseEvent) => {
    event.preventDefault();
    setTempUser({} as ITempUser);
    router.push('/');
  }


  return (
    <DefaultTemplate>
      <div css={emailSendedStyle}>
        <div className="email-sended-container">
          <h1 className="logo">SURV<span>e</span>Y</h1>
          <h3>Please verify your email :)</h3>
          <p>
            You're almost there! We sent an email to<br />
            <span>{tempUser.email}</span><br />
            Just click on the link in that email to complete your signup. <br />
            If you don't receive the verification email, <strong>check out some of the suggestions below:</strong>
          </p>
          <ul>
            <li>
              <b>Check the spelling of your email address.</b>
              If the spelling is incorrect, sign up again using the correct spelling of the address.
            </li>
            <li>
              <b>Check your Spam or Junk folder.</b>
              Verification emails may be filtered directly into your email provider’s spam or junk mail folder.
            </li>
          </ul>

          <a onClick={handleClick}>Go back home</a>
        </div>
      </div>
    </DefaultTemplate>
  )
}

export default EmailSended