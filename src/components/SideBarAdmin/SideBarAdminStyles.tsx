import { Stack } from '@mui/material'
import { Box, styled } from '@mui/system'

export const LogoBoxStyled = styled(Box)(({ theme }) => ({
  marginTop: 5,
  padding: 5,
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.common.white,
  '&:hover': {
    cursor: 'pointer',
  },
}))

export const WrapperBoxStyled = styled(Box)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.palette.primary.dark,
}))

export const TopMenuStackStyled = styled(Stack)(({ theme }) => ({
  marginTop: 20,
  display: 'flex',
  flexFlow: 'column',
}))

export const BottomMenuStackStyled = styled(Stack)(({ theme }) => ({
  marginTop: 20,
  display: 'flex',
  flexFlow: 'column',
}))
