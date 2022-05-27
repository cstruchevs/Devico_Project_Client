import { Box } from '@mui/system'
import React, { FC } from 'react'
import { useParams } from 'react-router'
import SingleEvent from '../../components/SingleEventPage/SingleEvent'

interface ISingleEventPage {}

const SingleEventPage: FC<ISingleEventPage> = () => {
  let { event_id } = useParams()
  
  return (
    <Box component={'section'}>
      <SingleEvent eventId={event_id}/>
    </Box>
  )
}

export default SingleEventPage
