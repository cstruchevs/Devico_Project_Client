import { FC, memo, useCallback, useEffect, useMemo } from 'react'
import { Typography, Stack, Box } from '@mui/material'
import {
  StyledNotificationBox,
  StyledNotificationPopover,
  StyledNotificationInnerBox,
  StyledNotificationInnerHeaderStack,
  StyledNotificationsBox,
  StyledNotificaionIconBox,
  StyledNotificaionDivider,
  StyledNotificationsTypography,
  StyledNotificationsMainTypography,
  StyledNotificationsMarkTypography,
} from '../MainNavigatioStyles'
import NotificationsIcon from '@mui/icons-material/Notifications'
import { useDispatch, useSelector } from 'react-redux'
import {
  INotifications,
  notificationActions,
  NotificationStatus,
} from '../../../store/notifications'
import { RootState } from '../../../store'
import NotificationElement from './NotificationElement/NotificationElement'
import { StyledBoxNotification } from './NotificationsStyles'

interface INotification {
  idNotification: 'simple-popover' | undefined
  openNotification: boolean
  anchorElNotification: SVGSVGElement | null
  handleCloseNotification: (event: React.MouseEvent<SVGSVGElement>) => void
}

const Notifications: FC<INotification> = ({
  idNotification,
  openNotification,
  anchorElNotification,
  handleCloseNotification,
}) => {
  const dispatch = useDispatch()

  const notifications = useSelector<RootState, INotifications[]>(
    state => state.notifications.notifications,
  )

  const deleteNotifications = useCallback(() => {
    dispatch(notificationActions.deleteNotifications())
  }, [dispatch])

  const notificationList = (
    <Stack pl={2} pr={2}>
      {notifications.map((el: INotifications, index: number) => {
        return (
          <NotificationElement
            message={el.message}
            status={el.status}
            index={index}
            date={el.date}
            key={index}
          />
        )
      })}
    </Stack>
  )

  return (
    <StyledNotificationPopover
      id={idNotification}
      open={openNotification}
      anchorEl={anchorElNotification}
      onClose={handleCloseNotification}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      PaperProps={{
        style: {
          backgroundColor: 'white',
          overflow: 'visible',
          boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px !important',
          borderRadius: '10px',
          marginTop: '14px',
        },
      }}
    >
      <StyledNotificationBox
        sx={{
          position: 'relative',
          mt: '10px',
          '&::before': {
            backgroundColor: 'white',
            content: '""',
            display: 'block',
            position: 'absolute',
            width: 12,
            height: 12,
            top: -15,
            transform: 'rotate(45deg)',
            left: 'calc(63.5% - 6px)',
            boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px !important',
          },
        }}
      />
      <StyledNotificationInnerBox>
        <StyledNotificationInnerHeaderStack>
          <Typography variant="h6">Notification</Typography>
          <StyledNotificationsMarkTypography onClick={deleteNotifications}>
            Mark all as read
          </StyledNotificationsMarkTypography>
        </StyledNotificationInnerHeaderStack>
        <StyledNotificaionDivider variant="middle" />
        {notifications.length > 0 ? (
          <StyledBoxNotification>{notificationList}</StyledBoxNotification>
        ) : (
          <StyledNotificationsBox>
            <StyledNotificaionIconBox>
              <NotificationsIcon sx={{ fontSize: '24px', color: 'white' }} />
            </StyledNotificaionIconBox>
            <StyledNotificationsMainTypography>
              No notifications yet
            </StyledNotificationsMainTypography>
            <StyledNotificationsTypography>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </StyledNotificationsTypography>
          </StyledNotificationsBox>
        )}
      </StyledNotificationInnerBox>
    </StyledNotificationPopover>
  )
}

export default memo(Notifications)
