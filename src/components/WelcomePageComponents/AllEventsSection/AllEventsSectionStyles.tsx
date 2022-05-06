import { Paper, styled, TableCell, Typography } from '@mui/material'
import { Box } from '@mui/system'

export const SectionWrappperStyled = styled(Box)(({ theme }) => ({
  wdisplay: 'flex',
  flexFlow: 'column',
  alignItems: "center",
  width: "100%",
  color: theme.palette.common.black,
  marginBlock: "30px",
}))

export const SectionHeaderStyled= styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(1.8rem, 2.5vw, 2.75rem)',
}))

export const TableContainerStyled = styled(Paper)(({ theme }) => ({
  width: "100%",
  marginTop: "20px",
  minHeight: "375px",
  overflowX: "auto",
}))

export const HeaderCellStyled = styled(TableCell)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.common.white,
}))

export const PaginationPaperStyled = styled(Paper)(({ theme }) => ({
  width: "100%",
  paddingBlock: "15px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}))