import { FC, useState } from "react";
import Slider, { LazyLoadTypes } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  ContainerSlideStyled,
  ContainerSectionStyled,
  MobileStepperStyled,
} from "./CarouselStyles";

export interface CarouselProps {
  items: JSX.Element[];
}

export interface CarouselItem {
  index: number;
  jsx: JSX.Element;
}

const Carousel: FC<CarouselProps> = (props) => {
  const { items } = props;
  const [activeSlide, setActiveState] = useState<number>(1);

  const carouselItems = items.map<CarouselItem>((item, index) => ({
    index: index,
    jsx: item,
  }));

  const settings = {
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    speed: 600,
    arrows: false,
    centerPadding: "40px",
    dots: false,
    autoplay: false,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    lazyLoad: "ondemand" as LazyLoadTypes,
    afterChange: (current: number) => setActiveState(current + 1),
  };

  return (
    <ContainerSectionStyled maxWidth="lg">
      <Slider {...settings}>
        {carouselItems.map((item) => (
          <ContainerSlideStyled key={item.index}>
            {item.jsx}
          </ContainerSlideStyled>
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
  );
};

export default Carousel;
