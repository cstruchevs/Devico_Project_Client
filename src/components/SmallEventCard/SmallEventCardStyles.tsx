import { styled, Paper, Card, Typography, CardContent, Stack, Box } from '@mui/material'
import { Link } from 'react-router-dom'

export const UpcomingEventCardStyled = styled(Card)(({ theme }) => ({
  paddingInline: '15px',
  paddingBlock: '15px',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  flexFlow: 'column',
  position: 'relative',
}))

export const CardContentStyled = styled(CardContent)(({ theme }) => ({
  padding: '0px',
  flexGrow: '1',
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'space-between',
  paddingBottom: '25px',
  borderBottomColor: theme.palette.primary.dark,
  borderBottomWidth: '2px',
  borderBottomStyle: 'solid',
}))

export const NextEventPaperStyled = styled(Paper)(({ theme }) => ({
  maxWidth: '140px',
  margin: '10px 0px 20px 0px',
  padding: '5px',
  textAlign: 'center',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.light,
  fontWeight: 'bold',
}))

export const EventLabelStyled = styled(Typography)(({ theme }) => ({
  fontSize: '17px',
}))

export const TitleStyled = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: 'clamp(1.6rem, 50%, 2.1rem)',
}))

export const DateAdreesStackStyled = styled(Stack)(({ theme }) => ({
  alignItems: 'baseline',
  flexFlow: 'row wrap',
}))

export const DateStyled = styled(Typography)(({ theme }) => ({
  marginTop: '10px',
  fontWeight: 'bold',
  fontSize: '18px',
  marginRight: '10px',
}))

export const AdressStyled = styled(Typography)(({ theme }) => ({
  fontSize: '0.9rem',
}))

export const InfoStyled = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
}))

export const LinkStyled = styled(Link)(({ theme }) => ({
  color: theme.palette.common.black,
  paddingBlock: '10px',
  textDecoration: 'none',
  fontSize: '16px',
  '&:hover': {
    cursor: 'pointer',
    textDecoration: 'underline',
  },
}))

export const ActionStackStyled = styled(Stack)(({ theme }) => ({
  alignItems: 'center',
  flexFlow: 'row',
  justifyContent: 'space-between',
  paddingBlock: '10px',
  fontSize: '16px',
}))

export const PendingStatusStyled = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 40,
  right: -50,
  transform: 'rotate(45deg)',
  backgroundColor: 'red',
  width: '200px',
  height: '30px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}))
