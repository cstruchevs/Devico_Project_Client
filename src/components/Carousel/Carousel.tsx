import { FC, useState } from "react";
import Slider, { LazyLoadTypes } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MobileStepper, Container } from "@mui/material";
import { ContainerSlideStyle, ContainerSectionStyle } from "./CarouselStyles";

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
    autoplaySpeed: 3000,
    pauseOnHover: true,
    lazyLoad: "ondemand" as LazyLoadTypes,
    afterChange: (current: number) => setActiveState(current + 1),
  };

  return (
    <Container
      classes={ContainerSectionStyle}
      sx={{ padding: "0px !important", maxWidth: "70% !important" }}
    >
      <Slider {...settings}>
        {carouselItems.map((item) => (
          <Container
            key={item.index}
            classes={ContainerSlideStyle}
            sx={{ padding: "0px !important" }}
          >
            {item.jsx}
          </Container>
        ))}
      </Slider>
      <MobileStepper
        variant="progress"
        steps={carouselItems.length + 1}
        position="static"
        activeStep={activeSlide}
        sx={{
          padding: "0px",
          marginTop: "1em",
          flexGrow: 1,
          "& .MuiLinearProgress-root": {
           width: "100%",
           backgroundColor: "#B9B9B9",
           height: "3px",
          },
          "& .MuiLinearProgress-bar1Determinate": {
            backgroundColor: "gray",
           },
        }}
        backButton={false}
        nextButton={false}
      />
    </Container>
  );
};

export default Carousel;
