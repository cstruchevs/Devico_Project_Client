import { FC, useCallback, useState } from 'react'
import Slider from 'react-slick'
import { carouselConfig } from './CarouselConfig'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ContainerSlideStyled, ContainerSectionStyled, MobileStepperStyled } from './CarouselStyles'
interface CarouselProps {
  items: JSX.Element[]
}

const Carousel: FC<CarouselProps> = ({ items }) => {
  const [activeSlide, setActiveState] = useState<number>(1)

  const changeStepperHandler = useCallback((current: number) => {
    setActiveState(current + 1)
  }, [])

  return (
    <ContainerSectionStyled>
        <Slider {...carouselConfig} afterChange={changeStepperHandler}>
          {items.map((item, index) => (
            <ContainerSlideStyled key={index}>{item}</ContainerSlideStyled>
          ))}
        </Slider>
        <MobileStepperStyled
          variant="progress"
          steps={items.length + 1}
          position="static"
          activeStep={activeSlide}
          backButton={false}
          nextButton={false}
        />
    </ContainerSectionStyled>
  )
}

export default Carousel
