import { Fragment } from "react/jsx-runtime";
import "./App.scss";
import { LandingSection } from "./sections/landing/LandingSection";
import { TechStackSection } from "./sections/tech_stack/TechStackSection";
import { AboutMeSection } from "./sections/about_me/AboutMeSection";

function App() {
  return (
    <Fragment>
      <LandingSection />
      <TechStackSection />
      <AboutMeSection />
    </Fragment>
  );
}

export default App;
