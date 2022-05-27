import { memo, useCallback } from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import { useNavigate } from 'react-router-dom'
import { Typography } from '@mui/material'
import { BackLinkStyled } from './BackButtonStyled'

const BackButton = () => {
    const navigate = useNavigate()

    const goBackHandler = useCallback(() => {
        navigate(-1)
    }, [navigate])

  return (
    <BackLinkStyled onClick={goBackHandler}>
      <ArrowBackIosNewIcon sx={{ fontSize: '15px' }} />
      <Typography>Back</Typography>
    </BackLinkStyled>
  )
}

export default memo(BackButton)
