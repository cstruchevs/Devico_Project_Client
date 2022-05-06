import { styled, Stack, Typography, Button, Link } from '@mui/material'
import { Box } from '@mui/system'

export const SectionWrappperStyled = styled(Box)(({ theme }) => ({
  wdisplay: 'flex',
  flexFlow: 'row',
  paddingRight: "0px !important",
  paddingTop: "0px !important",
}))

export const InfoStackStyled = styled(Stack)(({ theme }) => ({
  width: '50%',
  flexDirection: 'column',
  justifyContent: 'center',
}))

export const WelcomTextStyled = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(1.8rem, 4vw, 4rem)',
}))

export const WelcomSubTextStyled = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(1rem, 2vw, 1.5rem)',
  color: theme.palette.primary.dark,
  marginTop: "10px",
}))

export const ButtonsStack = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  width: '100%',
  marginTop: '20px',
}))

export const ButtonStyled = styled(Button)(({ theme }) => ({
  width: 'clamp(90px, 30%, 150px)',
  '&:last-child': {
    marginLeft: '1em',
  },
}))

export const LinkStyled = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.dark,
}))

export const ImageStackStyled = styled(Stack)(({ theme }) => ({
  width: '50%',
  flexDirection: 'column',
  position: 'relative',
}))

export const ImageBox = styled(Box)(({ theme }) => ({
  width: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: '65vh',
}))

export const NextEventBoxStyled = styled(Box)(({ theme }) => ({
  minWidth: '65%',
  position: 'absolute',
  top: '60%',
  right: 0,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  display: 'flex',
  flexFlow: 'column',
  padding: '1.5em',
}))

export const NextEventLabelStyled = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  color: theme.palette.primary.main,
  width: 120,
  padding: '8px',
  textAlign: 'center',
  fontWeight: 'bold',
}))

export const TitleStyled = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(1rem, 2.5vw, 2rem)',
  fontWeight: 'bold',
  marginTop: 20,
}))

export const DatePositionStackStyled = styled(Stack)(({ theme }) => ({
  marginTop: 20,
  flexDirection: 'column',
}))

export const DateStyled = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(0.6rem, 1.2vw, 1.2rem)',
  fontWeight: 'bold',
  marginTop: 20,
}))

export const PositionStyled = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(0.6rem, 1vw, 1rem)',
}))

export const EventLinkStyled = styled(Link)(({ theme }) => ({
  fontSize: 'clamp(0.6rem, 1vw, 1rem)',
  color: theme.palette.common.white,
}))
