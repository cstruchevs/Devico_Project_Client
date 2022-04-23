import React from "react";
import Carousel from "./components/Carousel/Carousel";
import css from "./components/Carousel/Carousel.module.css";

const items: JSX.Element[] = [
  <div className={css.card_inner}>
    <h3>1</h3>
  </div>,
  <div className={css.card_inner}>
    <h3>2</h3>
  </div>,
  <div className={css.card_inner}>
    <h3>3</h3>
  </div>,
  <div className={css.card_inner}>
    <h3>4</h3>
  </div>,
  <div className={css.card_inner}>
    <h3>5</h3>
  </div>,
  <div className={css.card_inner}>
    <h3>6</h3>
  </div>,
];

function App() {
  return (
    <div className="App">
      <Carousel items={items} />
    </div>
  );
}

export default App;
