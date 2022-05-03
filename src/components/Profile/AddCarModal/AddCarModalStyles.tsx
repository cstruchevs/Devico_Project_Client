import styled from '@emotion/styled'
import { Button, DialogActions } from '@mui/material'
import { Box } from '@mui/system'

export const AddCarConfirmButtonsBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  width: '100%',
  padding: '10px',
}))

export const AddCarConfirmButton = styled(Button)(({ theme }) => ({
  width: '160px',
  height: '40px',
  background: '#485550',
  color: '#F4F6F0',
  '&:hover': {
    filter: 'brightness(90%)',
    background: '#818684',
    color:'black',
    boxShadow: 'none',
  },
}))

export const AddCarCancelButton = styled(Button)(({ theme }) => ({
  width: '160px',
  height: '40px',
  background: '#fff',
  border: "1px solid #485550",
  color: '#485550',
}))

export const DialogActionsStyled = styled(DialogActions)(({ theme }) => ({
  marginRight: "27px",
  marginBottom: "10px"
}))


