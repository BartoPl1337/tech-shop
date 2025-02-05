"use client"; // Potrzebne, bo używamy useState i useEffect

import { useState } from "react";
import Test from "./test";

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
      <h2>Dodaj użytkownika</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Imię"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Wiek"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Dodaj</button>
      </form>

      <Test />
    </div>
  );
}
