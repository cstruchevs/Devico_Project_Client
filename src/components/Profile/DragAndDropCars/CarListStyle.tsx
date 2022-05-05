import { Box, styled, Typography } from '@mui/material'

export const BoxList = styled(Box)(({ theme }) => ({
  background: '#F8F8F8',
  borderRadius: '9px',
  boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
  maxWidth: "800px",
  '&:hover': {
    outline: '1.5px solid #509bf7',
  },
}))

export const MainElText = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
}))

export const SubElText = styled(Typography)(({ theme }) => ({
  fontSize: '13.5px',
}))

export const StackElText = styled(Typography)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  justifyContent: 'center',
  justifyItems: 'center'
}))

export const StackElIcons = styled(Typography)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyItems: 'center',
}))

export const StackElIcon = styled(Typography)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  alignContent: 'center',
  gap:"10px"
}))
