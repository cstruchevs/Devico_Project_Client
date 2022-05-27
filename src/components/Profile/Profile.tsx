import React, { useEffect } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import ProfilePanel from './ProfilePanel'
import PersonalData from './PersonalData'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { Stack } from '@mui/material'
import ProfileData from './ProfileData'
import AddCarModal from './AddCarModal/AddCarModal'
import { StyledLink } from '../MainNavigation/MainNavigatioStyles'
import { TypographyLinkProfile } from './StylesPersonalData'
import { TypographyInfo } from '../../pages/LicensePage/LicensePageStyles'
import CongratModalCar from './AddCarModal/CongratAddCar'
import { useDispatch } from 'react-redux'
import { sagaActions } from '../../store/sagaActions'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import BackButton from '../BackButton/BackButton'

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

interface IProfie {}

const Profile: React.FC<IProfie> = () => {
  const dispatch = useDispatch()
  const userId: string | undefined = useSelector((state: RootState) => state.auth.user?.id)
  const [value, setValue] = React.useState(0)

  useEffect(() => {
    dispatch({ type: sagaActions.GET_CAR_SAGA, payload: { id: userId } })
    dispatch({ type: sagaActions.GET_DRIVERS_DATA_SAGA, payload: { id: userId } })
    dispatch({ type: sagaActions.GET_LICENSES })
  }, [dispatch, userId])

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <AddCarModal />
      <CongratModalCar />
      <Box sx={{ paddingLeft: '10px' }}>
        <BackButton />
        <TypographyInfo variant="h4">My Profile</TypographyInfo>
      </Box>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '95%' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Personal Data" {...a11yProps(0)} />
          <Tab label="Profile Data" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <ProfilePanel value={value} index={0}>
        <PersonalData />
      </ProfilePanel>
      <ProfilePanel value={value} index={1}>
        <ProfileData />
      </ProfilePanel>
    </Box>
  )
}

export default React.memo(Profile)
