import { Typography } from '@mui/material'
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
} from './MainNavigatioStyles'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import React, { FC, memo, useCallback } from 'react'
import { RootState } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { uiActions } from '../../store/ui-slice'
import { IUserInterface } from '../../store/auth'

interface IMainNavigation {}

const MainNavigation: FC<IMainNavigation> = () => {
  const dispatch = useDispatch()

  const [anchorEl, setAnchorEl] = React.useState<SVGSVGElement | null>(null)
  const user = useSelector<RootState, IUserInterface | null>(state => state.auth.user)

  const handleClick = (event: React.MouseEvent<SVGSVGElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const toggleRegHandler = useCallback(() => {
    dispatch(uiActions.toggleReg())
  }, [dispatch])

  const toggleLogHandler = useCallback(() => {
    dispatch(uiActions.toggleLog())
  }, [dispatch])

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    <StyledOuterWarapperBox>
      <StyledAppBar>
        <StyledInnerWarapperBox>
          <StyledMenuBoxNav pr={1} pl={1}>
            {user && (
              <StyledAuthStackWrapper gap={1}>
                <NotificationsNoneOutlinedIcon sx={{ height: '43px' }} />
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
                {user ? (
                  <>
                    <StyledButton size="medium" href="/profile">
                      <StyledLink to="/profile">My Profile</StyledLink>{' '}
                    </StyledButton>
                    <StyledButton size="medium" href="/events">
                      <StyledLink to="/events"> My Events</StyledLink>
                    </StyledButton>
                    <StyledButton size="medium">Sign Out</StyledButton>
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
