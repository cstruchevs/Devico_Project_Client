import {
  Backdrop,
  Divider,
  Fade,
  IconButton,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import React, { FC, memo } from 'react'
import { allPartisipantsColumns, allPartisipantsRows } from './PartsipantsDummyData'
import { v4 as uuidv4 } from 'uuid'
import {
  HeaderCellStyled,
  ModalHeaderStyled,
  ModalWrapperStyled,
  TableWrapperStyled,
} from './PartisipantsTableStyles'
import CloseIcon from '@mui/icons-material/Close'

interface IPartisipantsTable {
  open: boolean
  handleClose: any
}

const PartisipantsTable: FC<IPartisipantsTable> = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 300,
      }}
    >
      <Fade in={open}>
        <ModalWrapperStyled>
          <ModalHeaderStyled>
            <Typography variant="h6">List of registered participants</Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </ModalHeaderStyled>
          <Divider />
          <TableWrapperStyled>
            <Table stickyHeader aria-label="sticky table" >
              <TableHead>
                <TableRow>
                  {allPartisipantsColumns.map(column => (
                    <HeaderCellStyled
                      key={column.id}
                      align={column.align}
                      sx={{
                        minWidth: column.minWidth,
                      }}
                    >
                      {column.label}
                    </HeaderCellStyled>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody >
                {allPartisipantsRows.map(row => {
                  return (
                    <TableRow hover tabIndex={0} key={uuidv4()}>
                      {allPartisipantsColumns.map(column => {
                        const value = row[column.id]
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </TableCell>
                        )
                      })}
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </TableWrapperStyled>
        </ModalWrapperStyled>
      </Fade>
    </Modal>
  )
}

export default memo(PartisipantsTable)
