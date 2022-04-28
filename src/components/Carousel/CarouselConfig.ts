import { LazyLoadTypes } from "react-slick";

export const carouselConfig = {
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
};
