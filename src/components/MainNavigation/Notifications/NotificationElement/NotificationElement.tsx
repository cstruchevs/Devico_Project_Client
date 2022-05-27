import { FC, useCallback } from 'react'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined'
import {
  StyledDividerElBox,
  StyledNotificationElBox,
  StyledTypoghraphyDateElBox,
  StyledTypoghraphyElBox,
} from './NotificationElementStyles'
import { IconButton, Stack, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import { notificationActions } from '../../../../store/notifications'
import { Moment } from 'moment'

interface INotificationElement {
  message: string
  status: string
  index: number
  date: Moment
}

interface InotifColors {
  [x: string]: { bgColor: string; borderColor: string }
}

const notifColors: InotifColors = {
  success: {
    bgColor: 'rgba(80, 158, 47, 0.13)',
    borderColor: '1px solid #509E2F',
  },
  pending: {
    bgColor: 'rgba(255, 130, 0, 0.13)',
    borderColor: '1px solid #FF8200',
  },
  error: {
    bgColor: 'rgba(249, 0, 0, 0.13)',
    borderColor: '1px solid #F90000',
  },
  info: {
    bgColor: '#D6D6D6',
    borderColor: '1px solid #6A6968',
  },
}

const NotificationElement: FC<INotificationElement> = ({ message, status, index, date }) => {
  const dispatch = useDispatch()

  const deleteNotificationByIndex = useCallback(() => {
    dispatch(notificationActions.deleteNotificationByIndex({index}))
  }, [dispatch, index])

  return (
    <>
      <Stack>
        <StyledTypoghraphyDateElBox>{date.calendar()}</StyledTypoghraphyDateElBox>
        <StyledNotificationElBox
          key={index}
          sx={{
            background: notifColors[status].bgColor,
            border: notifColors[status].borderColor,
            paddingTop: message.length > 73 ? 3 : 0,
            paddingBottom: message.length > 73 ? 3 : 0,
          }}
        >
          <InfoOutlinedIcon sx={{ height: '24px' }} />
          <StyledTypoghraphyElBox pl={2}>{message}</StyledTypoghraphyElBox>
          <IconButton onClick={deleteNotificationByIndex}>
            <CancelOutlinedIcon sx={{ height: '19px', '&hover': { cursor: 'pointer' } }} />
          </IconButton>
        </StyledNotificationElBox>
      </Stack>
    </>
  )
}

export default NotificationElement
