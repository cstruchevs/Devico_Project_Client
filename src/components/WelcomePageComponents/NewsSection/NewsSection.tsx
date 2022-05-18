import { Box, useMediaQuery } from '@mui/material'
import { OuterBoxStyled, SectionHeaderStyled, SectionWrappperStyled } from './NewsSectionStyles'
import Slider from 'react-slick'
import { FC, memo, useMemo } from 'react'
import NewsCard from './NewsCard/NewsCard'
import { DUMMY_NEWS } from './DummyNews'
import { SampleNextArrow, SamplePrevArrow } from './NewsConfig'

interface INewsSection {}

const NewsSection: FC<INewsSection> = () => {
  const matchMd = useMediaQuery('(max-width:900px)')
  const matchSm = useMediaQuery('(max-width:600px)')

  const slidesNumbers = useMemo(() => {
    if (matchSm) {
      return 1
    } else if (matchMd) {
      return 2
    } else {
      return 3
    }
  }, [matchSm, matchMd])



  const settings = useMemo(
    () => ({
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: slidesNumbers,
      slidesToScroll: slidesNumbers,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    }),
    [slidesNumbers],
  )

  return (
    <SectionWrappperStyled component="section" id="news">
      <SectionHeaderStyled variant="h4">News</SectionHeaderStyled>
      <Box width="100%" mt="20px">
        <Slider {...settings}>
          {DUMMY_NEWS.map((item) => (
            <OuterBoxStyled key={item.id}>
              <NewsCard {...item} />
            </OuterBoxStyled>
          ))}
        </Slider>
      </Box>
    </SectionWrappperStyled>
  )
}

export default memo(NewsSection) 
