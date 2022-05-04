import { styled, IconButton } from '@mui/material'
import { Box } from '@mui/system'

export const SectionWrappperStyled = styled(Box)(({ theme }) => ({
  wdisplay: 'flex',
  flexFlow: 'column',
  alignItems: 'flex-start',
  width: '100%',
  color: theme.palette.common.black,
  marginBlock: '20px',
  position: 'relative',
}))

export const OuterBoxStyled = styled(Box)(({ theme }) => ({
  paddingInline: "10px",
}))

export const NextButtonStyled = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  right: 0,
  top: -60,
}))

export const PrevButtonStyled = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  right: 50,
  top: -60,
}))
