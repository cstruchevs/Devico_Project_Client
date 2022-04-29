import { Drawer, IconButton, Stack, Typography } from '@mui/material'
import { styled, Box } from '@mui/system'
import { Link as LinkScroll } from 'react-scroll'
import { Link as LinkRouter } from 'react-router-dom'

export const WrapperStyled = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  padding: 0,
  zIndex: 1199,
}))

export const MenuButtonStyled = styled(IconButton)(({ theme }) => ({
  color: theme.palette.primary.dark,
}))

export const DrawerStyled = styled(Drawer)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
}))

export const MenuCloseButtonStyled = styled(IconButton)(({ theme }) => ({
  color: theme.palette.primary.dark,
  alignSelf: 'flex-end',
}))

export const SidebarBoxStyled = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  width: 130,
  display: 'flex',
  flexFlow: 'column',
  alignItems: 'center',
  paddingInline: 0,
  paddingBlock: 0,
}))

export const LogoBoxStyled = styled(Box)(({ theme }) => ({
  padding: 5,
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.common.white,
}))

export const ToolbarStyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexFlow: 'column',
  flexGrow: 1,
  justifyContent: 'space-between',
  width: '100%',
}))

export const TopMenuStackStyled = styled(Stack)(({ theme }) => ({
  marginTop: 20,
  display: 'flex',
  flexFlow: 'column',
}))
export const BottomMenuStackStyled = styled(Stack)(({ theme }) => ({
  display: 'flex',
  flexFlow: 'column',
}))
export const SidebarButtonStyled = styled(LinkScroll)(({ theme }) => ({
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  fontSize: 12,
  paddingBlock: 5,
  color: theme.palette.common.white,
  backgroundColor: '#828c88',
  marginBottom: 1,
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}))

export const SidebarLinkStyled = styled(LinkRouter)(({ theme }) => ({
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  fontSize: 12,
  paddingBlock: 5,
  color: theme.palette.common.white,
  backgroundColor: '#828c88',
  marginBottom: 1,
  cursor: 'pointer',
  textDecoration: 'none',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}))

export const SidebarIconTextStyled = styled(Typography)(({ theme }) => ({
  fontSize: 12,
}))
