import styled from '@emotion/styled'
import { Box, Stack, Typography } from '@mui/material'

export const StyledBox = styled(Box)({
  minWidth: '300px',
})

export const StyledStack = styled(Stack)({
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})

export const StyledTypographyTitle = styled(Typography)({
  marginBottom: "12px",
  fontSize: "25px",
  fontWeight: "600",
  letterSpacing: '1.5px'
})
