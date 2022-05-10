import { Button, Fade, Popper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { memo, useCallback, useMemo, useState } from 'react'
import {
  AllEventsStack,
  BowOuterStyled,
  HeaderStackStyled,
  SortPaperStyled,
  ToolButtonStyled,
  ToolStackStyled,
} from './AllEventsStyles'
import SortIcon from '@mui/icons-material/Sort'
import FilterAltIcon from '@mui/icons-material/FilterAlt'
import { FakeUpcomingEvents } from '../../FakeUpcomingEvents'
import SmallEventCard from '../SmallEventCard/SmallEventCard'
import { v4 as uuidv4 } from 'uuid'
import BackButton from '../BackButton/BackButton'

const AllEvents = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const [openSort, setOpenSort] = useState<boolean>(false)
  const [sort, setSort] = useState<string>('recent')
  const [filter, setFilter] = useState<string>('category')

  const sortPoperHandler = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
    setOpenSort(prev => !prev)
  }, [])

  const changeSortValueHandler = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    setOpenSort(prev => !prev)
    setSort(event.currentTarget.value)
    console.log(event.currentTarget.value)
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
              <Button size="medium" value="oldest" onClick={changeSortValueHandler}>
                Oldest
              </Button>
            </SortPaperStyled>
          </Fade>
        )}
      </Popper>
    )
  }, [openSort, anchorEl, changeSortValueHandler])

  const ButtonReg = useMemo(
    () => (
      <Button sx={{ width: '130px', paddingBlock: '5px' }} variant="contained">
        Register
      </Button>
    ),
    [],
  )

  return (
    <Box width="100%" sx={{ paddingBottom: '50px' }}>
      {sortPoper}
      <BackButton />
      <HeaderStackStyled>
        <Typography variant="h4">All Events</Typography>
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
        {FakeUpcomingEvents.map(event => (
          <BowOuterStyled key={uuidv4()}>
            <SmallEventCard {...event} button={ButtonReg} />
          </BowOuterStyled>
        ))}
      </AllEventsStack>
    </Box>
  )
}

export default memo(AllEvents)
