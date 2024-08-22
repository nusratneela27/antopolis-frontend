"use client";

import { useState } from "react";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";

const AddAnimalModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animalName, setAnimalName] = useState("");
  const [file, setFile] = useState(null);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const image = event.target.image.files[0];
    
    // Upload the image to imgbb
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_KEY}`;
    
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        const imageUrl = imageData.data.display_url;
  
        // Prepare animal data
        const animalData = {
          name: name,
          image: imageUrl,
        };
  
        // Post the data to the database
        return fetch("http://localhost:5000/animals", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(animalData),
        });
      })
      .then((response) => response.json())
      .then((data) => {
        console.log("Animal added successfully:", data);
      })
      .catch((error) => {
        console.error("Error adding animal:", error);
      });
  
    handleClose();
  };
  
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const name = event.target.name.value;
  //   const image = event.target.image.files[0];
  //   const formData = new FormData();
  //   formData.append("image", image);
  //   const url = `https://api.imgbb.com/1/upload?key=${
  //     process.env.NEXT_PUBLIC_IMGBB_KEY
  //   }`;
  //   fetch(url, {
  //     method: "POST",
  //     body: formData,
  //   })
  //     .then((res) => res.json())
  //     .then((imageData) => {
  //       const imageUrl = imageData.data.display_url;
  //       const animalData = {
  //         name: name,
  //         image: imageUrl,
  //       };


  //       console.log(animalData);
  //     });
  //   handleClose();
  // };

  const handleFileChange = (image) => {
    setFile(image.name);
  };

  return (
    <>
      <Button radius="full" color="" variant="bordered" onClick={handleOpen}>
        Add Animal
      </Button>

      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalContent>
          <ModalHeader className="text-black">Add Animal</ModalHeader>
          <form onSubmit={handleSubmit}>
            <ModalBody>
              <Input
                type="text"
                name="name"
                label="Animal Name"
                fullWidth
                value={animalName}
                onChange={(e) => setAnimalName(e.target.value)}
              />
              <Input
                type="file"
                name="image"
                label="Image"
                fullWidth
                onChange={(event) => {
                  handleFileChange(event.target.files[0]);
                }}
              />
            </ModalBody>
            <ModalFooter>
              <Button type="submit" fullWidth className="bg-black text-white">
                Create Animal
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddAnimalModal;
