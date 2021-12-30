import React from 'react';
import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import { SliderData } from "./data/SliderData";
import GlobalStyle from './globalStyles';

function App() {
  return (
     <>
     <GlobalStyle />
     < Navbar />
      < Hero slides={SliderData} />
     </>
  );
}

export default App;
