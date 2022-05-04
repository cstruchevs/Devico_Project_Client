import { Divider, Stack } from '@mui/material'
import { FC, memo } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { LinkLicense, MainBoxLicense, TypographyInfo, TypographyInfoSub, TypographyLinkLicense } from './LicensePageStyles'
import LicenseForm from '../../components/LicenseForm/LicenseForm'

interface ILicensePage {}

const LicensePage: FC<ILicensePage> = () => {
  return (
    <MainBoxLicense p={2}>
      <Stack direction="row">
        <LinkLicense to="/">
          <ArrowBackIosIcon sx={{ height: '15px' }} />
          <TypographyLinkLicense> Back</TypographyLinkLicense>
        </LinkLicense>
      </Stack>
      <TypographyInfo variant="h4">Get License</TypographyInfo>
      <TypographyInfoSub variant="h6" mt={2}>
        GENERAL INFORMATION
      </TypographyInfoSub>
      <Divider />
      <LicenseForm />
    </MainBoxLicense>
  )
}

export default memo(LicensePage)
