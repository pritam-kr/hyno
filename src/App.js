import "./App.css";
import { Navigation, Features,Footer } from "./component/index";
import {GetInTouch,About, Values, WhyOnly, Team, Showcase, Hero} from "./section/index"


function App() {
  return (
    <div className="app-container">
      <Navigation />
      <Hero />
      <div className="container">

        <Features />
        <Showcase />
        <Team />
        <Values />
        <WhyOnly />
        <About />
        <GetInTouch />
      </div>
      <Footer />
    </div>
  );
}

export default App;
