import {
  styled,
  Stack,
  Box,
  Button,
  List,
} from '@mui/material'

export const CardWrapperStyled = styled(Box)(({ theme }) => ({
  width: '100%',
  marginTop: '30px',
  marginBottom: '50px',
}))

export const BottomStackStyled = styled(Stack)(({ theme }) => ({
  width: '100%',
  flexFlow: 'row wrap',
  justifyContent: 'space-between',
}))

export const InfoBoxStyled = styled(Box)(({ theme }) => ({
  flex: '1 1',
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'space-between',
  minHeight: '270px',
  paddingRight: '2em',
  minWidth: '400px',
  marginBottom: '50px',
}))

export const ParticipantsButton = styled(Button)(({ theme }) => ({
  maxWidth: '200px',
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.common.white,
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
  },
}))

export const DetailsBoxStyled = styled(Box)(({ theme }) => ({
  flex: '1 1',
  display: 'flex',
  flexFlow: 'column',
  minHeight: '270px',
  maxHeight: '300px',
}))

export const DetailsListStyled = styled(List)(({ theme }) => ({
  paddingBlock: '20px',
}))

export const FilesListStyled = styled(List)(({ theme }) => ({
  paddingBlock: '20px',
}))

export const ApplyButtonStyled = styled(Button)(({ theme }) => ({
  width: '150px',
  paddingBlock: '5px',
}))
