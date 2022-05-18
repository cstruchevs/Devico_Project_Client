import {
  Box,
  Card,
  CardContent,
  Divider,
  IconButton,
  InputAdornment,
  Radio,
  RadioGroup,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material'
import { FC, memo, useCallback, useEffect, useState } from 'react'
import { TypographyInfoSub } from '../../pages/LicensePage/LicensePageStyles'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { v4 as uuidv4 } from 'uuid'
import * as yup from 'yup'
import { StyledTextField, StyledTypography } from '../Auth/AuthStyles'
import {
  DividerCard,
  DividerPayments,
  FormControlLabelStyled,
  MainStackForm,
  StackCard,
  StackLicenseForm,
} from './LicenseFormStyles'
import { StyledButtonPersonal } from '../Profile/StylesPersonalData'
import { RootState } from '../../store'
import { sagaActions } from '../../store/sagaActions'
import { useDispatch, useSelector } from 'react-redux'
import { ILicenseType } from '../../store/auth'
import { useNavigate } from 'react-router-dom'
import InfoIcon from '@mui/icons-material/Info'

interface ILicenseForm {}

const nameRegexLatin = /^[A-Za-z]+$/
const nameRegexUkranian = /^[А-Яа-я]+$/

const schema = yup.object().shape({
  fullNameLatin: yup
    .string()
    .matches(nameRegexLatin, 'Only English letters')
    .min(8)
    .required('Write min 8 characters'),
  fullNameUkranian: yup
    .string()
    .matches(nameRegexUkranian, 'Only Ukranian letters')
    .min(8)
    .required('Write min 8 characters'),
  dob: yup.date().required('Date is required'),
  nativeCity: yup.string().nullable(true).required('Write your city'),
  address: yup.string().min(5).nullable(true),
  identificationNum: yup.number().min(8).required('Write min 8 numbers'),
  email: yup.string().email().required('Write correct email'),
  phone: yup.number().min(100000000).nullable(true),
})

const LicenseForm: FC<ILicenseForm> = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const userDataId = useSelector((state: RootState) => state.auth.user?.id)
  const token = useSelector((state: RootState) => state.auth.token)
  const licenseTypes: ILicenseType[] = useSelector((state: RootState) => state.auth.licenseTypes)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
  })

  const onSubmitHandler = useCallback(
    (data: any) => {
      let updatedData: any = data
      updatedData.dob = updatedData.dob.toISOString().slice(0, 10)
      dispatch({ type: sagaActions.POST_LICENSE, payload: { ...updatedData, userDataId } })
      reset()
      navigate('/profile', { replace: true })
    },
    [dispatch, reset, navigate, userDataId],
  )

  useEffect(() => {
    dispatch({ type: sagaActions.GET_LICENSES })
  }, [dispatch])

  return (
    <Box pt={4}>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <MainStackForm>
          <Stack direction="column" flex={1}></Stack>
          <Stack direction="column" flex={2}>
            <StyledTypography>FULL NAME* (Ukranian)</StyledTypography>
            <StyledTextField
              {...register('fullNameUkranian')}
              name="fullNameUkranian"
              type="text"
              error={Boolean(errors.fullNameUkranian)}
              InputProps={
                errors.fullNameUkranian && {
                  endAdornment: (
                    <InputAdornment position="end">
                      <Tooltip title={errors.fullNameUkranian?.message}>
                        <IconButton edge="end">
                          <InfoIcon />
                        </IconButton>
                      </Tooltip>
                    </InputAdornment>
                  ),
                }
              }
            />
            <StyledTypography>FULL NAME* (Latin)</StyledTypography>
            <StyledTextField
              {...register('fullNameLatin')}
              name="fullNameLatin"
              type="text"
              error={Boolean(errors.fullNameLatin)}
              InputProps={
                errors.fullNameLatin && {
                  endAdornment: (
                    <InputAdornment position="end">
                      <Tooltip title={errors.fullNameLatin?.message}>
                        <IconButton edge="end">
                          <InfoIcon />
                        </IconButton>
                      </Tooltip>
                    </InputAdornment>
                  ),
                }
              }
            />
            <StyledTypography>DOB</StyledTypography>
            <StyledTextField
              {...register('dob')}
              name="dob"
              type="date"
              error={Boolean(errors.dob)}
              InputProps={
                errors.dob && {
                  endAdornment: (
                    <InputAdornment position="end">
                      <Tooltip title={errors.dob?.message}>
                        <IconButton edge="end">
                          <InfoIcon />
                        </IconButton>
                      </Tooltip>
                    </InputAdornment>
                  ),
                }
              }
            />
            <StyledTypography>THE CITY WHRE YOU WAS BORN</StyledTypography>
            <StyledTextField
              {...register('nativeCity')}
              name="nativeCity"
              type="text"
              error={Boolean(errors.nativeCity)}
              InputProps={
                errors.nativeCity && {
                  endAdornment: (
                    <InputAdornment position="end">
                      <Tooltip title={errors.nativeCity?.message}>
                        <IconButton edge="end">
                          <InfoIcon />
                        </IconButton>
                      </Tooltip>
                    </InputAdornment>
                  ),
                }
              }
            />
          </Stack>
          <Stack direction="column" flex={2}>
            <StyledTypography>ADDRESS</StyledTypography>
            <StyledTextField
              {...register('address')}
              name="address"
              type="text"
              error={Boolean(errors.address)}
              InputProps={
                errors.address && {
                  endAdornment: (
                    <InputAdornment position="end">
                      <Tooltip title={errors.address?.message}>
                        <IconButton edge="end">
                          <InfoIcon />
                        </IconButton>
                      </Tooltip>
                    </InputAdornment>
                  ),
                }
              }
            />
            <StyledTypography>AN IDENTIFICATION NUMBER</StyledTypography>
            <StyledTextField
              {...register('identificationNum')}
              name="identificationNum"
              type="text"
              error={Boolean(errors.identificationNum)}
              InputProps={
                errors.identificationNum && {
                  endAdornment: (
                    <InputAdornment position="end">
                      <Tooltip title={errors.identificationNum?.message}>
                        <IconButton edge="end">
                          <InfoIcon />
                        </IconButton>
                      </Tooltip>
                    </InputAdornment>
                  ),
                }
              }
            />
            <StyledTypography>EMAIL</StyledTypography>
            <StyledTextField
              {...register('email')}
              name="email"
              type="text"
              error={Boolean(errors.email)}
              InputProps={
                errors.email && {
                  endAdornment: (
                    <InputAdornment position="end">
                      <Tooltip title={errors.email?.message}>
                        <IconButton edge="end">
                          <InfoIcon />
                        </IconButton>
                      </Tooltip>
                    </InputAdornment>
                  ),
                }
              }
            />
            <StyledTypography>CELL NUMBER</StyledTypography>
            <StyledTextField
              {...register('phone')}
              name="phone"
              type="text"
              error={Boolean(errors.phone)}
              InputProps={
                errors.phone && {
                  endAdornment: (
                    <InputAdornment position="end">
                      <Tooltip title={errors.phone?.message}>
                        <IconButton edge="end">
                          <InfoIcon />
                        </IconButton>
                      </Tooltip>
                    </InputAdornment>
                  ),
                }
              }
            />
          </Stack>
        </MainStackForm>
        <TypographyInfoSub variant="h6" mt={2}>
          TYPE OF LICENSE:
        </TypographyInfoSub>
        <Divider />
        <Box mt={3}>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <StackLicenseForm gap={4}>
              {licenseTypes &&
                licenseTypes.map((el: any, index) => (
                  <FormControlLabelStyled
                    {...register('license')}
                    key={uuidv4()}
                    value={el.name}
                    name="license"
                    control={<Radio />}
                    label={
                      <Stack direction="row">
                        <Card sx={{ minWidth: 275 }}>
                          <CardContent>
                            <StackCard>
                              <Typography>{el.name}</Typography>
                              <Typography>{el.cost}</Typography>
                            </StackCard>
                            <DividerCard />
                            <Typography>{el.description}</Typography>
                          </CardContent>
                        </Card>
                      </Stack>
                    }
                  />
                ))}
            </StackLicenseForm>
            <FormControlLabelStyled
              {...register('license')}
              value="nolicense"
              name="license"
              control={<Radio />}
              label="I don`t know what kind of license I need"
            />
          </RadioGroup>
        </Box>
        <TypographyInfoSub variant="h6" mt={2}>
          PAYMENT METHODS:
        </TypographyInfoSub>
        <DividerPayments />
        <StyledButtonPersonal type="submit">SUBMIT</StyledButtonPersonal>
      </form>
    </Box>
  )
}

export default memo(LicenseForm)
