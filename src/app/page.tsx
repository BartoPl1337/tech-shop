"use client"; // Potrzebne, bo używamy useState i useEffect

import { useState } from "react";
import Test from "./test";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/NavBar";
import HeroSec from "@/components/MainPage-Components/HeroSec";

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
    </div>
  );
}
