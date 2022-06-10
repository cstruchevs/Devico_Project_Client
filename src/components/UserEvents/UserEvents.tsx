import { Box, Stack, Typography } from '@mui/material'
import React, { FC, memo, MouseEvent, useCallback, useEffect, useState } from 'react'
import BackButton from '../BackButton/BackButton'
import {
  BoxOuterStyled,
  HeaderStackStyled,
  ToolButtonStyled,
  ToolStackStyled,
  UserEventsStack,
} from './UserEventsStyles'
import FilterAltIcon from '@mui/icons-material/FilterAlt'
import { IEvents } from '../../pages/WelcomePage/WelcomePage'
import axios from 'axios'
import SmallEventCard from '../SmallEventCard/SmallEventCard'
import { useDispatch } from 'react-redux'
import { uiActions } from '../../store/ui-slice'
import CancelButton from '../EventButtons/CancelButton'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { sagaActions } from '../../store/sagaActions'
import NoEvents from '../../assets/imgs/NoEvents.jpg'

interface IUserEvents {}

export enum UserEventsFilter {
  all = 'All Events',
  finished = 'Finished',
  pending = 'Pending',
  declined = 'Declined',
  approved = 'Approved',
}

const UserEvents: FC<IUserEvents> = () => {
  const dispatch = useDispatch()

  const [filter, setFilter] = useState<UserEventsFilter | null>(null)
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const [openFilter, setOpenFilter] = useState<boolean>(false)
  const auth = useSelector((state: RootState) => state.auth)
  const userEvents = useSelector((state: RootState) => state.events.userEvents)

  const toggleFilterPoperHandler = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
    setOpenFilter(prev => !prev)
  }, [])

  const changeFilterValueHandler = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      if (event.currentTarget.value !== filter) {
        setFilter(event.currentTarget.value as UserEventsFilter)
      }
      setOpenFilter(prev => !prev)
    },
    [filter],
  )

  useEffect(() => {
    dispatch({
      type: sagaActions.GET_USER_EVENTS,
      payload: { userId: auth?.user?.id, token: auth?.token },
    })
  }, [dispatch, auth?.user?.id, auth?.token])

  return (
    <Box width="100%" sx={{ paddingBottom: '50px' }}>
      <BackButton />
      <HeaderStackStyled>
        <Stack gap="10px" direction="row" alignItems="baseline">
          <Typography variant="h4">My events</Typography>
          <Typography variant="subtitle1">for the current year</Typography>
        </Stack>
        <ToolStackStyled>
          <ToolButtonStyled>
            <FilterAltIcon />
            <Typography>Filter</Typography>
          </ToolButtonStyled>
        </ToolStackStyled>
      </HeaderStackStyled>
      <UserEventsStack>
        {userEvents.length === 0 ? (
          <div>No events</div>
        ) : (
          userEvents.map((event: IEvents) => {
            const date = new Date(event.event.date)
            return (
              <BoxOuterStyled key={event.event.id}>
                <SmallEventCard
                  eventLabel="Next Event"
                  title={event.event.name}
                  date={`${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`}
                  address={event.event.place}
                  backgroundImage={event.url}
                  discipline={event.event.discipline}
                  status={event.event.status}
                  series={event.event.series}
                  eventId={event.event.id}
                  button={<CancelButton eventId={event.event.id} />}
                />
              </BoxOuterStyled>
            )
          })
        )}
      </UserEventsStack>
    </Box>
  )
}

export default memo(UserEvents)
