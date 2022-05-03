import Box from '@mui/material/Box'
import { memo } from 'react'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

const ProfilePanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <>{children}</>
        </Box>
      )}
    </Box>
  )
}

export default memo(ProfilePanel)
