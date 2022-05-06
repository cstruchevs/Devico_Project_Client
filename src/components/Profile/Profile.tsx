import * as React from 'react'
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

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

interface IProfie {}

const Profile: React.FC<IProfie> = () => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <AddCarModal />
      <Box sx={{ paddingLeft: '10px' }}>
        <Stack direction="row">
          <StyledLink to="/" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <ArrowBackIosIcon sx={{ height: '15px' }} />
            <TypographyLinkProfile> Back</TypographyLinkProfile>
          </StyledLink>
        </Stack>
        <TypographyInfo variant="h4">My Profile</TypographyInfo>
      </Box>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '95%' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Profile Data" {...a11yProps(0)} />
          <Tab label="Personal data" {...a11yProps(1)} />
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
