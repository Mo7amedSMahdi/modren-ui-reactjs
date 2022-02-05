import "./App.css";

//?import containers all from ./containers folder inside src
import {
  Header,
  Footer,
  Blog,
  Features,
  Possibility,
  WhatGPT3,
} from "./containers";
//!import components all from ./components folder inside src
import { Brand, CTA, NavBar } from "./components";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <NavBar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
