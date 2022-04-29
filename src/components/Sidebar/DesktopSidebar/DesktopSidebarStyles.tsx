import { Stack, Typography } from '@mui/material'
import { styled, Box } from '@mui/system'
import { Link as LinkScroll } from 'react-scroll'
import { Link as LinkRouter } from 'react-router-dom'

export const SidebarBoxStyled = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  position: 'fixed',
  width: 70,
  top: 0,
  left: 0,
  backgroundColor: theme.palette.primary.light,
  display: 'flex',
  flexFlow: 'column',
  alignItems: 'center',
  paddingBlock: 10,
  paddingInline: 0,
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
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
  justifyContent: "space-between",
}))

export const TopMenuStackStyled = styled(Stack)(({ theme }) => ({
  marginTop: 10,
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
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  fontSize: 12,
  paddingBlock: 5,
  color: theme.palette.common.white,
  backgroundColor: '#828c88',
  marginBottom: 1,
  cursor: "pointer",
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}))

export const SidebarLinkStyled = styled(LinkRouter)(({ theme }) => ({
    display: 'flex',
    flexFlow: 'column',
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: 12,
    paddingBlock: 5,
    color: theme.palette.common.white,
    backgroundColor: '#828c88',
    marginBottom: 1,
    cursor: "pointer",
    textDecoration: "none",
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  }))

export const SidebarIconTextStyled = styled(Typography)(({ theme }) => ({
  fontSize: 12,
}))
