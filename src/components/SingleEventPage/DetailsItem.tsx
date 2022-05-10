import { ListItem, ListItemIcon, ListItemText } from '@mui/material'
import React, { FC, memo } from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'

interface IDetailsItem {
  text: string
}
const DetailsItem: FC<IDetailsItem> = ({ text }) => {
  return (
    <ListItem disablePadding sx={{ marginBlock: '10px' }}>
      <ListItemIcon>
        <CheckCircleOutlineIcon />
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  )
}

export default memo(DetailsItem)
