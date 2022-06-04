/** @jsxImportSource @emotion/react */
import { FormControl, FormLabel, Input, FormErrorMessage, Button, Link, InputRightElement, InputGroup } from '@chakra-ui/react'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import DefaultTemplate from '../../client/template/default.template'
import { signUpStyle } from '../../styles/account/sign-up.style'

export interface IShowPassword {
  password: boolean;
  confirmPassword: boolean;
}

interface IFormInputs {
  email: string;
  password: string | number;
  confirmPassword: string | number;
  name?: string | number;
}

// useForm<IFormInputs> 로 하면 isInvalid error
// yup을 같이 써야하는지?
// const SignUp = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//   } = useForm<IFormInputs>();

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const [showPassword, setShowPassword] = useState<IShowPassword>({ password: false, confirmPassword: false });

  const onSubmit = (data: any) => console.log(data);
  // const onSubmit = (data: IShowPassword) => console.log(data);

  return (
    <DefaultTemplate>
      <div css={signUpStyle}>
        <div className="sign-up-container">
          <div className="sign-up-items">
            <h1>Survey Logo</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl isRequired isInvalid={errors.email}>
                <FormLabel htmlFor='email'>Email</FormLabel>
                <Input
                  id='email'
                  placeholder='Your Email'
                  type='email'
                  errorBorderColor='crimson'
                  {...register('email', {
                    required: 'This is required',

                  })}
                />
                <FormErrorMessage>
                  {errors.email?.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl mt={'1em'} isRequired>
                <FormLabel htmlFor='password'>Password</FormLabel>
                <InputGroup>
                  <Input
                    id='password'
                    placeholder='Your password'
                    type={showPassword.password ? 'text' : 'password'}
                    errorBorderColor='crimson'
                    {...register('password', {
                      required: 'This is required',
                      minLength: { value: 8, message: 'Password must have at least 8 characters' },
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
              <FormControl mt={'1em'} isRequired>
                <FormLabel htmlFor='confirmPassword'>Confirm Password</FormLabel>
                <InputGroup>
                  <Input
                    id='confirmPassword'
                    placeholder='Confirm your password'
                    type={showPassword.confirmPassword ? 'text' : 'password'}
                    errorBorderColor='crimson'
                    {...register('confirmPassword', {
                      required: 'This is required',
                      minLength: { value: 8, message: 'Password must have at least 8 characters' },
                      maxLength: { value: 12, message: 'Maximum length should be 12' },
                      // validate: value => value === password.current || 'The passwords do not match'
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
                  {...register('name', {

                  })}
                />
                <FormErrorMessage>
                  {errors.name && errors.name.message}
                </FormErrorMessage>
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