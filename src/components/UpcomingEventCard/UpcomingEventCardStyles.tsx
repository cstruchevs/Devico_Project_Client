import { styled, Paper, Card, Typography, CardContent, Link, Stack } from '@mui/material'

export const UpcomingEventCardStyled = styled(Card)(({ theme }) => ({
  marginInline: '15px',
  paddingInline: '40px',
  paddingBlock: '20px',
  marginTop: '50px',
  minHeight: '500px',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  flexFlow: 'column',
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

export const NextEventPaper = styled(Paper)(({ theme }) => ({
  maxWidth: '180px',
  margin: '20px 0px 30px 0px',
  padding: '8px',
  textAlign: 'center',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.light,
  fontWeight: 'bold',
}))

export const TitleStyled = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  [theme.breakpoints.down('md')]: {
    fontSize: '2rem',
  },
}))

export const DateStyled = styled(Typography)(({ theme }) => ({
  marginTop: '10px',
  fontWeight: 'bold',
  fontSize: '20px',
}))

export const AdressStyled = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
  marginLeft: '10px',
  [theme.breakpoints.down('md')]: {
    fontSize: '1rem',
  },
  [theme.breakpoints.down('sm')]: {
    marginLeft: '0px',
  },
}))

export const InfoStyled = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '1rem',
  },
}))

export const LinkStyled = styled(Link)(({ theme }) => ({
  color: theme.palette.common.black,
  '&:hover': {
    cursor: 'pointer',
  },
}))

export const ActionStackStyled = styled(Stack)(({ theme }) => ({
  alignItems: 'center',
  justifyContent: 'space-between',
  [theme.breakpoints.up('sm')]: {
    flexFlow: 'row',
    paddingBlock: '20px',
  },
  [theme.breakpoints.down('sm')]: {
    flexFlow: 'column',
    paddingBlock: '10px',
  },
}))
