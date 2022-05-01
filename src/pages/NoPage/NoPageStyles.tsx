import { Button, Stack, Typography } from '@mui/material'
import { styled, Box } from '@mui/system'

export const MainBoxStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexFlow: "column",
  height: "100vh",
}))

export const BoxInnerStyled = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexFlow: "column",
    textAlign: "center"
  }))