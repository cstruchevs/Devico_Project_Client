import { Stack, styled } from '@mui/material'

export const StackProfileFormWrapper = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignContet: 'center',
    justifyContet: 'center',
  },
}))

export const StackProfileWrapper = styled(Stack)(({ theme }) => ({
  flexDirection: 'column',
  width: '60%',
  [theme.breakpoints.down('md')]: {
    width: '75%',
    flexDirection: 'column',
    alignContet: 'center',
    justifyContet: 'center',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    flexDirection: 'column',
    alignContet: 'center',
    justifyContet: 'center',
  },
}))

export const StackElement = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignContet: 'center',
    justifyContet: 'center',
  },
}))
