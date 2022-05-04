import { Stack, Typography, MenuItem, SelectChangeEvent } from '@mui/material'
import {
  ProfileConfirmBox,
  ProfileConfirmButton,
  StyledButtonPersonal,
  StyledLinkProfile,
  StyledSelectField,
  StyledTypographyProfile,
} from './StylesPersonalData'
import { Box } from '@mui/system'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { StyledTextField, StyledTypography, StyledTypographyHandler } from '../Auth/AuthStyles'
import { FC, memo, useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { uiActions } from '../../store/ui-slice'
import { StyledLink } from '../MainNavigation/MainNavigatioStyles'
import { StackProfileFormWrapper, StackProfileWrapper } from './StylesProfileData'

const schema = yup.object().shape({
  fullName: yup.string().min(8).required('Write min 8 characters'),
  nickname: yup.string().min(5).required('Write min 6 characters'),
  representiveLicenseNum: yup.number().min(5).required('Write min 5 numbers'),
  city: yup.string().nullable(true),
  DriverLicenseNum: yup.number().min(5).required('Write min 5 numbers'),
  regAdress: yup.string().min(5).nullable(true),
  driverLicense: yup.number().min(8).required('Write min 8 numbers'),
  idNumber: yup.number().min(8).required('Write min 8 numbers'),
  phone: yup.string().min(10).nullable(true),
  birthdayDate: yup.date().required('Date is required'),
})

interface IProfileData {}

const ProfileData: FC<IProfileData> = () => {
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  })

  const [city, setCity] = useState('')

  const toggleAddCar = useCallback(() => {
    dispatch(uiActions.toggleShowAddCar())
  }, [dispatch])

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setCity(event.target.value as string)
  }

  const onSubmitHandler = useCallback((data: any) => {
    console.log(data)
  }, [])

  return (
    <>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <Box>
          <StyledTypographyProfile variant="h5">My Cars</StyledTypographyProfile>
          <StyledButtonPersonal onClick={toggleAddCar}>Add Cars</StyledButtonPersonal>
        </Box>
        <Box mt={2.5}>
          <StyledTypographyProfile mb={1} variant="h5">
            Drivers Data
          </StyledTypographyProfile>
          <StackProfileWrapper>
            <StackProfileFormWrapper>
              <Stack direction="column" flex={1}>
                <StyledTypography>FULL NAME(NICKNAME)*</StyledTypography>
                <StyledTextField
                  {...register('nickname')}
                  name="nickname"
                  type="text"
                  fullWidth
                  id="outlined-basic"
                  error={Boolean(errors.nickname)}
                />
                <StyledTypography>DOB*</StyledTypography>
                <StyledTextField
                  {...register('birthdayDate')}
                  name="birthdayDate"
                  type="date"
                  fullWidth
                  id="outlined-basic"
                  variant="outlined"
                  error={Boolean(errors.birthdayDate)}
                />
                <StyledTypography noWrap={true}>DRIVER LICENSE NUMBER*</StyledTypography>
                <StyledTextField
                  {...register('driverLicense')}
                  name="driverLicense"
                  type="text"
                  fullWidth
                  id="outlined-basic"
                  variant="outlined"
                  error={Boolean(errors.driverLicense)}
                />
                <StyledTypography>CELL NUMBER*</StyledTypography>
                <StyledTextField
                  {...register('phone')}
                  name="phone"
                  type="text"
                  fullWidth
                  id="outlined-basic"
                  variant="outlined"
                  error={Boolean(errors.phone)}
                />
                <StyledTypography>ID NUMBER</StyledTypography>
                <StyledTextField
                  {...register('idNumber')}
                  name="idNumber"
                  type="text"
                  fullWidth
                  id="outlined-basic"
                  variant="outlined"
                  error={Boolean(errors.idNumber)}
                />
              </Stack>
              <Stack direction="column" flex={1}>
                <StyledTypography>CITY</StyledTypography>
                <StyledSelectField
                  value={city}
                  {...register('city')}
                  onChange={handleChange}
                  name="city"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  error={Boolean(errors.city)}
                >
                  <MenuItem value={'Kharkiv'}>Kharkiv</MenuItem>
                  <MenuItem value={'Kiev'}>Kiev</MenuItem>
                  <MenuItem value={'Melitopol'}>Melitopol</MenuItem>
                </StyledSelectField>
                <StyledTypography>REG ADRESS*</StyledTypography>
                <StyledTextField
                  {...register('regAdress')}
                  name="regAdress"
                  type="text"
                  fullWidth
                  id="outlined-basic"
                  variant="outlined"
                  error={Boolean(errors.regAdress)}
                />
                <StyledTypography noWrap={true}>FULL NAME OF YOUR REPRESENTATIVE</StyledTypography>
                <StyledTextField
                  {...register('fullName')}
                  name="fullName"
                  type="text"
                  fullWidth
                  id="outlined-basic"
                  variant="outlined"
                  error={Boolean(errors.fullName)}
                />
                <StyledTypography>REPRESENTAIVE LICENSE NUMBER</StyledTypography>
                <StyledTextField
                  {...register('representiveLicenseNum')}
                  name="representiveLicenseNum"
                  type="text"
                  fullWidth
                  id="outlined-basic"
                  variant="outlined"
                  error={Boolean(errors.representiveLicenseNum)}
                />
                <StyledTypography>SPORT DRIVER LICENSE NUMBER</StyledTypography>
                <StyledTextField
                  {...register('DriverLicenseNum')}
                  name="DriverLicenseNum"
                  type="text"
                  fullWidth
                  id="outlined-basic"
                  variant="outlined"
                  error={Boolean(errors.DriverLicenseNum)}
                />
              </Stack>
            </StackProfileFormWrapper>
            <ProfileConfirmBox>
              <ProfileConfirmButton type="submit">Save</ProfileConfirmButton>
              <Typography>
                No License Number? Click <StyledLinkProfile to="/profile/license">here</StyledLinkProfile>
              </Typography>
            </ProfileConfirmBox>
          </StackProfileWrapper>
        </Box>
      </form>
    </>
  )
}

export default memo(ProfileData)
