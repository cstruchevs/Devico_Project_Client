import { styled } from '@mui/material'
import { Box } from '@mui/system'

export const SectionWrappperStyled = styled(Box)(({ theme }) => ({
  wdisplay: 'flex',
  flexFlow: 'column',
  alignItems: "center",
  width: "100%",
  color: theme.palette.common.black,
  marginBlock: "20px",
}))