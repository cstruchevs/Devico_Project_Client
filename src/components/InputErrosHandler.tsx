import { IconButton, InputAdornment, Tooltip } from '@mui/material'
import { FC } from 'react'
import InfoIcon from '@mui/icons-material/Info'

interface IErrors {
  [x: string]: any
}

interface IInputErrorHandler {
  errors: any
}

const InpurtErrorHandler: FC<IInputErrorHandler> = ({ errors }) => {
  return (
    <InputAdornment position="end">
      <Tooltip title={errors?.message}>
        <IconButton edge="end">
          <InfoIcon />
        </IconButton>
      </Tooltip>
    </InputAdornment>
  )
}

export default InpurtErrorHandler
