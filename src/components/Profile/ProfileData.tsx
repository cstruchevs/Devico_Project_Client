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
import { StyledTextField, StyledTypography } from '../Auth/AuthStyles'
import { FC, memo, useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { uiActions } from '../../store/ui-slice'
import { StackProfileFormWrapper, StackProfileWrapper } from './StylesProfileData'
import CarList from './DragAndDropCars/CarList'
import { sagaActions } from '../../store/sagaActions'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { IDriversData } from '../../store/auth'

const schema = yup.object().shape({
  representiveFullName: yup.string().min(8).required('Write min 8 characters'),
  nickname: yup.string().min(5).required('Write min 6 characters'),
  representiveLicense: yup.number().min(5).required('Write min 5 numbers'),
  city: yup.string().nullable(true),
  sportDriverLicense: yup.number().min(5).required('Write min 5 numbers'),
  regAdress: yup.string().min(5).nullable(true),
  driverLicense: yup.number().min(8).required('Write min 8 numbers'),
  idNumber: yup.number().min(8).required('Write min 8 numbers'),
  phone: yup.string().min(10).nullable(true),
  dob: yup.date().required('Date is required'),
})

interface IProfileData {}

const ProfileData: FC<IProfileData> = () => {
  const dispatch = useDispatch()
  const driversData = useSelector((state: RootState) => state.auth.driversData)
  const [driversDataInputs, setDriversDataInputs] = useState<IDriversData>(driversData)
  const userId: any = useSelector((state: RootState) => state.auth.user?.id)
  const [city, setCity] = useState('')
  console.log(driversDataInputs.nickname)
  console.log(driversData)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  })

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDriversDataInputs({
      ...driversDataInputs,
      [e.target.name]: value
    });
  }

  const toggleAddCar = useCallback(() => {
    dispatch(uiActions.toggleShowAddCar())
  }, [dispatch])

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setCity(event.target.value as string)
  }

  const onSubmitHandler = useCallback((data: any) => {
    const updatedData:any = data;
    updatedData.dob = updatedData.dob.toISOString().slice(0, 10)
    dispatch({ type: sagaActions.POST_DRIVERS_DATA_SAGA, payload: { ...data, id: userId } })
  }, [])

  return (
    <>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <Box>
          <StyledTypographyProfile variant="h5">My Cars</StyledTypographyProfile>
          <CarList />
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
                  value={driversDataInputs.nickname}
                  onChange={handleChangeInput}
                  fullWidth
                  id="outlined-basic"
                  error={Boolean(errors.nickname)}
                />
                <StyledTypography>DOB*</StyledTypography>
                <StyledTextField
                  {...register('dob')}
                  name="dob"
                  type="date"
                  value={driversDataInputs.dob}
                  onChange={handleChangeInput}
                  fullWidth
                  id="outlined-basic"
                  variant="outlined"
                  error={Boolean(errors.dob)}
                />
                <StyledTypography noWrap={true}>DRIVER LICENSE NUMBER*</StyledTypography>
                <StyledTextField
                  {...register('driverLicense')}
                  name="driverLicense"
                  type="text"
                  value={driversDataInputs.driverLicense}
                  onChange={handleChangeInput}
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
                  value={driversDataInputs.phone}
                  onChange={handleChangeInput}
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
                  value={driversDataInputs.idNumber}
                  onChange={handleChangeInput}
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
                  value={driversDataInputs.regAdress}
                  onChange={handleChangeInput}
                  fullWidth
                  id="outlined-basic"
                  variant="outlined"
                  error={Boolean(errors.regAdress)}
                />
                <StyledTypography noWrap={true}>FULL NAME OF YOUR REPRESENTATIVE</StyledTypography>
                <StyledTextField
                  {...register('representiveFullName')}
                  name="representiveFullName"
                  type="text"
                  value={driversDataInputs.representiveFullName}
                  onChange={handleChangeInput}
                  fullWidth
                  id="outlined-basic"
                  variant="outlined"
                  error={Boolean(errors.representiveFullName)}
                />
                <StyledTypography>REPRESENTAIVE LICENSE NUMBER</StyledTypography>
                <StyledTextField
                  {...register('representiveLicense')}
                  name="representiveLicense"
                  type="text"
                  value={driversDataInputs.representiveLicense}
                  onChange={handleChangeInput}
                  fullWidth
                  id="outlined-basic"
                  variant="outlined"
                  error={Boolean(errors.representiveLicense)}
                />
                <StyledTypography>SPORT DRIVER LICENSE NUMBER</StyledTypography>
                <StyledTextField
                  {...register('sportDriverLicense')}
                  name="sportDriverLicense"
                  type="text"
                  value={driversDataInputs.sportDriverLicense}
                  onChange={handleChangeInput}
                  fullWidth
                  id="outlined-basic"
                  variant="outlined"
                  error={Boolean(errors.sportDriverLicense)}
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
