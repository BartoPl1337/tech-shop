"use client"

import { useEffect, useState } from "react";

type Product = {name: string; price: number; description: string}
const test = () => {
const [gpu, setGpu] = useState<Product[]>([]);
const [ram, setRam] = useState<Product[]>([]);
const [cpu, setCpu] = useState<Product[]>([]);

useEffect(() => {
const fectchData = async () => {
    const respone = await fetch("api/products")
    const data = await respone.json()
    setGpu(data.gpu)
    setRam(data.ram)
    setCpu(data.cpu)
}
fectchData()
}, []);
console.log(gpu)
  return (
    <div>
        <h1>Lista CPu</h1>
        <ul>
            {gpu.map((g, index) => (
              <li key={index}>{g.name} - {g.price}, {g.description}</li>  
            ))}
        </ul>
    </div>
  )
}

export default test