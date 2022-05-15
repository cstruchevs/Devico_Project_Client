import { Box, styled } from '@mui/material'

export const BackLinkStyled = styled(Box)(({ theme }) => ({
  maxWidth: '120px',
  display: 'flex',
  flexFlow: 'row',
  alignItems: 'baseline',
  color: theme.palette.primary.dark,
  textDecoration: 'none',
  '& p': {
    fontSize: '1.3em',
    marginLeft: '8px',
  },
  '&:hover': {
    textDecoration: 'underline',
    cursor: 'pointer',
  },
}))
