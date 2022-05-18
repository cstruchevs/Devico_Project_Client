import { FC } from 'react'
import { Divider, Popover, Typography } from '@mui/material'
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
import { INotifications } from '../../../store/notifications'
import { RootState } from '../../../store'

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
  const notifications = useSelector<RootState, INotifications[] | null>(
    state => state.notifications.notifications,
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
          marginTop: '10px',
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
            left: 'calc(57.5% - 6px)',
            boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px !important',
          },
        }}
      />
      <StyledNotificationInnerBox>
        <StyledNotificationInnerHeaderStack>
          <Typography variant="h6">Notification</Typography>
          <StyledNotificationsMarkTypography>Mark all as read</StyledNotificationsMarkTypography>
        </StyledNotificationInnerHeaderStack>
        <StyledNotificaionDivider variant="middle" />
        {notifications ? null : (
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

export default Notifications
