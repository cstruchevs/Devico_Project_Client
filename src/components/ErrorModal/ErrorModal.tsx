import {
  ButtonBase,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { uiActions } from '../../store/ui-slice'

interface IErrorModal {}

const ErrorModal: FC<IErrorModal> = () => {
  const dispatch = useDispatch()
  const alertDialogIsShown = useSelector<RootState, boolean>(state => state.ui.alertDialog)

  const handleClose = () => [dispatch(uiActions.toggleAlertDialog())]
  return (
    <Dialog
      open={alertDialogIsShown}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{'Invalid Authentication'}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">Try Again!</DialogContentText>
      </DialogContent>
      <DialogActions>
        <ButtonBase onClick={handleClose} autoFocus>
          Cancel
        </ButtonBase>
      </DialogActions>
    </Dialog>
  )
}

export default ErrorModal
