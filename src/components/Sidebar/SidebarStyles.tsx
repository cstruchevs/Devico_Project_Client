import { Button, Stack, Typography, Link as LinkMui } from '@mui/material'
import { styled, Box } from '@mui/system'
import { Link as LinkScroll } from 'react-scroll'
import { Link as LinkRouter } from 'react-router-dom'

export const LogoBoxStyled = styled(Box)(({ theme }) => ({
  marginTop: 5,
  padding: 5,
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.common.white,
  '&:hover': {
    cursor: 'pointer',
  },
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

export const SidebarButtonStyled = styled(Button)(({ theme }) => ({
  width: '100%',
  padding: 0,
  marginBottom: 1,
}))

export const SidebarNavStyled = styled(LinkRouter)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  fontWeight: 'normal',
  fontSize: 10,
  textDecoration: 'none',
  paddingBlock: 5,
  color: theme.palette.common.white,
  backgroundColor: '#828c88',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease-in-out',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}))

export const SidebarLinkStyled = styled(LinkRouter)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  fontWeight: 'normal',
  fontSize: 10,
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
