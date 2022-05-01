import { Drawer, IconButton } from '@mui/material'
import { styled, Box } from '@mui/system'

export const WrapperStyled = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
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
  width: 100,
  display: 'flex',
  flexFlow: 'column',
  alignItems: 'center',
  paddingInline: 0,
  paddingBlock: 0,
}))
