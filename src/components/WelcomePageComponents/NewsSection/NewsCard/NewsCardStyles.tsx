import { styled, Card } from '@mui/material'

export const CardWrappperStyled = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexFlow: 'column',
  alignItems: "flex-start",
  color: theme.palette.common.black,
  minHeight: "400px",
}))