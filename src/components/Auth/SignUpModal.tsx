import { Checkbox, Dialog, DialogContent, Divider, Stack, Typography, Box } from '@mui/material'
import React, { memo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { uiActions } from '../../store/ui-slice'
import { RootState } from '../../store'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import InfoIcon from '@mui/icons-material/Info'
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
} from './AuthStyles'
import { sagaActions } from '../../store/sagaActions'
import axios from 'axios'
import callApi from '../../services/callApi'
import InpurtErrorHandler from '../InputErrosHandler'
import { GoogleLogin } from '@react-oauth/google'

const phoneRegex: RegExp =
  /^(?:\+38)?(?:\(044\)[ .-]?[0-9]{3}[ .-]?[0-9]{2}[ .-]?[0-9]{2}|044[ .-]?[0-9]{3}[ .-]?[0-9]{2}[ .-]?[0-9]{2}|044[0-9]{7})$/

const schema = yup.object().shape({
  email: yup.string().email().required('Write correct email'),
  password: yup
    .string()
    .min(8)
    .max(32)
    .required('Write correct password, length 8 to 32 characters'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match your initial password'),
})

const SignUp = () => {
  const dispatch = useDispatch()
  const [checked, setChecked] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
  })

  const onSubmitHandler = (data: object) => {
    console.log({ data })
    dispatch({ type: sagaActions.USER_SETUP_SAGA, payload: data })
    reset()
    toggleHandler()
  }

  const onSubmitHandlerGoogle = async (accessToken: any) => {
    await callApi.get('/auth/google', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
  }

  const regCartIsShown = useSelector<RootState, boolean>(state => state.ui.showReg)

  const toggleHandler = () => {
    reset()
    if (regCartIsShown) {
      dispatch(uiActions.toggleReg())
    }
  }

  const changeSignHandler = () => {
    dispatch(uiActions.toggleReg())
    dispatch(uiActions.toggleLog())
  }

  const handleChangeCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
  }

  return (
    <>
      <Dialog open={regCartIsShown} onClose={toggleHandler}>
        <StyledDialogTitle>Sign Up</StyledDialogTitle>
        <Divider />
        <Stack pt={2} direction="row" sx={{ margin: 'auto' }}>
          <GoogleLogin
            onSuccess={CredentialResponse => {
              onSubmitHandlerGoogle(CredentialResponse)
            }}
            onError={() => {
              console.log('Login Failed')
            }}
            useOneTap
          />
          <StyledButton variant="contained">CONNECT WITH FACEBOOK</StyledButton>
        </Stack>
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
              <Stack direction="column">
                <StyledTypography>TELEPHONE</StyledTypography>
                <StyledTextField {...register('phone')} name="phone" />
                <StyledTypography>CONFIRM PASSWORD*</StyledTypography>
                <StyledTextField
                  {...register('confirmPassword')}
                  name="confirmPassword"
                  type="password"
                  error={Boolean(errors.confirmPassword)}
                  InputProps={
                    errors.confirmPassword && {
                      endAdornment: <InpurtErrorHandler errors={errors.confirmPassword} />,
                    }
                  }
                />
              </Stack>
            </Stack>
            <StyledStackDescription>
              <Checkbox
                checked={checked}
                onChange={handleChangeCheckBox}
                inputProps={{ 'aria-label': 'controlled' }}
                sx={{ padding: '0' }}
              />
              <Typography sx={{ fontSize: '14px' }}>
                I agree to{' '}
                <Typography sx={{ textDecoration: 'underline', fontSize: '14px' }} display="inline">
                  Proccesing, use, dissemination and access to my personal data
                </Typography>
              </Typography>
            </StyledStackDescription>
            <StyledBoxConfirmButton>
              <ConfirmStyledButton type="submit" disabled={checked ? false : true}>
                Sign Up
              </ConfirmStyledButton>
            </StyledBoxConfirmButton>
          </form>
        </DialogContent>
        <StyledDialogActions>
          <Box mt={0.4}>
            <Typography sx={{ fontSize: '16px' }}>
              Already a member?{' '}
              <StyledTypographyHandler onClick={changeSignHandler}>Sign in</StyledTypographyHandler>
            </Typography>
          </Box>
        </StyledDialogActions>
      </Dialog>
    </>
  )
}

export default memo(SignUp)
