import * as React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';

import Contact from "./Pages/Contact/Contact";

import Home from "./Pages/Home/Home/Home";
import Projects from "./Pages/Projects/Projects";
import Footer from "./Shared/Footer/Footer";
import Header from "./Shared/Header/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
    <Routes>
      <Route path="/" element={<Home />}>
      </Route>
      <Route path="/home" element={<Home />}>
      </Route>
      <Route path="/portfolio" element={<Projects/>}>
      </Route>
      <Route path="/contact" element={<Contact />}>
      </Route>
    </Routes>
    <Footer></Footer>
  </BrowserRouter>
    </div>
  );
}

export default App;
