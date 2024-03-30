import React from "react";
import {
  BrowserRouter,
  Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
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
import ComingSon from "../views/ComingSon";
function Page() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cours" element={<Cours />} />
          <Route path="/signIn" element={<Sign />} />
          <Route path="/signUp" element={<Registration />} />
          <Route path="/404" element={<Error404 />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/coming-son" element={<ComingSon />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default Page;
