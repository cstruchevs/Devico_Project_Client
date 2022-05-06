import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from '@mui/material'
import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { RootState } from '../../../store'
import { uiActions } from '../../../store/ui-slice'
import { ConfirmStyledButton } from '../../Auth/AuthStyles'
import { DialogContentStyled } from './CongratAddCarStyles'

const CongratModalCar = () => {
  const dispatch = useDispatch()

  const showCongratAddCar = useSelector<RootState, boolean>(state => state.ui.showCongratAddCar)

  const toggleHandler = (data: object) => {
    dispatch(uiActions.toggleCongratAddCar())
  }

  return (
    <Dialog open={showCongratAddCar} onClose={toggleHandler}>
      <DialogTitle sx={{ width: '100%', margin: 'auto' }}>
        <Typography sx={{ fontWeight: 'bold' }}>Your form was successfully submitted!</Typography>
      </DialogTitle>
      <DialogContentStyled>
        <DialogContentText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </DialogContentText>
      </DialogContentStyled>
      <DialogActions sx={{ dislpay: 'flex', justifyContent: 'start' }}>
        <ConfirmStyledButton
          sx={{ width: '35%', marginRight: 'auto' }}
          variant="contained"
          onClick={toggleHandler}
        >
          Cancel
        </ConfirmStyledButton>
      </DialogActions>
    </Dialog>
  )
}

export default memo(CongratModalCar)
