import {
  Box,
  Dialog,
  DialogContent,
  DialogContentText,
  Divider,
  Typography,
} from '@mui/material'
import { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { uiActions } from '../../store/ui-slice'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {
  ConfirmStyledButton,
  StyledBoxConfirmButton,
  StyledDialogActions,
  StyledDialogTitle,
  StyledTextField,
  StyledTypography,
  StyledTypographyHandler,
} from '../Auth/AuthStyles'
import callApi from '../../services/callApi'

const schema = yup.object().shape({
  email: yup.string().email().required('There is no account with this email'),
})

const RecoverPas = () => {
  const dispatch = useDispatch()
  const [isSend, setIsSend] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  })

  const recoverIsShown = useSelector<RootState, boolean>(state => state.ui.showForgetPassword)

  const changeSignHandler = useCallback(() => {
    dispatch(uiActions.toggleForgetPassword())
    dispatch(uiActions.toggleLog())
  }, [dispatch])

  const toggleHandler = useCallback(() => {
    reset()
    dispatch(uiActions.toggleForgetPassword())
    setIsSend(false)
  }, [dispatch, reset])

  const toggleHandlerCheck = useCallback(() => {
    if (Boolean(errors.email)) return
    if (recoverIsShown) {
      setIsSend(!isSend)
    }
  }, [setIsSend, recoverIsShown, isSend, errors.email])

  const onSubmitHandler = useCallback(async (data: object) => {
    callApi.post("/recover-password", data)
    toggleHandlerCheck()
    reset()
  }, [reset, toggleHandlerCheck])
  return (
    <Dialog open={recoverIsShown} onClose={toggleHandler}>
      <StyledDialogTitle>Password Recover</StyledDialogTitle>
      <Divider />
      <DialogContent>
        {isSend ? (
          <>
            <DialogContentText>
              A password reset email has been sent to the email address on file for your account,
              but may take several minutes to show up in your inbox. Link valid 24h
            </DialogContentText>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <ConfirmStyledButton onClick={toggleHandler}>Ok</ConfirmStyledButton>
            </Box>
          </>
        ) : (
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <StyledTypography>EMAIL*</StyledTypography>
            <StyledTextField
              {...register('email')}
              name="email"
              type="email"
              required
              fullWidth
              id="outlined-basic"
              variant="outlined"
              error={Boolean(errors.email)}
              helperText={errors.email?.message}
            />
            <StyledBoxConfirmButton>
              <ConfirmStyledButton type="submit">Submit</ConfirmStyledButton>
            </StyledBoxConfirmButton>
          </form>
        )}
      </DialogContent>
      <StyledDialogActions>
        <Typography sx={{ fontSize: '16px' }}>
          Already a member?{' '}
          <StyledTypographyHandler onClick={changeSignHandler}>Sign in</StyledTypographyHandler>
        </Typography>
      </StyledDialogActions>
    </Dialog>
  )
}

export default RecoverPas
