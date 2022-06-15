import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { FC, memo, MouseEvent, useCallback, useEffect, useState } from 'react'
import {
  AllEventsStack,
  BowOuterStyled,
  HeaderStackStyled,
  ToolButtonStyled,
  ToolStackStyled,
} from './AllEventsStyles'
import SortIcon from '@mui/icons-material/Sort'
import FilterAltIcon from '@mui/icons-material/FilterAlt'
import SmallEventCard from '../SmallEventCard/SmallEventCard'
import BackButton from '../BackButton/BackButton'
import { IEvents } from '../../pages/WelcomePage/WelcomePage'
import axios from 'axios'
import EventsSortPoper from './EventsSortPoper'
import ApplyButton from '../EventButtons/ApplyButton'

export enum EventEnum {
  upcoming = 'upcoming',
  years = 'years',
}
interface IAllEvents {
  type: EventEnum
}

const AllEvents: FC<IAllEvents> = ({ type }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const [openSort, setOpenSort] = useState<boolean>(false)
  const [filter, setFilter] = useState<string>('category')
  const [sort, setSort] = useState<string>('start')
  const [events, setEvents] = useState<IEvents[]>([])
  const [pageTitle, setPageTitle] = useState<string>('')

  const toggleSortPoperHandler = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
    setOpenSort(prev => !prev)
  }, [])

  const changeSortValueHandler = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      if (event.currentTarget.value !== sort) {
        setEvents(events => events.reverse())
        setSort(event.currentTarget.value)
      }
      setOpenSort(prev => !prev)
    },
    [sort],
  )

  const getUpcomngEventsHandler = useCallback(async () => {
    const reqData = await axios.get('http://localhost:5000/events/')
    const sortedEvents = reqData.data.sort((a: IEvents, b: IEvents) => {
      return new Date(a.event.date).getTime() - new Date(b.event.date).getTime()
    })

    const today = new Date()
    const tmpUpcoming: IEvents[] = []
    for (let i = 0; i < sortedEvents.length; i++) {
      if (new Date(sortedEvents[i].event.date) >= today) {
        tmpUpcoming.push(sortedEvents[i])
      }
    }
    setEvents(tmpUpcoming)
  }, [])

  const getYearsEventsHandler = useCallback(async () => {
    const reqData = await axios.get('http://localhost:5000/events/yearsEvents')
    setEvents(reqData.data)
  }, [])

  useEffect(() => {
    switch (type) {
      case 'upcoming':
        getUpcomngEventsHandler()
        setPageTitle('Upcoming events')
        break
      case 'years':
        getYearsEventsHandler()
        setPageTitle('Events for this year')
        break
      default:
        break
    }
  }, [type, getUpcomngEventsHandler, getYearsEventsHandler])

  return (
    <Box width="100%" sx={{ paddingBottom: '50px' }}>
      <EventsSortPoper
        open={openSort}
        anchorEl={anchorEl}
        changeSortValue={changeSortValueHandler}
      />
      <BackButton />
      <HeaderStackStyled>
        <Typography variant="h4">{pageTitle}</Typography>
        <ToolStackStyled>
          <ToolButtonStyled onClick={toggleSortPoperHandler}>
            <SortIcon />
            <Typography>Sort</Typography>
          </ToolButtonStyled>
          <ToolButtonStyled>
            <FilterAltIcon />
            <Typography>Filter</Typography>
          </ToolButtonStyled>
        </ToolStackStyled>
      </HeaderStackStyled>

      <AllEventsStack>
        {events.map((event: IEvents) => {
          const date = new Date(event.event.date)
          return (
            <BowOuterStyled key={event.event.id}>
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
                button={<ApplyButton eventId={event.event.id} />}
              />
            </BowOuterStyled>
          )
        })}
      </AllEventsStack>
    </Box>
  )
}

export default memo(AllEvents)
