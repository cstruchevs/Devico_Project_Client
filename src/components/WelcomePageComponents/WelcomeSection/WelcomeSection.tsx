import { Box } from '@mui/system'
import BgImage from '../../../assets/imgs/Bitmap.png'
import { RootState } from '../../../store'
import { useDispatch, useSelector } from 'react-redux'
import { uiActions } from '../../../store/ui-slice'
import {
  ButtonsStack,
  ButtonStyled,
  DatePositionStackStyled,
  DateStyled,
  EventLinkStyled,
  ImageBox,
  ImageStackStyled,
  InfoStackStyled,
  LinkStyled,
  NextEventBoxStyled,
  NextEventLabelStyled,
  PositionStyled,
  SectionWrappperStyled,
  TitleStyled,
  WelcomSubTextStyled,
  WelcomTextStyled,
} from './WelcomeSectionStyles'
import { FC, memo, useCallback, useEffect, useState } from 'react'
import { IUserInterface } from '../../../store/auth'
import { IEvent, IEvents } from '../../../pages/WelcomePage/WelcomePage'

interface IWelcomeSection {
  event: IEvents
}

const WelcomeSection: FC<IWelcomeSection> = ({ event }) => {
  const dispatch = useDispatch()
  const user = useSelector<RootState, IUserInterface | null>(state => state.auth.user)
  const [nextEvent, setNextEvent] = useState<IEvent | null>(null)
  const [nextEventImg, setNextEventImg] = useState<String | null>(null)
  const [nextEventDate, setNextEventDate] = useState<String | null>(null)

  const toggleRegHandler = useCallback(() => {
    dispatch(uiActions.toggleReg())
  }, [dispatch])

  const toggleLogHandler = useCallback(() => {
    dispatch(uiActions.toggleLog())
  }, [dispatch])

  const toggleRecoverHandler = useCallback(() => {
    dispatch(uiActions.toggleForgetPassword())
  }, [dispatch])

  useEffect(() => {
    setNextEvent(event.event)
    setNextEventImg(event.url)
    const date = new Date(event.event.date)
    setNextEventDate(`${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`)
  }, [event])

  return (
    <SectionWrappperStyled component={'section'} id="welcome">
      <InfoStackStyled>
        <Box>
          <WelcomTextStyled>Welcome</WelcomTextStyled>
          <WelcomTextStyled>to Kharkiv Racing</WelcomTextStyled>
          <WelcomSubTextStyled>We hare exited to see you here. Let's rock.</WelcomSubTextStyled>
          {!user && (
            <ButtonsStack>
              <ButtonStyled variant="contained" onClick={toggleLogHandler} size="medium">
                Sign In
              </ButtonStyled>
              <ButtonStyled variant="outlined" onClick={toggleRegHandler} size="medium">
                Sign Up
              </ButtonStyled>
            </ButtonsStack>
          )}
          {!user && (
            <Box mt={3} onClick={toggleRecoverHandler}>
              <LinkStyled underline="always">Forgot password?</LinkStyled>
            </Box>
          )}
        </Box>
      </InfoStackStyled>
      {nextEvent && (
        <ImageStackStyled>
          <ImageBox
            sx={{
              backgroundImage: `url(${nextEventImg ? nextEventImg : BgImage})`,
            }}
          />
          <NextEventBoxStyled>
            <NextEventLabelStyled>Next Event</NextEventLabelStyled>
            <TitleStyled>{nextEvent.name}</TitleStyled>
            <DatePositionStackStyled>
              <DateStyled>{nextEventDate}</DateStyled>
              <PositionStyled>{nextEvent.place}</PositionStyled>
            </DatePositionStackStyled>
            <Box mt={3}>
              <EventLinkStyled underline="always" href={`/event/${nextEvent.id}`}>
                View details
              </EventLinkStyled>
            </Box>
          </NextEventBoxStyled>
        </ImageStackStyled>
      )}
    </SectionWrappperStyled>
  )
}

export default memo(WelcomeSection)
