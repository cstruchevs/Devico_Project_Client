import { Button, Fade, Popper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react'
import {
  AllEventsStack,
  BowOuterStyled,
  HeaderStackStyled,
  SortPaperStyled,
  ToolButtonStyled,
  ToolStackStyled,
} from './UpcomingEventsStyles'
import SortIcon from '@mui/icons-material/Sort'
import FilterAltIcon from '@mui/icons-material/FilterAlt'
import SmallEventCard from '../SmallEventCard/SmallEventCard'
import BackButton from '../BackButton/BackButton'
import { IEvents } from '../../pages/WelcomePage/WelcomePage'
import axios from 'axios'

const UpcomingEvents = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const [openSort, setOpenSort] = useState<boolean>(false)
  const [sort, setSort] = useState<string>('recent')
  const [filter, setFilter] = useState<string>('category')
  const [upcomingEvents, setUpcomingEvents] = useState<IEvents[]>([])

  const sortPoperHandler = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
    setOpenSort(prev => !prev)
  }, [])

  const changeSortValueHandler = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setOpenSort(prev => !prev)
      setSort(event.currentTarget.value)
      if (event.currentTarget.value === 'recent') {
        setUpcomingEvents(
          upcomingEvents.sort((a: IEvents, b: IEvents) => {
            return new Date(a.event.date).getTime() - new Date(b.event.date).getTime()
          }),
        )
      } else {
        setUpcomingEvents(
          upcomingEvents.sort((a: IEvents, b: IEvents) => {
            return new Date(b.event.date).getTime() - new Date(a.event.date).getTime()
          }),
        )
      }
    },
    [upcomingEvents],
  )

  const getEventsHandler = useCallback(async () => {
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
    setUpcomingEvents(tmpUpcoming)
  }, [])

  const sortPoper = useMemo(() => {
    return (
      <Popper open={openSort} anchorEl={anchorEl} placement="bottom-end" transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <SortPaperStyled>
              <Button size="medium" value="recent" onClick={changeSortValueHandler}>
                Recent
              </Button>
              <Button size="medium" value="far" onClick={changeSortValueHandler}>
                Far
              </Button>
            </SortPaperStyled>
          </Fade>
        )}
      </Popper>
    )
  }, [openSort, anchorEl, changeSortValueHandler])

  const ButtonReg = (eventId: string) => (
    <Button
      sx={{ width: '130px', paddingBlock: '5px' }}
      variant="contained"
      href={`/event/${eventId}`}
    >
      Register
    </Button>
  )

  useEffect(() => {
    getEventsHandler()
  }, [getEventsHandler])

  return (
    <Box width="100%" sx={{ paddingBottom: '50px' }}>
      {sortPoper}
      <BackButton />
      <HeaderStackStyled>
        <Typography variant="h4">Upcoming Events</Typography>
        <ToolStackStyled>
          <ToolButtonStyled onClick={sortPoperHandler}>
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
        {upcomingEvents.map(event => {
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
                button={ButtonReg(event.event.id)}
              />
            </BowOuterStyled>
          )
        })}
      </AllEventsStack>
    </Box>
  )
}

export default memo(UpcomingEvents)
