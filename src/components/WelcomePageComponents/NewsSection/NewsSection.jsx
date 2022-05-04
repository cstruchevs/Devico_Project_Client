import { Box, Button, Card, IconButton, Stack, Typography, useMediaQuery } from '@mui/material'
import { ButtonsStackStyled, SectionWrappperStyled } from './NewsSectionStyles'
import Slider from 'react-slick'
import { useRef } from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import NewsCard from './NewsCard/NewsCard'
import { DUMMY_NEWS } from './DummyNews'
import { useTheme } from '@emotion/react'

const NewsSection = () => {
  let sliderRef = useRef(null)

  const theme = useTheme()
  const matchMd = useMediaQuery(theme.breakpoints.down('md'));
  const matchSm = useMediaQuery(theme.breakpoints.down('sm'));

  let slidesNumbers = 1

  if (matchSm) {
    slidesNumbers = 1
  } else if (matchMd) {
    slidesNumbers = 2
  } else {
    slidesNumbers = 3
  }
  

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesNumbers,
    slidesToScroll: slidesNumbers,
  }

  const next = () => {
    sliderRef.slickNext()
  }

  const previous = () => {
    sliderRef.slickPrev()
  }

  return (
    <SectionWrappperStyled component={'section'} id="news">
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        width={'100%'}
        alignItems={'baseline'}
      >
        <Typography variant="h4">News</Typography>
        <ButtonsStackStyled>
          <IconButton onClick={previous}>
            <ArrowBackIosNewIcon />
          </IconButton>
          <IconButton onClick={next}>
            <ArrowBackIosNewIcon sx={{ transform: 'rotate(180deg)' }} />
          </IconButton>
        </ButtonsStackStyled>
      </Stack>
      <Box width={'100%'} marginTop={'20px'}>
        <Slider {...settings} ref={c => (sliderRef = c)}>
          {DUMMY_NEWS.map((item, index) => (
            <Box
              key={index}
              sx={{ minHeight: '200px', paddingInline: '10px' }}
            >
              <NewsCard {...item}/>
            </Box>
          ))}
        </Slider>
      </Box>
    </SectionWrappperStyled>
  )
}

export default NewsSection
