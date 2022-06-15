import { Button } from '@mui/material'
import React, { FC, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { uiActions } from '../../store/ui-slice'
import { ButtonStyled } from './ButtonStyles'

interface ICancelButton {
  eventId: string
}

const CancelButton: FC<ICancelButton> = ({ eventId }) => {
  const dispatch = useDispatch()

  const cancelEventHandler = useCallback(() => {
    dispatch(uiActions.toggleEventCancel({ eventId: eventId }))
  }, [dispatch, eventId])

  return (
    <ButtonStyled onClick={cancelEventHandler} variant="contained">
      Cancel event
    </ButtonStyled>
  )
}

export default CancelButton
