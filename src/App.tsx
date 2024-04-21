import { Fragment } from "react/jsx-runtime";
import "./App.scss";
import { LandingSection } from "./sections/landing/LandingSection";
import { TechStackSection } from "./sections/tech_stack/TechStackSection";

function App() {
  return (
    <Fragment>
      <LandingSection />
      <TechStackSection />
    </Fragment>
  );
}

export default App;
