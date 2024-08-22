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
  const [file, setFile] = useState(null)

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setAnimalName("");
    setFile(null);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleSubmit = () => {
    console.log("New Animal Name:", animalName);
    console.log("Selected File:", file);
    handleClose();
  };

  return (
    <>
      <Button radius="full" color="" variant="bordered" onClick={handleOpen}>
        Add Animal
      </Button>

      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalContent>
          <ModalHeader className="text-black">Add Animal</ModalHeader>
          <ModalBody>
            <Input
              type="text"
              label="Animal Name"
              fullWidth
              value={animalName}
              onChange={(e) => setAnimalName(e.target.value)}
            />
            <Input
              type="file"
              label="Image"
              fullWidth
              onChange={handleFileChange}
            />
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={handleSubmit}
              fullWidth
              className="bg-black text-white"
            >
              Create Animal
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddAnimalModal;
