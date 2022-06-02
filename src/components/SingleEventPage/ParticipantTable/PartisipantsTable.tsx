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
import React, { FC, memo, useMemo } from 'react'
import {
  HeaderCellStyled,
  ModalHeaderStyled,
  ModalWrapperStyled,
  NoParticipantsBoxStyled,
  NoParticipantsIconBoxStyled,
  NoParticipantsTypographyStyled,
  TableWrapperStyled,
} from './ParticipantsTableStyles'
import GroupIcon from '@mui/icons-material/Group'
import CloseIcon from '@mui/icons-material/Close'

interface IColumn {
  id: 'number' | 'fullName' | 'venchleClass'
  label: string
  minWidth?: string
  align?: 'center' | 'right'
  format?: (value: number) => string
}
interface IRow {
  number: string
  fullName: string
  venchleClass: string
}
interface IParticipantsTable {
  open: boolean
  handleClose: any
  users: IRow[]
}

const ParticipantsTable: FC<IParticipantsTable> = ({ open, handleClose, users }) => {

  const allParticipantsColumns: IColumn[] = useMemo(() => ([
    { id: 'number', label: 'Number', minWidth: '40px', align: 'center' },
    { id: 'fullName', label: 'Full name', minWidth: '120px' },
    { id: 'venchleClass', label: 'Venchle class', minWidth: '120px', },
  ]), [])

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
            {users && users.length !== 0 ? (
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {allParticipantsColumns.map(column => (
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
                <TableBody>
                  {users.map(row => {
                    return (
                      <TableRow hover tabIndex={0} key={row.number}>
                        {allParticipantsColumns.map(column => {
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
            ) : (
              <NoParticipantsBoxStyled>
                <NoParticipantsIconBoxStyled>
                  <GroupIcon sx={{ fontSize: '32px', color: 'white' }} />
                </NoParticipantsIconBoxStyled>
                <NoParticipantsTypographyStyled>No participants yet</NoParticipantsTypographyStyled>
              </NoParticipantsBoxStyled>
            )}
          </TableWrapperStyled>
        </ModalWrapperStyled>
      </Fade>
    </Modal>
  )
}

export default memo(ParticipantsTable)
