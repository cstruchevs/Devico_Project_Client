import { styled, Paper, Card, Typography, CardContent, Stack, Box } from '@mui/material'
import { Link } from 'react-router-dom'

export const UpcomingEventCardStyled = styled(Card)(({ theme }) => ({
  paddingInline: '40px',
  paddingBlock: '20px',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  
  display: 'flex',
  flexFlow: 'column',
  [theme.breakpoints.down('md')]: {
    paddingInline: '15px',
    paddingBlock: '15px',
  },
  position: "relative",
  color: theme.palette.common.white,
}))

export const CardContentStyled = styled(CardContent)(({ theme }) => ({
  padding: '0px',
  flexGrow: '1',
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'space-between',
  paddingBottom: '30px',
  borderBottomColor: theme.palette.primary.dark,
  borderBottomWidth: '2px',
  borderBottomStyle: 'solid',
}))

export const NextEventPaperStyled = styled(Paper)(({ theme }) => ({
  maxWidth: '180px',
  margin: '20px 0px 30px 0px',
  padding: '8px',
  textAlign: 'center',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.light,
  fontWeight: 'bold',
  [theme.breakpoints.down('md')]: {
    maxWidth: '140px',
    margin: '10px 0px 20px 0px',
    padding: '5px',
  },
}))

export const EventLabelStyled = styled(Typography)(({ theme }) => ({
  fontSize: '20px',
  [theme.breakpoints.down('md')]: {
    fontSize: '17px',
  },
}))

export const TitleStyled = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: 'clamp(1.6rem, 2.5vw, 2.5rem)',
  // [theme.breakpoints.down('md')]: {
  //   fontSize: '1.8rem',
  // },
}))

export const DateAdreesStackStyled = styled(Stack)(({ theme }) => ({
  alignItems: 'baseline',
  flexFlow: 'row wrap',
}))

export const DateStyled = styled(Typography)(({ theme }) => ({
  marginTop: '10px',
  fontWeight: 'bold',
  fontSize: '20px',
  marginRight: '10px',
  [theme.breakpoints.down('md')]: {
    fontSize: '18px',
  },
}))

export const AdressStyled = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '0.9rem',
  },
}))

export const InfoStyled = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '0.9rem',
  },
}))

export const LinkStyled = styled(Link)(({ theme }) => ({
  color: theme.palette.common.white,
  paddingBlock: "10px",
  textDecoration: "none",
  '&:hover': {
    cursor: 'pointer',
    textDecoration: "underline",
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '16px',
  },
}))

export const ActionStackStyled = styled(Stack)(({ theme }) => ({
  alignItems: 'center',
  flexFlow: 'row',
  justifyContent: 'space-between',
  [theme.breakpoints.up('sm')]: {
    paddingBlock: '20px',
    fontSize: '16px',
  },
  [theme.breakpoints.down('sm')]: {
    paddingBlock: '10px',
  },
}))

export const PendingStatusStyled = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 40,
  right: -50,
  transform: "rotate(45deg)",
  backgroundColor: "red",
  width: "200px",
  height: "30px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

}))