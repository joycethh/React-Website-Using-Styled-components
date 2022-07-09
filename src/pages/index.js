import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Service from "../components/Services";
import { InfoSection } from "../components/InfoSection";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../components/InfoSection/Data";
import { FooterSection } from "../components/Footer";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />

      <HeroSection />

      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />

      <Service />

      <InfoSection {...homeObjThree} />
      <FooterSection />
    </>
  );
}

export default Home;
