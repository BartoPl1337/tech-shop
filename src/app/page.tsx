"use client";

import NavBar from "@/components/NavBar";
import HeroSec from "@/components/MainPage-Components/HeroSec";
import Recommended from "@/components/MainPage-Components/Recommended";
import Viewed from "@/components/MainPage-Components/Viewed";
import Newsletter from "@/components/MainPage-Components/Newsletter";
import Footer from "@/components/MainPage-Components/Footer";

export default function AddUserForm() {
  return (
    <div>
      <NavBar />
      <HeroSec />
      <Recommended />
      {/* <Viewed /> */}
      <Newsletter />
      <Footer />
    </div>
  );
}
