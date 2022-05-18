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
import { DUMMY_DATA_LICENSES } from './LicensesDummyData'
import { StyledButtonPersonal } from '../Profile/StylesPersonalData'
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
  birthdayDate: yup.date().required('Date is required'),
  city: yup.string().nullable(true).required('Write your city'),
  regAdress: yup.string().min(5).nullable(true),
  idNumber: yup.number().min(8).required('Write min 8 numbers'),
  email: yup.string().email().required('Write correct email'),
  phone: yup.number().min(100000000).nullable(true),
})

const LicenseForm: FC<ILicenseForm> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  })

  const onSubmitHandler = useCallback((data: any) => {
    console.log(data)
  }, [])

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
              fullWidth
              id="outlined-basic"
              error={Boolean(errors.fullNameLatin)}
            />
            <StyledTypography>FULL NAME* (Latin)</StyledTypography>
            <StyledTextField
              {...register('fullNameLatin')}
              name="fullNameLatin"
              type="text"
              fullWidth
              id="outlined-basic"
              error={Boolean(errors.fullNameUkranian)}
            />
            <StyledTypography>DOB</StyledTypography>
            <StyledTextField
              {...register('birthdayDate')}
              name="birthdayDate"
              type="date"
              fullWidth
              id="outlined-basic"
              variant="outlined"
              error={Boolean(errors.birthdayDate)}
            />
            <StyledTypography>THE CITY WHRE YOU WAS BORN</StyledTypography>
            <StyledTextField
              {...register('city')}
              name="city"
              type="text"
              fullWidth
              id="outlined-basic"
              error={Boolean(errors.city)}
            />
          </Stack>
          <Stack direction="column" flex={2}>
            <StyledTypography>ADDRESS</StyledTypography>
            <StyledTextField
              {...register('regAdress')}
              name="regAdress"
              type="text"
              fullWidth
              id="outlined-basic"
              error={Boolean(errors.regAdress)}
            />
            <StyledTypography>AN IDENTIFICATION NUMBER</StyledTypography>
            <StyledTextField
              {...register('idNumber')}
              name="idNumber"
              type="text"
              fullWidth
              id="outlined-basic"
              error={Boolean(errors.idNumber)}
            />
            <StyledTypography>EMAIL</StyledTypography>
            <StyledTextField
              {...register('email')}
              name="email"
              type="text"
              fullWidth
              id="outlined-basic"
              error={Boolean(errors.email)}
            />
            <StyledTypography>CELL NUMBER</StyledTypography>
            <StyledTextField
              {...register('phone')}
              name="phone"
              type="text"
              fullWidth
              id="outlined-basic"
              error={Boolean(errors.phone)}
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
              {DUMMY_DATA_LICENSES &&
                DUMMY_DATA_LICENSES.map((el: any, index) => (
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
                              <Typography>{el.price}</Typography>
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
