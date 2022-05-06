import React from 'react'
import { BoxInnerStyled, MainBoxStyled } from './NoPageStyles'
import { useLocation } from 'react-router-dom'
import Gif404 from '../../assets/imgs/404.gif'
import { Box, Link, Typography } from '@mui/material'

const NoPage = () => {
  const location = useLocation()

  return (
    <MainBoxStyled>
      <BoxInnerStyled>
        <Box component={'img'} sx={{ width: 'clamp(200px, 70%, 700px)' }} src={Gif404} />
        <Typography variant="h4" mt={1}>
          Page {location.pathname + location.hash} was not found!{' '}
        </Typography>
        <Link mt={1} href="/">
          Back to home
        </Link>
      </BoxInnerStyled>
    </MainBoxStyled>
  )
}

export default NoPage
