import { Avatar, IconButton, InputAdornment, Tooltip } from '@mui/material'
import {
  BoxAvatar,
  BoxPersonalDataForm,
  InputFile,
  ModeEditIconStyled,
  StackPersonalDataForm,
  StackProfileWrapper,
  StyledBadgeAvatar,
  StyledButtonPersonal,
} from './StylesPersonalData'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { StyledBoxConfirmButton, StyledTextField, StyledTypography } from '../Auth/AuthStyles'
import React, { FC, memo, useCallback, useEffect, useState } from 'react'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { sagaActions } from '../../store/sagaActions'
import { useDispatch } from 'react-redux'
import axios from 'axios'

import InpurtErrorHandler from '../InputErrosHandler'

const schema = yup.object().shape(
  {
    fullName: yup.string().when('fullName', {
      is: (fullName: string) => fullName?.length > 0,
      then: yup.string().min(8, 'fullName must be at least 3 characters'),
    }),
    email: yup.string().email().required('Write correct email'),
    password: yup.string().when('password', {
      is: (password: string) => password?.length > 0,
      then: yup.string().min(8, 'Password must be at least 8 characters'),
    }),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
    phone: yup.string().when('phone', {
      is: (phone: string) => phone?.length > 0,
      then: yup.string().min(10, 'Phone must be at least 10 characters'),
    })
  },
  [
    ['fullName', 'fullName'],
    ['password', 'password'],
    ['phone', 'phone']
  ]
)

interface IPersonalData {}

const PersonalData: FC<IPersonalData> = () => {
  const dispatch = useDispatch()
  const userData = useSelector((state: RootState) => state.auth.user)
  const [formDataName, setFormDataName] = useState(userData?.fullName ? userData?.fullName : '')
  const [formDataPhone, setFormDataPhone] = useState(userData?.phone ? userData?.phone : '')
  const [formDataEmail, setFormDataEmail] = useState(userData?.email ? userData?.email : '')
  const [formDataPicture, setFormDataPicture] = useState<any>('')
  const [previewPicture, setPreviewPicture] = useState('')

  const handleChangeName = (e: any) => {
    let value = e.target.value
    setFormDataName(value)
  }
  const handleChangePhone = (e: any) => {
    let value = e.target.value
    setFormDataPhone(value)
  }
  const handleChangeEmail = (e: any) => {
    let value = e.target.value
    setFormDataEmail(value)
  }
  const handleChangeAvatar = (e: any) => {
    setPreviewPicture(URL.createObjectURL(e.target.files[0]))
    setFormDataPicture(e.target.files)
  }

  const [passValue, setValues] = useState({
    showPassword: false,
  })
  const handleClickShowPassword = useCallback(() => {
    setValues({
      showPassword: !passValue.showPassword,
    })
  }, [setValues, passValue.showPassword])
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
  })

  const onUploadAvatar = useCallback(async () => {
    //Ask for upload url
    const req = await axios.get(`http://localhost:5000/image/uploadUrl/avatars`)

    //Upload to aws
    let file = formDataPicture[0]
    await axios.put(req.data.uploadURL, file)

    //Change user avatar in db
    await axios.patch(`http://localhost:5000/user/avatar`, {id: userData?.id, key: req.data.Key})
  }, [formDataPicture, userData?.id])

  const onSubmitHandler = useCallback(
    async (data: any) => {
      const id = userData?.id
      dispatch({
        type: sagaActions.UPDATE_USER_SAGA,
        payload: { ...data, id },
      })
      resetField('password')
      resetField('confirmPassword')
      if (formDataPicture) {
        onUploadAvatar()
      }
    },
    [resetField, dispatch, userData, onUploadAvatar, formDataPicture],
  )

  const getUserInfoHandler = useCallback(async () => {
    const req = await axios.get(`http://localhost:5000/user/${userData?.id}`)

    setPreviewPicture(req.data.image)
  }, [userData?.id])

  useEffect(() => {
    getUserInfoHandler()
  }, [getUserInfoHandler])

  return (
    <>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <StackProfileWrapper direction="row">
          <BoxAvatar flex={1} m={2}>
            <StyledBadgeAvatar
              overlap="circular"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              badgeContent={<ModeEditIconStyled fontSize="large" />}
            >
              <label htmlFor="icon-button-file">
                <InputFile
                  accept="image/*"
                  id="icon-button-file"
                  type="file"
                  defaultValue=""
                  name="picture"
                  onChange={handleChangeAvatar}
                />
                <IconButton color="primary" aria-label="upload picture" component="span">
                  <Avatar src={previewPicture} sx={{ height: '180px', width: '180px' }} />
                </IconButton>
              </label>
            </StyledBadgeAvatar>
          </BoxAvatar>
          <BoxPersonalDataForm flex={3}>
            <StackPersonalDataForm>
              <StyledTypography>FULL NAME</StyledTypography>
              <StyledTextField
                {...register('fullName')}
                name="fullName"
                type="text"
                value={formDataName}
                onChange={e => handleChangeName(e)}
                InputProps={
                  errors.fullName && {
                    endAdornment: <InpurtErrorHandler errors={errors.fullName} />
                  }
                }
              />
              <StyledTypography>EMAIL</StyledTypography>
              <StyledTextField
                {...register('email')}
                name="email"
                value={formDataEmail}
                onChange={e => handleChangeEmail(e)}
                error={Boolean(errors.email)}
                InputProps={
                  errors.email && {
                    endAdornment: <InpurtErrorHandler errors={errors.email} />
                  }
                }
              />
              <StyledTypography>PHONE</StyledTypography>
              <StyledTextField
                {...register('phone')}
                name="phone"
                type="text"
                value={formDataPhone}
                onChange={e => handleChangePhone(e)}
                error={Boolean(errors.phone)}
                InputProps={
                  errors.phone && {
                    endAdornment: <InpurtErrorHandler errors={errors.phone} />
                  }
                }
              />
              <StyledTypography>NEW PASSWORD</StyledTypography>
              <StyledTextField
                {...register('password')}
                name="password"
                type={passValue.showPassword ? 'text' : 'password'}
                error={Boolean(errors.password)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {passValue.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <StyledTypography>CONFIRM NEW PASSWORD</StyledTypography>
              <StyledTextField
                {...register('confirmPassword')}
                name="confirmPassword"
                type="password"
                error={Boolean(errors.confirmPassword)}
                InputProps={
                  errors.confirmPassword && {
                    endAdornment: <InpurtErrorHandler errors={errors.confirmPassword} />
                  }
                }
              />
              <StyledBoxConfirmButton>
                <StyledButtonPersonal type="submit">Save</StyledButtonPersonal>
              </StyledBoxConfirmButton>
            </StackPersonalDataForm>
          </BoxPersonalDataForm>
        </StackProfileWrapper>
      </form>
    </>
  )
}

export default memo(PersonalData)
