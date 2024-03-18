import React from "react";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Header from "../Components/Header";
import Home from "../views/Home";
import About from "../views/About";
import Contact from "../views/Contact";
import Footer from "../Components//Footer";
import Cours from "../views/Cours";
import Sign from "../views/Sign";
import Registration from "../views/Registration";
import Error404 from "../views/Error404";
import Gallery from "../views/Gallery";
import Faqs from "../views/Faqs";
function Page() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/cours" element={<Cours />} />
          <Route exact path="/signIn" element={<Sign />} />
          <Route exact path="/signUp" element={<Registration />} />
          <Route exact path="/404" element={<Error404 />} />
          <Route exact path="/gallery" element={<Gallery />} />
          <Route exact path="/faqs" element={<Faqs />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default Page;
