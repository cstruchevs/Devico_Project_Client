import React, { FC, memo } from 'react'
import { RegButtonStyled } from './AllEventsStyles'

interface IRegButton {
  eventId: string
}

const RegButton: FC<IRegButton> = ({ eventId }) => {
  return (
    <RegButtonStyled
      variant="contained"
      href={`/event/${eventId}`}
    >
      Register
    </RegButtonStyled>
  )
}

export default memo(RegButton)
