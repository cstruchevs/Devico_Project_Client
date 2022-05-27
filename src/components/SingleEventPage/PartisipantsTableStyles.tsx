import {
  styled,
  Paper,
  Card,
  Typography,
  CardContent,
  Stack,
  Box,
  Button,
  List,
  TableContainer,
  TableCell,
} from '@mui/material'

export const ModalWrapperStyled = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: theme.palette.common.white,
  maxWidth: '650px',
  maxHeight: '450px',
  padding: '2em',
  [theme.breakpoints.down("sm")]: {
    padding: '1em',
  }
}))

export const ModalHeaderStyled = styled(Stack)(({ theme }) => ({
  flexFlow: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '1em',
}))

export const TableWrapperStyled = styled(TableContainer)(({ theme }) => ({
  marginTop: 20,
  maxHeight: 320,
  borderRadius: 10,
}))

export const HeaderCellStyled = styled(TableCell)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.common.white,
}))
