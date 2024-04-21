import { Fragment } from "react/jsx-runtime";
import "./App.scss";
import { LandingSection } from "./sections/landing/LandingSection";
import { TechStackSection } from "./sections/tech_stack/TechStackSection";
import { AboutMeSection } from "./sections/about_me/AboutMeSection";
import { MyProjectsSection } from "./sections/my_projects/MyProjectsSection";
import { FooterSection } from "./sections/footer/FooterSection";

function App() {
  return (
    <Fragment>
      <LandingSection />
      <TechStackSection />
      <AboutMeSection />
      <MyProjectsSection />
      <FooterSection />
    </Fragment>
  );
}

export default App;
