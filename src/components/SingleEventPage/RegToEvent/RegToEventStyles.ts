import {
  styled,
  Typography,
  Stack,
  Box,
  TableContainer,
  TableCell,
  DialogContentText,
} from '@mui/material'

export const WrapperBoxStyled = styled(Box)(({ theme }) => ({
  width: '90%',
  margin: 'auto',
  display: 'flex',
  flexFlow: 'column',
  padding: '30px 30px',
  gap: '20px',
}))

export const DialogContentTextStyled = styled(DialogContentText)(({ theme }) => ({
  fontSize: '13px',
}))
