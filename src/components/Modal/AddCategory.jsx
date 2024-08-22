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

const AddCategory = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animalCategory, setAnimalCategory] = useState("");

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = () => {
    // console.log("New Category Name:", animalCategory);
    handleClose();
  };

  return (
    <>
      <Button radius="full" color="" variant="bordered" onClick={handleOpen}>
        Add Category
      </Button>

      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalContent>
          <ModalHeader className="text-black">Add Category</ModalHeader>
          <ModalBody>
            <Input
              type="text"
              label="Name"
              fullWidth
              value={animalCategory}
              onChange={(e) => setAnimalCategory(e.target.value)}
            />
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={handleSubmit}
              fullWidth
              className="bg-black text-white"
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddCategory;
