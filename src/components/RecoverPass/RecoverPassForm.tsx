import { ConfirmStyledButton, StyledTextField, StyledTypography } from '../Auth/AuthStyles'
import { StyledBox, StyledStack, StyledTypographyTitle } from './RecoverPassStyles'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useCallback, useEffect } from 'react'
import callApiRecoverPass from '../../services/callApiRecoverPass'
import { useNavigate } from 'react-router-dom'
import { sagaActions } from '../../store/sagaActions'
import { useDispatch } from 'react-redux'

const schema = yup.object().shape({
  password: yup.string().min(8).max(32).nullable(true),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match your first password'),
})

interface IRecoverPassProps {
  id?: string
  token?: string
}

const RecoverPassForm = ({ id, token }: IRecoverPassProps) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmitHandler = useCallback(
    async (data: any) => {
      await callApiRecoverPass.patch('/update', { ...data, id })
      reset()
    },
    [reset],
  )

  const verifyJwt = useCallback(async () => {
    try {
      await callApiRecoverPass.post(
        `/recover-password-verify/${id}/${token}`,
        {},
        { params: { id: id, token: token } },
      )
    } catch (err) {
      navigate('/', { replace: true })
    }
  }, [])

  useEffect(() => {
    verifyJwt()
  }, [])

  return (
    <StyledBox>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <StyledStack>
          <StyledTypographyTitle>Change your password</StyledTypographyTitle>
          <StyledTypography>Password*</StyledTypography>
          <StyledTextField
            {...register('password')}
            name="password"
            type="password"
            error={Boolean(errors.password)}
          />
          <StyledTypography>Confrim Password*</StyledTypography>
          <StyledTextField
            {...register('confirmPassword')}
            name="confirmPassword"
            type="password"
            error={Boolean(errors.confirmPassword)}
            helperText={errors.confirmPassword?.message}
          />
          <ConfirmStyledButton type="submit">Change Password</ConfirmStyledButton>
        </StyledStack>
      </form>
    </StyledBox>
  )
}

export default RecoverPassForm
