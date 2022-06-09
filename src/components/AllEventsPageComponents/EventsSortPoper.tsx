import { Button, Fade, Popper } from '@mui/material'
import React, { FC, memo, MouseEventHandler } from 'react'
import { SortPaperStyled } from './AllEventsStyles'

interface IEventsSortPoper {
    open: boolean,
    anchorEl: HTMLButtonElement | null,
    changeSortValue: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>,
}

const EventsSortPoper: FC<IEventsSortPoper> = ({open, anchorEl, changeSortValue}) => {

  return (
    <Popper open={open} anchorEl={anchorEl} placement="bottom-end" transition>
      {({ TransitionProps }) => (
        <Fade {...TransitionProps} timeout={350}>
          <SortPaperStyled>
            <Button size="medium" value="start" onClick={changeSortValue}>
              Recent
            </Button>
            <Button size="medium" value="end" onClick={changeSortValue}>
              Far
            </Button>
          </SortPaperStyled>
        </Fade>
      )}
    </Popper>
  )
}

export default memo(EventsSortPoper)
