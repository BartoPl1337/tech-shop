"use client"; // Potrzebne, bo używamy useState i useEffect

import { useState } from "react";
import NavBar from "@/components/NavBar";
import HeroSec from "@/components/MainPage-Components/HeroSec";
import Recommended from "@/components/MainPage-Components/Recommended";
import Odwiedzane from "@/components/MainPage-Components/Odwiedzane";
import Newsletter from "@/components/MainPage-Components/Newsletter";
import Footer from "@/components/MainPage-Components/Footer";

export default function AddUserForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, age, email }),
    });

    if (response.ok) {
      setName("");
      setAge("");
      setEmail("");
    }
  };

  return (
    <div>
      <NavBar />
      <HeroSec />
      <Recommended />
      {/* <Odwiedzane /> */}
      <Newsletter />
      <Footer />
    </div>
  );
}
