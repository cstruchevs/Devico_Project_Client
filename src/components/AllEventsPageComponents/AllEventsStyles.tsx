import { Button, Paper, Stack, styled, TableCell, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Link } from 'react-router-dom'

export const BackLinkStyled = styled(Link)(({ theme }) => ({
  maxWidth: '120px',
  display: 'flex',
  flexFlow: 'row',
  alignItems: 'baseline',
  color: theme.palette.primary.dark,
  textDecoration: 'none',
  '& p': {
    fontSize: '1.3em',
    marginLeft: '8px',
  },
  '&:hover': {
    textDecoration: 'underline',
  },
}))

export const HeaderStackStyled = styled(Stack)(({ theme }) => ({
  width: '100%',
  flexFlow: 'row',
  alignItems: 'baseline',
  justifyContent: 'space-between',
  color: theme.palette.common.black,
  marginBlock: '10px',
}))

export const ToolStackStyled = styled(Stack)(({ theme }) => ({
  flexFlow: 'row',
}))

export const ToolButtonStyled = styled(Button)(({ theme }) => ({
  display: 'flex',
  flexFlow: 'row',
  marginLeft: '5px',
  color: theme.palette.common.black,
  '& p': {
    marginLeft: '5px',
  },
}))

export const SortPaperStyled = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexFlow: 'column',
  minWidth: '150px',
  '& button': {
    color: theme.palette.common.black,
  },
}))

export const AllEventsStack = styled(Stack)(({ theme }) => ({
  width: '100%',
  marginTop: '34px',
  flexFlow: 'row wrap',
  gap: '1rem',
}))

export const BowOuterStyled = styled(Box)(({ theme }) => ({
  fontSize: '12px',
  flex: '1 1 100%',
  [theme.breakpoints.up(850)]: {
    flexBasis: 'calc((100% / 2) - 1rem)',
  },
  [theme.breakpoints.up(1300)]: {
    flexBasis: 'calc((100% / 3) - 2rem)',
  },
}))
