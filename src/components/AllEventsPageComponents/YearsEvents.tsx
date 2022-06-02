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
} from './YearsEventsStyles'
import SortIcon from '@mui/icons-material/Sort'
import FilterAltIcon from '@mui/icons-material/FilterAlt'
import SmallEventCard from '../SmallEventCard/SmallEventCard'
import BackButton from '../BackButton/BackButton'
import { IEvents } from '../../pages/WelcomePage/WelcomePage'
import axios from 'axios'

const YearsEvents = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const [openSort, setOpenSort] = useState<boolean>(false)
  const [sort, setSort] = useState<string>('start')
  const [filter, setFilter] = useState<string>('category')
  const [yearsEvents, setYearsEvents] = useState<IEvents[]>([])

  const sortPoperHandler = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
    setOpenSort(prev => !prev)
  }, [])

  const changeSortValueHandler = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setOpenSort(prev => !prev)
      setSort(event.currentTarget.value)
      if (event.currentTarget.value === 'start') {
        setYearsEvents(
          yearsEvents.sort((a: IEvents, b: IEvents) => {
            return new Date(a.event.date).getTime() - new Date(b.event.date).getTime()
          }),
        )
      } else {
        setYearsEvents(
          yearsEvents.sort((a: IEvents, b: IEvents) => {
            return new Date(b.event.date).getTime() - new Date(a.event.date).getTime()
          }),
        )
      }
    },
    [yearsEvents],
  )

  const getEventsHandler = useCallback(async () => {
    const reqData = await axios.get('http://localhost:5000/events/yearsEvents')
    const sortedEvents = reqData.data.sort((a: IEvents, b: IEvents) => {
      return new Date(a.event.date).getTime() - new Date(b.event.date).getTime()
    })
    setYearsEvents(sortedEvents)
  }, [])

  const sortPoper = useMemo(() => {
    return (
      <Popper open={openSort} anchorEl={anchorEl} placement="bottom-end" transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <SortPaperStyled>
              <Button size="medium" value="start" onClick={changeSortValueHandler}>
                Start of the year
              </Button>
              <Button size="medium" value="end" onClick={changeSortValueHandler}>
                End of the year
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

  const ButtonFinished = useMemo(
    () => (
      <Button
        sx={{ width: '130px', paddingBlock: '5px', '&:hover': { cursor: 'not-allowed' } }}
        variant="contained"
      >
        Finished
      </Button>
    ),
    [],
  )

  useEffect(() => {
    getEventsHandler()
  }, [getEventsHandler])

  return (
    <Box width="100%" sx={{ paddingBottom: '50px' }}>
      {sortPoper}
      <BackButton />
      <HeaderStackStyled>
        <Typography variant="h4">Events of this year</Typography>
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
        {yearsEvents.map(event => {
          const date = new Date(event.event.date)
          const today = new Date()
          let eventLabel: string = ''
          if (date < today) {
            eventLabel = 'Finished event'
          } else {
            eventLabel = 'Next event'
          }

          return (
            <BowOuterStyled key={event.event.id}>
              <SmallEventCard
                eventLabel={eventLabel}
                title={event.event.name}
                date={`${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`}
                address={event.event.place}
                backgroundImage={event.url}
                discipline={event.event.discipline}
                status={event.event.status}
                series={event.event.series}
                eventId={event.event.id}
                button={eventLabel === 'Next event' ? ButtonReg(event.event.id) : ButtonFinished}
              />
            </BowOuterStyled>
          )
        })}
      </AllEventsStack>
    </Box>
  )
}

export default memo(YearsEvents)
