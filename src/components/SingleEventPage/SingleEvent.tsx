import { Box } from '@mui/system'
import React, { FC, useCallback, useEffect, useMemo, useState } from 'react'
import BackButton from '../BackButton/BackButton'
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
import FileItem from './FileItem'
import ParticipantsModal from './ParticipantTable/PartisipantsModal'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { IDriversData } from '../../store/auth'
import { RootState } from '../../store'
import { useDispatch } from 'react-redux'
import { uiActions } from '../../store/ui-slice'
interface ISingleEventPage {
  eventId: string | undefined
}
interface ISingleEvent {
  eventLabel: string
  title: string
  date: string
  address: string
  backgroundImage: string
  discipline: string
  status: string
  series: string
  eventId: string
  button: JSX.Element
  linkShow: boolean
  eventInfo: string
  users: { number: string; fullName: string; carModel: string }[]
}

const SingleEvent: FC<ISingleEventPage> = ({ eventId }) => {
  const dispatch = useDispatch()
  const user = useSelector<RootState, IDriversData | null>(state => state.auth.user)
  const cars = useSelector((state: RootState) => state.auth.cars)
  const driversData = useSelector<RootState, IDriversData | null>(state => state.auth.driversData)
  const [partTabelOpen, setPartTabelOpen] = useState(false)
  const [event, setEvent] = useState<ISingleEvent | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const toggleParticipants = () => {
    setPartTabelOpen(prevState => !prevState)
  }

  const regToEventHandler = useCallback(() => {
    if(!cars || !driversData || cars.length === 0) {
      console.log("You need to have cars and driversData")
    } else {
      dispatch(uiActions.toggleEventRegister())
    }
  }, [dispatch, cars, driversData])

  const openLogForm = useCallback(() => {
    dispatch(uiActions.toggleLog())
  }, [dispatch])

  const ButtonApply = useMemo(
    () =>
      user ? (
        <ApplyButtonStyled variant="contained" onClick={regToEventHandler}>
          Apply event
        </ApplyButtonStyled>
      ) : (
        <ApplyButtonStyled variant="contained" onClick={openLogForm}>
          Sign in to apply
        </ApplyButtonStyled>
      ),
    [user, regToEventHandler, openLogForm],
  )

  const getEventHandler = useCallback(async () => {
    setIsLoading(true)
    const reqData = await axios.get(`http://localhost:5000/events/${eventId}`)
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
      date: `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`,
      address: reqData.data.event.place,
      backgroundImage: reqData.data.url,
      discipline: reqData.data.event.discipline,
      status: reqData.data.event.status,
      series: reqData.data.event.series,
      eventId: reqData.data.event.id,
      button: ButtonApply,
      linkShow: false,
      eventInfo: reqData.data.event.eventInfo,
      users: reqData.data.event.eventParicipants?.split(';').map((user: any) => {
        const tmpUser = JSON.parse(user)
        return {
          number: tmpUser.partNumber,
          fullName: tmpUser.userName,
          carModel: tmpUser.carModel,
        }
      }),
    })
    setIsLoading(false)
  }, [eventId, ButtonApply])

  useEffect(() => {
    getEventHandler()
  }, [getEventHandler])

  return (
    <>
      {!isLoading && event && (
        <Box width="100%" paddingBottom="100px">
          <ParticipantsModal
            open={partTabelOpen}
            handleClose={toggleParticipants}
            users={event.users}
          />
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
              <ParticipantsButton variant="contained" color="primary" onClick={toggleParticipants}>
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
      )}
      {isLoading && (
        <div>
          <span>Loading...</span>
        </div>
      )}
    </>
  )
}

export default SingleEvent
