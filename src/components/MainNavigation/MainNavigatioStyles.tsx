import { AppBar, Box, Button, Divider, Popover, Stack, styled, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export const StyledPageTitle = styled(Typography)(({ theme }) => ({
  color: 'black',
  fontSize: '21px',
  fontWeight: '500',
  paddingLeft: '15px',
}))

export const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.dark,
  '&hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
  },
}))

export const StyledMenuBoxNav = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  height: '100%',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  gap: 1,
  marginLeft: 'auth',
  minWidth: '100px',
}))

export const StyledInnerWarapperBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '100%',
}))

export const StyledNotificationBox = styled(Stack)(({ theme }) => ({
  position: 'relative',
  mt: '10px',
}))

export const StyledNotificationsBox = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 15,
}))

export const StyledNotificationsTypography = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  marginTop: '8px',
  textAlign: 'center',
}))

export const StyledNotificationsMainTypography = styled(Typography)(({ theme }) => ({
  fontSize: '19px',
  fontWeight: '300',
}))

export const StyledNotificationsMarkTypography = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  textDecoration: 'underline',
  color: 'blue',
  '&:hover': {
    cursor: 'pointer',
  },
}))

export const StyledNotificaionIconBox = styled(Box)(({ theme }) => ({
  width: '70px',
  height: '70px',
  background: 'grey',
  borderRadius: '10px',
  transform: 'translate(5%, -55%)',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px !important',
  marginBottom: '-25px',
}))

export const StyledNotificaionDivider = styled(Divider)(({ theme }) => ({
  height: '2px',
}))

export const StyledNotificationInnerBox = styled(Box)(({ theme }) => ({
  width: '450px',
  height: '350px',
}))

export const StyledNotificationInnerHeaderStack = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: 9,
  paddingLeft: 15,
  paddingRight: 15,
}))

export const StyledNotificationPopover = styled(Popover)(({ theme }) => ({
  backgroundColor: 'transparent',
}))

export const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.dark,
}))

export const StyledOuterWarapperBox = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  position: 'fixed',
  right: 0,
  zIndex: 1100,
}))

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'transparent',
  marginLeft: 'auto',
  height: '48px',
  width: 'calc(100% - 70px)',
  left: 0,
  boxShadow: 'none',
  backdropFilter: 'blur( 2.5px )',
}))

export const StyledAuthStackWrapper = styled(Stack)({
  flexDirection: 'row',
  marginRight: '10px',
  alignItems: 'center',
})

export const StyledAuthBoxIconWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  '&:hover': {
    cursor: 'pointer',
  },
})

export const StyledAuthStack = styled(Stack)({
  flexDirection: 'column',
  fontSize: '13px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const StyledPopover = styled(Popover)({
  marginTop: '12.1px',
})

export const StyledPopoverStack = styled(Stack)({
  '& button': {
    width: '135px',
    height: '40px',
    fontSize: '13px',
    borderRadius: '0px',
  },
})

export const StyledNotificationDivider = styled(Divider)({
  background: '#fff',
  height: '48px',
})
