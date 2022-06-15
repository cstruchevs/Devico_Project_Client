import { styled, Button } from '@mui/material'
import moment from 'moment'
import React, { FC, memo, useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { IEvents } from '../../pages/WelcomePage/WelcomePage'
import { RootState } from '../../store'
import { IDriversData } from '../../store/auth'
import { notificationActions, NotificationStatus } from '../../store/notifications'
import { uiActions } from '../../store/ui-slice'
import { ContainerSlideStyled } from '../Carousel/CarouselStyles'
import { ButtonStyled } from './ButtonStyles'
import CancelButton from './CancelButton'

interface IApplyButton {
  eventId: string
}

const ApplyButton: FC<IApplyButton> = ({ eventId }) => {
  const dispatch = useDispatch()
  const user = useSelector<RootState, IDriversData | null>(state => state.auth.user)
  const cars = useSelector((state: RootState) => state.auth.cars)
  const driversData = useSelector<RootState, IDriversData | null>(state => state.auth.driversData)
  const userEvents = useSelector<RootState, IEvents[]>(state => state.events.userEvents)
  const [isUserIn, setIsUserIn] = useState<boolean>(false)

  const checkIsUserIn = useCallback(() => {
    for (let i = 0; i < userEvents.length; i++) {
      if (userEvents[i].event.id === eventId) {
        setIsUserIn(true)
      }
    }
  }, [userEvents, eventId])

  const regToEventHandler = useCallback(() => {
    if (!cars || !driversData || Object.keys(driversData).length === 0 || cars.length === 0) {
      dispatch(
        notificationActions.setNotification({
          notification: {
            message:
              'You cannot apply because you do not have information in "my cars", "drivers". To fill in the data go to the profile section',
            status: NotificationStatus.info,
            date: moment(),
          },
        }),
      )
    } else {
      dispatch(uiActions.toggleEventRegister({ eventId: eventId }))
    }
  }, [dispatch, cars, driversData, eventId])

  const openLogForm = useCallback(() => {
    dispatch(uiActions.toggleLog())
  }, [dispatch])

  useEffect(() => {
    checkIsUserIn()
  }, [checkIsUserIn])

  return (
    <>
      {user ? (
        isUserIn ? (
          <CancelButton eventId={eventId} />
        ) : (
          <ButtonStyled variant="contained" onClick={regToEventHandler}>
            Apply event
          </ButtonStyled>
        )
      ) : (
        <ButtonStyled variant="contained" onClick={openLogForm}>
          Sign in to apply
        </ButtonStyled>
      )}
    </>
  )
}

export default memo(ApplyButton)
