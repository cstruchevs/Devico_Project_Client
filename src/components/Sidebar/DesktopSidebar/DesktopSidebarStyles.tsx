import { styled, Box } from '@mui/system'

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
  paddingBlock: 0,
  paddingInline: 0,
  zIndex: 2000,
}))
