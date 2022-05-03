import { FC, useCallback, useMemo, useState } from 'react'
import Slider from 'react-slick'
import { carouselConfig } from './CarouselConfig'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ContainerSlideStyled, ContainerSectionStyled, MobileStepperStyled } from './CarouselStyles'
import { Box } from '@mui/system'

export interface CarouselProps {
  items: JSX.Element[]
}

export interface CarouselItem {
  index: number
  jsx: JSX.Element
}

const Carousel: FC<CarouselProps> = ({ items }) => {
  const [activeSlide, setActiveState] = useState<number>(1)

  const carouselItems = useMemo(() => {
    return items.map<CarouselItem>((item, index) => ({
      index: index,
      jsx: item,
    }))
  }, [items])

  const changeStepperHandler = useCallback((current: number) => {
    setActiveState(current + 1)
  }, [])

  return (
    <ContainerSectionStyled>
        <Slider {...carouselConfig} afterChange={changeStepperHandler}>
          {carouselItems.map(item => (
            <ContainerSlideStyled key={item.index}>{item.jsx}</ContainerSlideStyled>
          ))}
        </Slider>
        <MobileStepperStyled
          variant="progress"
          steps={carouselItems.length + 1}
          position="static"
          activeStep={activeSlide}
          backButton={false}
          nextButton={false}
        />
    </ContainerSectionStyled>
  )
}

export default Carousel
