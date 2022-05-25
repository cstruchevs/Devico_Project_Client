import { Checkbox, Dialog, DialogContent, Divider, Stack, Typography, Box } from '@mui/material'
import React, { memo, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { uiActions } from '../../store/ui-slice'
import { RootState } from '../../store'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { sagaActions } from '../../store/sagaActions'
import * as yup from 'yup'
import {
  StyledButton,
  StyledTypography,
  StyledTextField,
  ConfirmStyledButton,
  StyledTypographyHandler,
  StyledDialogTitle,
  StyledStackDescription,
  StyledBoxConfirmButton,
  StyledDialogActions,
  StyledStackDescriptionElement,
  StyledStackDialogHeader,
} from './AuthStyles'
import InpurtErrorHandler from '../InputErrosHandler'
import { GoogleLogin } from '@react-oauth/google'
import FacebookLogin from '@greatsumini/react-facebook-login'

const PHONE_REGEX: RegExp =
  /^(?:\+38)?(?:\(044\)[ .-]?[0-9]{3}[ .-]?[0-9]{2}[ .-]?[0-9]{2}|044[ .-]?[0-9]{3}[ .-]?[0-9]{2}[ .-]?[0-9]{2}|044[0-9]{7})$/

const schema = yup.object().shape({
  email: yup.string().email().required('Write correct email'),
  password: yup.string().min(8).max(32).required('Write correct password'),
})

const SignIn = () => {
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
  })

  const [checked, setChecked] = useState(true)

  const regCartIsShown = useSelector<RootState, boolean>(state => state.ui.showReg)
  const logCartIsShown = useSelector<RootState, boolean>(state => state.ui.showLog)

  const toggleHandler = useCallback(() => {
    reset()
    if (logCartIsShown) {
      dispatch(uiActions.toggleLog())
    }
  }, [dispatch, reset, logCartIsShown])

  const onSubmitHandler = useCallback(
    async (data: object) => {
      dispatch({ type: sagaActions.USER_LOGIN_SAGA, payload: { ...data, checked } })
      reset()
      toggleHandler()
    },
    [dispatch, reset, toggleHandler, checked],
  )

  const changeSignHandler = useCallback(() => {
    dispatch(uiActions.toggleReg())
    dispatch(uiActions.toggleLog())
  }, [dispatch])

  const showRecoverPasHandler = () => {
    if (regCartIsShown) {
      dispatch(uiActions.toggleReg())
    }
    if (logCartIsShown) {
      dispatch(uiActions.toggleLog())
    }
    dispatch(uiActions.toggleForgetPassword())
  }

  const onSubmitHandlerGoogle = async (CredentialResponse: any) => {
    dispatch({ type: sagaActions.GOOGLE_AUTH, payload: { token: CredentialResponse.credential } })
  }

  const onSubmitHandlerFacebook = async (CredentialResponse: any) => {
    dispatch({
      type: sagaActions.FACEBOOK_AUTH,
      payload: { email: CredentialResponse.email, name: CredentialResponse.name },
    })
  }

  const handleChangeCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(prevState => !prevState)
  }

  const onSuccessFacebokLogin = (response: any) => {
    localStorage.setItem('token', response.accessToken)
  }
  return (
    <>
      <Dialog open={logCartIsShown} onClose={toggleHandler}>
        <StyledDialogTitle>Sign In</StyledDialogTitle>
        <Divider />
        <StyledStackDialogHeader pt={2} gap={3}>
          <GoogleLogin
            onSuccess={CredentialResponse => {
              onSubmitHandlerGoogle(CredentialResponse)
            }}
            onError={() => {
              console.log('Login Failed')
            }}
            useOneTap
          />
          <FacebookLogin
            appId="674600793627154"
            onSuccess={response => {
              onSuccessFacebokLogin(response)
            }}
            onFail={error => {
              console.log('Login Failed!', error)
            }}
            onProfileSuccess={response => {
              onSubmitHandlerFacebook(response)
            }}
            style={{
              backgroundColor: '#4267b2',
              color: '#fff',
              fontSize: '16px',
              padding: '10px 24px',
              border: 'none',
              borderRadius: '4px',
            }}
          />
        </StyledStackDialogHeader>
        <Divider sx={{ marginTop: '13px' }} variant="middle">
          OR
        </Divider>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <Stack direction="row">
              <Stack direction="column" sx={{ margin: 'auto' }}>
                <StyledTypography>EMAIL*</StyledTypography>
                <StyledTextField
                  {...register('email')}
                  name="email"
                  type="email"
                  error={Boolean(errors.email)}
                  InputProps={
                    errors.email && {
                      endAdornment: <InpurtErrorHandler errors={errors.email} />,
                    }
                  }
                />
                <StyledTypography>PASSWORD*</StyledTypography>
                <StyledTextField
                  {...register('password')}
                  name="password"
                  type="password"
                  error={Boolean(errors.password)}
                  InputProps={
                    errors.password && {
                      endAdornment: <InpurtErrorHandler errors={errors.password} />,
                    }
                  }
                />
              </Stack>
            </Stack>
            <StyledStackDescription direction="row">
              <StyledStackDescriptionElement direction="row">
                <Checkbox
                  checked={checked}
                  onChange={handleChangeCheckBox}
                  inputProps={{ 'aria-label': 'controlled' }}
                  sx={{ padding: '0' }}
                />
                <Typography sx={{ fontSize: '14px' }}>Remember me</Typography>{' '}
              </StyledStackDescriptionElement>
              <StyledTypographyHandler onClick={showRecoverPasHandler}>
                Forgot password?
              </StyledTypographyHandler>
            </StyledStackDescription>
            <StyledBoxConfirmButton>
              <ConfirmStyledButton type="submit">Sign In</ConfirmStyledButton>
            </StyledBoxConfirmButton>
          </form>
        </DialogContent>
        <StyledDialogActions>
          <Box mt={0.4}>
            <Typography sx={{ fontSize: '16px' }}>
              No account?{' '}
              <StyledTypographyHandler onClick={changeSignHandler}>Sign Up</StyledTypographyHandler>
            </Typography>
          </Box>
        </StyledDialogActions>
      </Dialog>
    </>
  )
}

export default memo(SignIn)
