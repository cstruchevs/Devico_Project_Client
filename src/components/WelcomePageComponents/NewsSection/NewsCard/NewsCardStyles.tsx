import { styled, Stack, Card } from '@mui/material'
import { Box } from '@mui/system'

export const CardWrappperStyled = styled(Card)(({ theme }) => ({
  wdisplay: 'flex',
  flexFlow: 'column',
  alignItems: "flex-start",
  color: theme.palette.common.black,
  minHeight: 200,
}))