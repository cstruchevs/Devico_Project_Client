import { Box } from '@mui/system'
import { memo } from 'react'
import UserEvents from '../../components/UserEvents/UserEvents'

const UserEventsPage = () => {
  return (
    <Box component={'section'}>
      <UserEvents />
    </Box>
  )
}

export default memo(UserEventsPage)
