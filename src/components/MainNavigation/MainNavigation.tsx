import { Divider, Popover, Typography } from '@mui/material'
import {
  StyledPopover,
  StyledButton,
  StyledMenuBoxNav,
  StyledAppBar,
  StyledInnerWarapperBox,
  StyledPopoverStack,
  StyledAuthStack,
  StyledNotificationDivider,
  StyledAuthStackWrapper,
  StyledOuterWarapperBox,
  StyledLink,
  StyledNotificationBox,
  StyledNotificationPopover,
  StyledPageTitle,
  StyledNotificationInnerBox,
  StyledNotificationInnerHeaderStack,
  StyledNotificationsBox,
  StyledNotificaionIconBox,
  StyledNotificaionDivider,
  StyledNotificationsTypography,
  StyledNotificationsMainTypography,
  StyledNotificationsMarkTypography,
} from './MainNavigatioStyles'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import React, { FC, memo, useCallback, useState } from 'react'
import { RootState } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { uiActions } from '../../store/ui-slice'
import { authActions } from '../../store/auth'
import { IUserInterface } from '../../store/auth'
import checkLocalStorage from '../../services/checkLocalStorage'
import { useLocation } from 'react-router-dom'
import { Box } from '@mui/system'
import NotificationsIcon from '@mui/icons-material/Notifications'
import { INotifications } from '../../store/notifications'

interface IMainNavigation {}

const MainNavigation: FC<IMainNavigation> = () => {
  const dispatch = useDispatch()
  let locationPathName = useLocation().pathname

  let locationResultPath = ''
  let n = locationPathName.lastIndexOf('/')
  locationPathName = locationPathName.substring(n + 1)
  locationResultPath = locationPathName.charAt(0).toUpperCase() + locationPathName.slice(1)

  const user = useSelector<RootState, IUserInterface | null>(state => state.auth.user)
  const notifications = useSelector<RootState, INotifications[] | null>(
    state => state.notifications.notifications,
  )

  const [anchorEl, setAnchorEl] = useState<SVGSVGElement | null>(null)
  const [anchorElNotification, setAnchorElNotification] = useState<SVGSVGElement | null>(null)

  const userLocalStorage = checkLocalStorage()

  const handleClick = (event: React.MouseEvent<SVGSVGElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClickNotification = (event: React.MouseEvent<SVGSVGElement>) => {
    setAnchorElNotification(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleCloseNotification = (event: React.MouseEvent<SVGSVGElement>) => {
    setAnchorElNotification(null)
  }

  const logOutUser = useCallback(() => {
    dispatch(authActions.logOutUser())
  }, [dispatch])

  const toggleRegHandler = useCallback(() => {
    dispatch(uiActions.toggleReg())
  }, [dispatch])

  const toggleLogHandler = useCallback(() => {
    dispatch(uiActions.toggleLog())
  }, [dispatch])

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  const openNotification = Boolean(anchorElNotification)
  const idNotification = openNotification ? 'simple-popover' : undefined

  return (
    <StyledOuterWarapperBox>
      <StyledAppBar>
        <StyledInnerWarapperBox>
          <StyledPageTitle>{locationResultPath}</StyledPageTitle>
          <StyledMenuBoxNav pr={1} pl={1}>
            {(user || userLocalStorage) && (
              <StyledAuthStackWrapper gap={1}>
                <NotificationsNoneOutlinedIcon
                  sx={{ height: '43px' }}
                  aria-describedby={idNotification}
                  onClick={handleClickNotification}
                />
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
                      <StyledNotificationsMarkTypography>
                        Mark all as read
                      </StyledNotificationsMarkTypography>
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
                          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </StyledNotificationsTypography>
                      </StyledNotificationsBox>
                    )}
                  </StyledNotificationInnerBox>
                </StyledNotificationPopover>
                <StyledNotificationDivider orientation="vertical" />
                <StyledAuthStack>
                  <Typography sx={{ fontSize: '13px' }}>Welcome! </Typography>
                </StyledAuthStack>
              </StyledAuthStackWrapper>
            )}
            <AccountCircleIcon />
            <KeyboardArrowDownIcon aria-describedby={id} onClick={handleClick} />
            <StyledPopover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
            >
              <StyledPopoverStack>
                {user || userLocalStorage ? (
                  <>
                    <StyledButton size="medium" href="/profile">
                      <StyledLink to="/profile">My Profile</StyledLink>{' '}
                    </StyledButton>
                    <StyledButton size="medium" href="/events">
                      <StyledLink to="/events"> My Events</StyledLink>
                    </StyledButton>
                    <StyledButton onClick={logOutUser} size="medium">
                      Sign Out
                    </StyledButton>
                  </>
                ) : (
                  <>
                    <StyledButton onClick={toggleLogHandler} size="medium">
                      Sign In
                    </StyledButton>
                    <StyledButton onClick={toggleRegHandler} size="medium">
                      Sign Up
                    </StyledButton>
                  </>
                )}
              </StyledPopoverStack>
            </StyledPopover>
          </StyledMenuBoxNav>
        </StyledInnerWarapperBox>
      </StyledAppBar>
    </StyledOuterWarapperBox>
  )
}

export default memo(MainNavigation)
