import { Box, styled, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export const LinkLicense = styled(Link)(({ theme }) => ({
  color: '#485550',
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
}))

export const TypographyLinkLicense = styled(Typography)(({ theme }) => ({
  color: 'black',
  fontSize: '13px',
  fontWeight: '600',
}))

export const TypographyInfo = styled(Typography)(({ theme }) => ({
  color: 'black',
  fontWeight: '700',
}))

export const MainBoxLicense = styled(Box)(({ theme }) => ({
    width:"92%"
  }))

export const TypographyInfoSub = styled(Typography)(({ theme }) => ({
    color: 'black',
    fontWeight: '600',
    letterSpacing: '0.15em',
    marginBottom: '10px'
  }))
