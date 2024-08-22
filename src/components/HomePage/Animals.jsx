"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Buttons from "./Buttons";

const Animals = () => {
  const [animals, setAnimals] = useState([]);
  const [filteredAnimals, setFilteredAnimals] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchAnimals = async () => {
      const res = await fetch("https://antopolies-backend.vercel.app/animals");
      const data = await res.json();
      setAnimals(data);
      setFilteredAnimals(data);
    };
    fetchAnimals();
  }, []);

  const handleFilter = (category) => {
    setSelectedCategory(category);
    if (category === "") {
      setFilteredAnimals(animals);
    } else {
      setFilteredAnimals(
        animals.filter((animal) => animal.category === category)
      );
    }
  };

  return (
    <div>
      <Buttons
        selectedCategory={selectedCategory}
        handleFilter={handleFilter}
      />

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {filteredAnimals.map((animal) => (
          <div key={animal._id} className="flex flex-col items-center">
            <div className="border border-zinc-900 rounded-lg bg-zinc-950 flex items-center justify-center h-[191px] w-[160px]">
              <Image
                alt={animal.name}
                src={animal.image}
                height={100}
                width={100}
              />
            </div>
            <h1 className="mt-4 uppercase">{animal.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Animals;
