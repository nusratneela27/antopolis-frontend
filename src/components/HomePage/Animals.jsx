"use client"; 

import { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Buttons from "./Buttons";

const Animals = () => {
  const [animals, setAnimals] = useState([]);
  const [filteredAnimals, setFilteredAnimals] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchAnimals = async () => {
      const res = await fetch("http://localhost:5000/animals");
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
      setFilteredAnimals(animals.filter((animal) => animal.category === category));
    }
  };

  return (
    <div>
      {/* <div className="lg:flex justify-between pt-28 pb-20">
        <div className="space-x-7">
          <Button
            radius="full"
            color={selectedCategory === "Land Animal" ? "success" : ""}
            variant="bordered"
            onPress={() => handleFilter("Land Animal")}
          >
            Land Animal
          </Button>
          <Button
            radius="full"
            color={selectedCategory === "Bird" ? "success" : ""}
            variant="bordered"
            onPress={() => handleFilter("Bird")}
          >
            Bird
          </Button>
          <Button
            radius="full"
            color={selectedCategory === "Fish" ? "success" : ""}
            variant="bordered"
            onPress={() => handleFilter("Fish")}
          >
            Fish
          </Button>
          <Button
            radius="full"
            color={selectedCategory === "Insect" ? "success" : ""}
            variant="bordered"
            onPress={() => handleFilter("Insect")}
          >
            Insect
          </Button>
        </div>

        <div className="space-x-7">
          <Button radius="full" color="" variant="bordered">
            Add Animal
          </Button>
          <Button radius="full" color="" variant="bordered">
            Add Category
          </Button>
        </div>
      </div> */}

      <Buttons
         selectedCategory={selectedCategory}
        handleFilter={handleFilter}
       />

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {filteredAnimals.map((animal) => (
          <div key={animal._id} className="flex flex-col items-center">
            <div className="border border-zinc-900 rounded-lg bg-zinc-950 flex items-center justify-center h-[191px] w-[160px]">
              <Image alt={animal.name} src={animal.src} height={100} width={100} />
            </div>
            <h1 className="mt-4 uppercase">{animal.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Animals;
