import { Divider, FormControlLabel, Stack, styled } from '@mui/material'

export const MainStackForm = styled(Stack)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  gap: '20px',
  [theme.breakpoints.down('md')]: {
    flexDirectyon: 'column',
    gap: '0px'
  },
}))

export const StackLicenseForm = styled(Stack)({
  height: '500px',
  flexDirection: 'column',
  flexWrap: 'wrap',
  alignContent: 'start',
})

export const FormControlLabelStyled = styled(FormControlLabel)({})

export const DividerCard = styled(Divider)({
  marginTop: '4px',
  marginBottom: '4px',
})

export const DividerPayments = styled(Divider)({
  marginTop: '4px',
  marginBottom: '12px',
})

export const StackCard = styled(Stack)({
  flexDirection: 'row',
  justifyContent: 'space-between',
})
