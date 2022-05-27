import { Typography } from '@mui/material'
import { styled } from '@mui/material'
import { Box } from '@mui/system'

export const SectionWrappperStyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexFlow: 'column',
  marginTop: '120px',
  marginBottom: "30px",
  width: "100%",
  color: theme.palette.common.black,
}))

export const SectionHeaderStyled= styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(1.8rem, 2.5vw, 2.75rem)',
}))