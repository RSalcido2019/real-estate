import React from 'react';
import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import { SliderData } from "./data/SliderData";
import GlobalStyle from './globalStyles';
import Dropdown from "./components/Dropdown";

function App() {
  return (
     <>
     <GlobalStyle />
     <Navbar />
     <Dropdown />
      <Hero slides={SliderData} />
     </>
  );
}

export default App;
