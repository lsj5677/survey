/** @jsxImportSource @emotion/react */
import { FormControl, FormLabel, Input, FormErrorMessage, Button, Link, InputRightElement, InputGroup } from '@chakra-ui/react'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { httpUserCreate } from '../../client/http/user.http'
import DefaultTemplate from '../../client/template/default.template'
import { createUser } from '../../server/services/user.service'
import { IReqUserCreate } from '../../share/httpType/user.type'
import { signUpStyle } from '../../styles/account/sign-up.style'
interface IShowPassword {
  password: boolean;
  confirmPassword: boolean;
}
interface IFormInputs {
  email: string;
  password: string | number;
  confirmPassword: string | number;
  name?: string | number;
}

const SignUp = () => {

  const { register, handleSubmit, getValues, trigger, formState: { errors, isSubmitting, dirtyFields } } = useForm<IFormInputs>();
  const router = useRouter();
  const moveBack = () => router.push('/');
  const [showPassword, setShowPassword] = useState<IShowPassword>({ password: false, confirmPassword: false });

  const onSubmit = async ({ email, password, name }: IFormInputs) => {
    try {
      const params: IReqUserCreate = { email, password, name };
      const createRes = await httpUserCreate(params)

      alert('등록되었습니다.')

      moveBack();

    } catch (error) {
      alert('등록되지 않았습니다.')
    }
  }


  return (
    <DefaultTemplate>
      <div css={signUpStyle}>
        <div className="sign-up-container">
          <div className="sign-up-items">
            <h1>Survey Logo</h1>
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
                <InputGroup>
                  <Input
                    id='password'
                    placeholder='Your password'
                    type={showPassword.password ? 'text' : 'password'}
                    errorBorderColor='crimson'
                    {...register('password', {
                      required: 'This is required',
                      minLength: { value: 4, message: 'Password must have at least 6 characters' },
                      maxLength: { value: 12, message: 'Maximum length should be 12' },
                    })}
                  />
                  <InputRightElement width='4.5em'>
                    <Button size='sm' onClick={() => { setShowPassword({ ...showPassword, password: !showPassword.password }) }}>
                      {showPassword.password ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage>
                  {errors.password && errors.password.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl mt={'1em'} isRequired isInvalid={!!errors.confirmPassword}>
                <FormLabel htmlFor='confirmPassword'>Confirm Password</FormLabel>
                <InputGroup>
                  <Input
                    id='confirmPassword'
                    placeholder='Confirm your password'
                    type={showPassword.confirmPassword ? 'text' : 'password'}
                    errorBorderColor='crimson'
                    {...register('confirmPassword', {
                      required: 'This is required',
                      minLength: { value: 4, message: 'Password must have at least 6 characters' },
                      maxLength: { value: 12, message: 'Maximum length should be 12' },
                      validate: (value: string | number) => {
                        const passwordValue = getValues('password');
                        return passwordValue !== value ? 'Password do not match!' : true;
                      }
                    })}
                  />
                  <InputRightElement width='4.5em'>
                    <Button size='sm' onClick={() => { setShowPassword({ ...showPassword, confirmPassword: !showPassword.confirmPassword }) }}>
                      {showPassword.confirmPassword ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage>
                  {errors.confirmPassword && errors.confirmPassword.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl mt={'1em'} >
                <FormLabel htmlFor='name'>Name (Optional)</FormLabel>
                <Input
                  id='name'
                  placeholder='Your name'
                />
              </FormControl>
              <Button className="submit" mt={'4em'} type='submit' width='100%' isLoading={isSubmitting}>
                Sign up
              </Button>
            </form>
            <div className="sign-in-notice">
              <span>Do you have an account?</span>
              <Link href="/account/sign-in">Sign in</Link>
            </div>
          </div>
        </div>
      </div>
    </DefaultTemplate>
  )
}

export default SignUp