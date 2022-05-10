import { Box } from '@mui/system'
import React, { FC, useMemo, useState } from 'react'
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

interface ISingleEvent {
  eventId: string | undefined
}
const SingleEvent: FC<ISingleEvent> = ({ eventId }) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const ButtonReg = useMemo(
    () => <ApplyButtonStyled variant="contained">Apply</ApplyButtonStyled>,
    [],
  )

  return (
    <Box width="100%" paddingBottom="100px">
      <PartisipantsTable open={open} handleClose={handleClose} />
      <BackButton />
      <CardWrapperStyled>
        <UpcomingEventCard {...FakeUpcomingEvents[0]} linkShow={false} button={ButtonReg} />
      </CardWrapperStyled>
      <BottomStackStyled>
        <InfoBoxStyled>
          <Typography variant="h5" fontWeight="bold">
            Event info
          </Typography>
          <Typography variant="body1" color="text.secondary" mt={2} mb={2}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
            sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.
          </Typography>
          <ParticipantsButton variant="contained" color="primary" onClick={handleOpen}>
            View participants
          </ParticipantsButton>
        </InfoBoxStyled>
        <DetailsBoxStyled>
          <Typography variant="subtitle2">Event details</Typography>
          <DetailsListStyled>
            <DetailsItem text={`Cost of participation: 50$`} />
            <DetailsItem text={`Discipline: ${FakeUpcomingEvents[0].discipline}`} />
            <DetailsItem text={`Status: ${FakeUpcomingEvents[0].status}`} />
            <DetailsItem text={`Series: ${FakeUpcomingEvents[0].series}`} />
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
