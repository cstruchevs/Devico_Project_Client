import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
} from '@mui/material'
import { Box } from '@mui/system'
import React, { ChangeEvent, useCallback, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { RootState } from '../../store'
import { sagaActions } from '../../store/sagaActions'
import { uiActions } from '../../store/ui-slice'
import { TextareaAutosizeStyled } from './CancelEventStyles'

const CancelEvent = () => {
  const dispatch = useDispatch()
  const isShowEventCancel: boolean = useSelector((state: RootState) => state.ui.eventCancel)
  const cancelEventId: string | null = useSelector((state: RootState) => state.ui.eventCancelId)
  const [reason, setReason] = useState<string>('')

  const handleClose = useCallback(() => {
    dispatch(uiActions.toggleEventCancel({ eventId: null }))
  }, [dispatch])

  const changeReasonHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setReason(event.target.value)
  }

  const cancelEventHAndler = useCallback(() => {
    dispatch({
      type: sagaActions.CANCEL_EVENT,
      payload: { eventId: cancelEventId, reason: reason },
    })
    setReason('')
    handleClose()
  }, [dispatch, cancelEventId, reason, handleClose])

  return (
    <Dialog open={isShowEventCancel} onClose={handleClose}>
      <Box sx={{ minWidth: '350px' }}>
        <DialogTitle>Cancel event participation</DialogTitle>
        <Divider />
        <DialogContent>
          <DialogContentText>Reson input</DialogContentText>
          <TextareaAutosizeStyled
            placeholder=""
            style={{}}
            minRows={6}
            required
            value={reason}
            onChange={changeReasonHandler}
          />
          <Button variant="contained" onClick={cancelEventHAndler}>
            Cancel Event participation
          </Button>
        </DialogContent>
      </Box>
    </Dialog>
  )
}

export default CancelEvent
