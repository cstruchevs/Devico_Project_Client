import { AppBar, Box, Button, Divider, Popover, Stack, styled } from '@mui/material'

export const StyledButton = styled(Button)({
  color: 'rgba(0, 0, 0, 0.56)',
  '&hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
  },
})

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
  justifyContent: 'flex-end',
  height: '100%',
}))

export const StyledOuterWarapperBox = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  position: 'fixed',
  right: 0,
  zIndex: 1999,
}))

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'transparent',
  height: '50px',
  left: 0,
  boxShadow: 'None',
  backdropFilter: 'blur( 2.5px )',
}))

export const StyledAuthStackWrapper = styled(Stack)({
  flexDirection: 'row',
  marginRight: '10px',
})

export const StyledAuthStack = styled(Stack)({
  flexDirection: 'column',
  fontSize: '13px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const StyledPopover = styled(Popover)({
  marginTop: '10.1px',
  marginLeft: '15px',
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
  height: '43px',
})
