import { Box } from '@mui/material'
import { FC } from 'react'
import AllEvents, { EventEnum } from '../../components/AllEventsPageComponents/AllEvents'

interface IAllEvents {
  type: EventEnum
}

const AllEventsPage: FC<IAllEvents> = ({ type }) => {
  return (
    <Box component={'section'}>
      <AllEvents type={type} />
    </Box>
  )
}

export default AllEventsPage
