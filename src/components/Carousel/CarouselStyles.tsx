import { styled, Container, MobileStepper, Box } from '@mui/material'

export const ContainerSectionStyled = styled(Box)(({ theme }) => ({
  padding: '0px !important',
  width: '100%',
}))

export const ContainerSlideStyled = styled(Box)(({ theme }) => ({
  backgroundColor: 'transparent',
  padding: '0px !important',
}))

export const MobileStepperStyled = styled(MobileStepper)(({ theme }) => ({
  padding: '0px',
  marginTop: '1em',
  flexGrow: 1,
  '& .MuiLinearProgress-root': {
    width: '100%',
    height: '3px',
  },
}))
