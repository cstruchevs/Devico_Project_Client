import { Box, Button, Card, Stack, Typography } from '@mui/material'
import { SectionWrappperStyled } from './NewsSectionStyles'
import Slider from 'react-slick'
import { useRef } from 'react'

const NewsSection = () => {
  let sliderRef = useRef(null)

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
      </Stack>
      <Box width={'100%'}>
        <Slider {...settings} ref={c => (sliderRef = c)}>
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <Box
              key={index}
              sx={{ backgroundColor: 'transparent', height: '200px', paddingInline: '10px' }}
            >
              <Card sx={{ backgroundColor: 'green', height: '100%' }}>{item}</Card>
            </Box>
          ))}
        </Slider>
      </Box>
      <Button onClick={previous}>Previous</Button>
      <Button onClick={next}>Next</Button>
    </SectionWrappperStyled>
  )
}

export default NewsSection
