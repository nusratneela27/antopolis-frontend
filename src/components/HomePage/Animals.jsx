"use client";

import { useState } from "react";
import Image from "next/image";
import fox from "@/assets/fox.png";
import bee from "@/assets/bee.png";
import horse from "@/assets/horse.png";
import butterfly from "@/assets/butterfly.png";
import cockatoo from "@/assets/cockatoo.png";
import ladyBird from "@/assets/lady-bird.png";
import tuna from "@/assets/tuna.png";
import pomfret from "@/assets/pomfret.png";
import sparrow from "@/assets/sparrow.png";
import redFish from "@/assets/red-fish.png";
import elephant from "@/assets/elephant.png";
import phoenix from "@/assets/phoenix.png";
import Buttons from "./Buttons";

const animals = [
  { name: "Fox", src: fox, category: "Land Animal" },
  { name: "Bee", src: bee, category: "Insect" },
  { name: "Horse", src: horse, category: "Land Animal" },
  { name: "Butterfly", src: butterfly, category: "Insect" },
  { name: "Cockatoo", src: cockatoo, category: "Bird" },
  { name: "Ladybird", src: ladyBird, category: "Insect" },
  { name: "Tuna", src: tuna, category: "Fish" },
  { name: "Pomfret", src: pomfret, category: "Fish" },
  { name: "Sparrow", src: sparrow, category: "Bird" },
  { name: "Red Fish", src: redFish, category: "Fish" },
  { name: "Elephant", src: elephant, category: "Land Animal" },
  { name: "Phoenix", src: phoenix, category: "Bird" },
];

const Animals = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleFilter = (category) => {
    setSelectedCategory(category);
  };

  const filteredAnimals =
    selectedCategory === "All"
      ? animals
      : animals.filter((animal) => animal.category === selectedCategory);

  return (
    <div>
      <Buttons
        selectedCategory={selectedCategory}
        handleFilter={handleFilter}
      />

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {filteredAnimals.map((animal, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="border border-zinc-900 rounded-lg bg-zinc-950 flex items-center justify-center h-[191px] w-[160px]">
              <Image alt={animal.name} src={animal.src} />
            </div>
            <h1 className="mt-4 uppercase">{animal.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Animals;
