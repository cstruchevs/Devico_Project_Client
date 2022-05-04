import { Badge, styled, Button, Stack, Typography, Select, Box } from '@mui/material'
import { Link } from 'react-router-dom'

export const StyledBadgeAvatar = styled(Badge)(({ theme }) => ({}))

export const StyledButtonPersonal = styled(Button)(({ theme }) => ({
  marginLeft: '10px',
  marginTop: '5px',
  width: '200px',
  background: theme.palette.primary.dark,
  color: theme.palette.primary.contrastText,
}))

export const InputFile = styled('input')({
  display: 'none',
})

export const StyledStackButton = styled(Stack)({
  width: '350px',
  flexDirection: 'column',
})

export const ProfileConfirmButton = styled(Button)(({ theme }) => ({
  marginTop: '5px',
  marginLeft: '10px',
  width: '300px',
  background: theme.palette.primary.dark,
  color: theme.palette.primary.contrastText,
}))

export const ProfileConfirmBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
}))

export const StyledTypographyProfile = styled(Typography)({
  paddingLeft: '10px',
})

export const TypographyLinkProfile = styled(Typography)(({ theme }) => ({
  color: 'black',
  fontSize: '13px',
  fontWeight: '600',
}))

export const StyledSelectField = styled(Select)({
  margin: '4px 10px 10px 10px',
  borderRadius: '0px',
  maxHeight: '36px',
  width: '93%',
  ' fieldSet': {
    borderRadius: '0px',
  },
  ' select': {
    height: '36px',
  },
})

export const StyledLinkProfile = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.dark,
  fontWeight: "600"
}))
