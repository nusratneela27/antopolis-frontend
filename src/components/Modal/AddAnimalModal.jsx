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

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = () => {
    console.log("New Animal Name:", animalName);
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
              fullWidth
              placeholder="Add Animal"
              value={animalName}
              onChange={(e) => setAnimalName(e.target.value)}
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
