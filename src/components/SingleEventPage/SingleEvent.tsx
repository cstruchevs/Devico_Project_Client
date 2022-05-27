import { Box } from '@mui/system'
import React, { FC, useCallback, useEffect, useMemo, useState } from 'react'
import BackButton from '../BackButton/BackButton'
import { FakeUpcomingEvents } from '../../FakeUpcomingEvents'
import UpcomingEventCard from '../UpcomingEventCard/UpcomingEventCard'
import {
  ApplyButtonStyled,
  BottomStackStyled,
  CardWrapperStyled,
  DetailsBoxStyled,
  DetailsListStyled,
  FilesListStyled,
  InfoBoxStyled,
  ParticipantsButton,
} from './SingleEventStyles'
import { Divider, Typography } from '@mui/material'
import DetailsItem from './DetailsItem'
import FileItem from './FileIten'
import PartisipantsTable from './PartisipantsTable'
import { IEvents } from '../../pages/WelcomePage/WelcomePage'
import axios from 'axios'

interface ISingleEvent {
  eventId: string | undefined
}

const SingleEvent: FC<ISingleEvent> = ({ eventId }) => {
  const [open, setOpen] = useState(false)
  const [event, setEvent] = useState<any>({})
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const ButtonApply = useMemo(
    () => <ApplyButtonStyled variant="contained">Apply</ApplyButtonStyled>,
    [],
  )

  const getEventsHandler = useCallback(async () => {
    const reqData = await axios.get(`http://localhost:5000/events/${eventId}`)
    console.log(reqData.data)
    const date = new Date(reqData.data.event.date)
    const today = new Date()
    let eventLabel: string = ''
    if (date < today) {
      eventLabel = 'Finished event'
    } else {
      eventLabel = 'Next event'
    }

    setEvent({
      eventLabel: eventLabel,
      title: reqData.data.event.name,
      date: `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`,
      address: reqData.data.event.place,
      backgroundImage: reqData.data.url,
      discipline: reqData.data.event.discipline,
      status: reqData.data.event.status,
      series: reqData.data.event.series,
      eventId: reqData.data.event.id,
      button: ButtonApply,
      linkShow: false,
      eventInfo:  reqData.data.event.eventInfo,
    })
  }, [eventId, ButtonApply])

  useEffect(() => {
    getEventsHandler()
  }, [getEventsHandler])

  return (
    <Box width="100%" paddingBottom="100px">
      <PartisipantsTable open={open} handleClose={handleClose} />
      <BackButton />
      <CardWrapperStyled>
        <UpcomingEventCard {...event} />
      </CardWrapperStyled>
      <BottomStackStyled>
        <InfoBoxStyled>
          <Typography variant="h5" fontWeight="bold">
            Event info
          </Typography>
          <Typography variant="body1" color="text.secondary" mt={2} mb={2}>
            {event.eventInfo}
          </Typography>
          <ParticipantsButton variant="contained" color="primary" onClick={handleOpen}>
            View participants
          </ParticipantsButton>
        </InfoBoxStyled>
        <DetailsBoxStyled>
          <Typography variant="subtitle2">Event details</Typography>
          <DetailsListStyled>
            <DetailsItem text={`Cost of participation: 50$`} />
            <DetailsItem text={`Discipline: ${event.discipline}`} />
            <DetailsItem text={`Status: ${event.status}`} />
            <DetailsItem text={`Series: ${event.series}`} />
          </DetailsListStyled>
          <Divider />
          <FilesListStyled>
            <FileItem text={`Additional_regulations_CHU`} />
            <FileItem text={`Additional_regulations_CHU_slalom`} />
          </FilesListStyled>
        </DetailsBoxStyled>
      </BottomStackStyled>
    </Box>
  )
}

export default SingleEvent
