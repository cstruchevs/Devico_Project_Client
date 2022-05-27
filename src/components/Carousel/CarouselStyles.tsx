import { styled, Container, MobileStepper, Box } from '@mui/material'

export const ContainerSectionStyled = styled(Box)(({ theme }) => ({
  padding: '0px !important',
  width: '100%',
  marginTop: '50px',
}))

export const ContainerSlideStyled = styled(Box)(({ theme }) => ({
  backgroundColor: 'transparent',
  paddingInline: '0px !important',
  paddingBlock: '5px !important',
  '& > div': {
    marginInline: '15px',
  },
  [theme.breakpoints.down('md')]: {
    '& > div': {
      marginInline: '10px',
    },
  },
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
