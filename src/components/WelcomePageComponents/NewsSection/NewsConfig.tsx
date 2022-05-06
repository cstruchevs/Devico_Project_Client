import { NextButtonStyled, PrevButtonStyled } from './NewsSectionStyles'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import { FC } from 'react'

interface IArrows {
  onClick?: React.MouseEventHandler
}

export const SampleNextArrow: FC<IArrows> = ({ onClick }) => {
  return (
    <NextButtonStyled onClick={onClick}>
      <ArrowBackIosNewIcon sx={{ transform: 'rotate(180deg)' }} />
    </NextButtonStyled>
  )
}

export const SamplePrevArrow: FC<IArrows> = ({ onClick }) => {
  return (
    <PrevButtonStyled onClick={onClick}>
      <ArrowBackIosNewIcon />
    </PrevButtonStyled>
  )
}

