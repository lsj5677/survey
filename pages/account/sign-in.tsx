/** @jsxImportSource @emotion/react */
import { Button, FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import DefaultTemplate from "../../template/default.template"
import { signInStyle } from "../../styles/account/sign-in.style"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { httpTokenVerify } from "../../http/user.http";
import { IReqVerifyToken } from "../../httpType/user.type";
import { EAUTH_ERROR } from "../../types/error.type";
import { useRecoilState, useRecoilValue } from "recoil";
import { userInfoState } from "../../atoms/auth.atom";
import { authIsLogin } from "../../selectors/auth.selector";
import { httpLogin, httpSessionRegist } from "../../http/auth.http";
import router from "next/router";

interface ISignInInputs {
  email: string,
  password: string,
}

const SignIn = () => {
  const { register, handleSubmit, trigger, formState: { errors, dirtyFields, isSubmitting } } = useForm<ISignInInputs>();
  const isLogin = useRecoilValue(authIsLogin);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  const onSubmit = async ({ email, password }: ISignInInputs) => {
    try {
      // firebase login
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);

      // firebase 유저정보 : auth.currentUser;
      console.log(`SUJIN:: ~ onSubmit ~ auth.currentUser`, auth.currentUser)
      const currentUser = auth.currentUser

      if (!currentUser?.emailVerified) {
        alert('이메일 인증을 완료해주세요');
        await auth.signOut();
        return;
      }

      // token -> server 보내기
      if (!currentUser) throw EAUTH_ERROR.EMPTY_USER;

      const token = await currentUser.getIdToken();
      const loginRes = await httpLogin({ token });

      // 사용자정보, 토큰 세션에 등록
      const sessionRegistRes = await httpSessionRegist(loginRes);
      // const param: IReqVerifyToken = { token: await currentUser.getIdToken() }
      console.log(`SUJIN:: ~ onSubmit ~ sessionRegistRes`, sessionRegistRes)
      // const userInfoRes = await httpTokenVerify(param);

      setUserInfo(sessionRegistRes?.user);

      // const authLogin = await httpLogin({ ...userInfoRes, token: await currentUser.getIdToken() });

      console.log(`SUJIN:: ~ onSubmit ~ userInfo`, userInfo)
      router.push('/');

      // database userinfo -> access token으로 불러와야함


    } catch (error: any) {
      if (error === EAUTH_ERROR.EMPTY_USER) {
        alert('사용자를 찾을 수 없습니다.')
      } else if (error.code === EAUTH_ERROR.WRONG_PASSWORD) {
        alert('비밀번호를 확인하세요.')
      } else {
        alert('서버 요청에 실패했습니다.')
        console.log(error);
      };
    }
  }

  return (
    <DefaultTemplate>
      <div css={signInStyle}>
        <div className="sign-in-container">
          <div className="sign-in-items">
            <h1 className="logo">SURV<span>e</span>Y</h1>
            {/* {
              isLogin ? 'true' : 'false'
            } */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl isRequired isInvalid={dirtyFields.email && !!errors?.email}>
                <FormLabel htmlFor='email'>Email</FormLabel>
                <Input
                  id='email'
                  placeholder='Your Email'
                  type='email'
                  errorBorderColor='crimson'
                  {...register('email', {
                    required: 'This is required',
                    onBlur: async () => await trigger('email')
                  })}
                />
                <FormErrorMessage>
                  {errors.email?.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl mt={'1em'} isRequired isInvalid={!!errors.password}>
                <FormLabel htmlFor='password'>Password</FormLabel>
                <Input
                  id='password'
                  placeholder='Your password'
                  type='password'
                  errorBorderColor='crimson'
                  {...register('password', {
                    required: 'This is required',
                    minLength: { value: 4, message: 'Password must have at least 6 characters' },
                    maxLength: { value: 12, message: 'Maximum length should be 12' },
                  })}
                />
                <FormErrorMessage>
                  {errors.password && errors.password.message}
                </FormErrorMessage>
              </FormControl>
              <Button className="submit" mt={'4em'} type='submit' width='100%' isLoading={isSubmitting}>
                Sign In
              </Button>
            </form>
            <div className="sign-in-item">
              <div className="google-login">
                <Button>Login with Gmail</Button>
              </div>
              <div className="move-page">
                <div className="find-password">
                  <span>Forgot your password?</span>
                  <a href="">Find Password</a>
                </div>
                <div className="sign-up">
                  <span>Don't have an account?</span>
                  <a href="/account/sign-up">Sign up</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultTemplate>
  )
}

export default SignIn