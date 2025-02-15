import Footer from "@/components/MainPage-Components/Footer";
import HeroSec from "@/components/MainPage-Components/HeroSec";
import Newsletter from "@/components/MainPage-Components/Newsletter";
import Recommended from "@/components/MainPage-Components/Recommended";
import NavBar from "@/components/NavBar";
import React from "react";

export default function AddUserForm() {
  return (
    <>
      <NavBar />
      <HeroSec />
      <Recommended />
      {/* <Viewed /> */}
      <Newsletter />
      <Footer />
    </>
  );
}
