import Carousel from "./components/Carousel/Carousel";
import UpcomingEventCard from "./components/UpcomingEventCard/UpcomingEventCard";
import { FakeUpcomingEvents } from "./FakeUpcomingEvents";

function App() {
  const carouselItems = FakeUpcomingEvents.map((e) => (
    <UpcomingEventCard {...e} />
  ));

  return (
    <div className="App">
      <Carousel items={carouselItems} />
    </div>
  );
}

export default App;
