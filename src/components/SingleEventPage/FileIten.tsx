import { ListItem, ListItemIcon, ListItemText } from '@mui/material'
import React, { FC } from 'react'
import FilePresentIcon from '@mui/icons-material/FilePresent'

interface IFileItem {
  text: string
}
const FileItem: FC<IFileItem> = ({ text }) => {
  return (
    <ListItem disablePadding sx={{ marginBlock: '10px' }}>
      <ListItemIcon>
        <FilePresentIcon />
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  )
}

export default FileItem
