import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from '@mui/material'
import React, { FC, memo, useCallback, useMemo, useRef, useState } from 'react'
import { TypographyInfoSub } from '../../pages/LicensePage/LicensePageStyles'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { StyledTextField, StyledTypography } from '../Auth/AuthStyles'
import {
  DividerCard,
  DividerPayments,
  FormControlLabelStyled,
  MainStackForm,
  StackCard,
  StackLicenseForm,
  UploadFileIconStyled,
  UploadTextStyled,
} from './LicenseFormStyles'
import { StyledButtonPersonal } from '../Profile/StylesPersonalData'
import { RootState } from '../../store'
import { sagaActions } from '../../store/sagaActions'
import { useDispatch, useSelector } from 'react-redux'
import { ILicenseType } from '../../store/auth'
import { useNavigate } from 'react-router-dom'
import InpurtErrorHandler from '../InputErrosHandler'
import './FileUploaderOverrides.css'
import { useDropzone } from 'react-dropzone'

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

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/jpeg': [],
      'image/png': []
    }
  })
  const [selectedFile, setSelecetedFile] = useState<string>()

  useMemo(() => {
    if (acceptedFiles[0]) {
      const previewImg: File = acceptedFiles.at(-1) as File
      setSelecetedFile(URL.createObjectURL(previewImg))
    }
  }, [acceptedFiles])

  return (
    <Box pt={4}>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <MainStackForm>
          <Stack direction="column" flex={1}></Stack>
        <MainStackForm direction="row" gap={3}>
          <Stack direction="column" flex={1} alignItems={"center"}>
            <div {...getRootProps({ className: 'dropzone' })}>
              <input {...getInputProps()} />
              <UploadFileIconStyled />
              <Box>
                <UploadTextStyled variant="subtitle1">
                  Upload or drag files <span>here</span>
                </UploadTextStyled>
                <Typography variant="body2">Format only jpeg or png</Typography>
              </Box>
              <img
                className={selectedFile ? 'imagePreview' : 'imageHidden'}
                src={selectedFile}
                alt="preview"
              />
            </div>
          </Stack>
          <Stack direction="column" flex={2}>
            <StyledTypography>FULL NAME* (Ukranian)</StyledTypography>
            <StyledTextField
              {...register('fullNameUkranian')}
              name="fullNameUkranian"
              type="text"
              error={Boolean(errors.fullNameUkranian)}
              InputProps={
                errors.fullNameUkranian && {
                  endAdornment: <InpurtErrorHandler errors={errors.fullNameUkrania} />
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
                  endAdornment: <InpurtErrorHandler errors={errors.fullNameLatin} />
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
                  endAdornment: <InpurtErrorHandler errors={errors.dob} />
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
                  endAdornment: <InpurtErrorHandler errors={errors.nativeCity} />
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
                  endAdornment: <InpurtErrorHandler errors={errors.address} />
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
                  endAdornment: <InpurtErrorHandler errors={errors.identificationNum} />
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
                  endAdornment: <InpurtErrorHandler errors={errors.email} />
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
                  endAdornment: <InpurtErrorHandler errors={errors.phone} />
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
                    key={index}
                    value={el.value}
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
