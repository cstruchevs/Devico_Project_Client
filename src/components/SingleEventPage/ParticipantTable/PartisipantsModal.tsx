import {
  Backdrop,
  Divider,
  Fade,
  IconButton,
  Modal,
  Typography,
} from '@mui/material'
import React, { FC, memo } from 'react'
import {
  ModalHeaderStyled,
  ModalWrapperStyled,
  NoParticipantsBoxStyled,
  NoParticipantsIconBoxStyled,
  NoParticipantsTypographyStyled,
  TableWrapperStyled,
} from './ParticipantsModalStyles'
import GroupIcon from '@mui/icons-material/Group'
import CloseIcon from '@mui/icons-material/Close'
import ParticipantsTableContent from './ParticipantsTable'

export interface IRow {
  number: string
  fullName: string
  carModel: string
}
interface IParticipantsTable {
  open: boolean
  handleClose: any
  users: IRow[]
}

const ParticipantsTable: FC<IParticipantsTable> = ({ open, handleClose, users }) => {

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
              <ParticipantsTableContent users={users} />
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
