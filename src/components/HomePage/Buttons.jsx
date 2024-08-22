"use client";

import { Button } from "@nextui-org/react";
import AddAnimalModal from "../Modal/AddAnimalModal";
import AddCategory from "../Modal/AddCategory";

const Buttons = ({ selectedCategory, handleFilter }) => {
  const categories = ["Land Animal", "Bird", "Fish", "Insect"];

  return (
    <div className="lg:flex justify-between pt-28 pb-20">
      <div className="space-x-7">
        {categories.map((category) => (
          <Button
            key={category}
            radius="full"
            color={selectedCategory === category ? "success" : "error"}
            variant="bordered"
            className={
              selectedCategory === category
                ? "border-green-500 text-green-500"
                : "border-red-500 text-red-500"
            }
            onClick={() => handleFilter(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="space-x-7">
        <AddAnimalModal></AddAnimalModal>
        <AddCategory></AddCategory>
      </div>
    </div>
  );
};

export default Buttons;

// "use client";

// import {
//   Button,
//   Input,
//   Modal,
//   ModalBody,
//   ModalContent,
//   ModalFooter,
//   ModalHeader,
// } from "@nextui-org/react";
// import { useState } from "react";
// import AddAnimalModal from "../Modal/AddAnimalModal";
// import AddCategory from "../Modal/AddCategory";

// const Buttons = ({ selectedCategory, handleFilter }) => {
//   const categories = ["Land Animal", "Bird", "Fish", "Insect"];

//   // const [isOpen, setIsOpen] = useState(false);

//   // const handleOpen = () => {
//   //   setIsOpen(true);
//   // };

//   // const handleClose = () => {
//   //   setIsOpen(false);
//   // };

//   return (
//     <div className="lg:flex justify-between pt-28 pb-20">
//       <div className="space-x-7">
//         {categories.map((category) => (
//           <Button
//             key={category}
//             radius="full"
//             color={selectedCategory === category ? "success" : "error"}
//             variant="bordered"
//             className={
//               selectedCategory === category
//                 ? "border-green-500 text-green-500"
//                 : "border-red-500 text-red-500"
//             }
//             onClick={() => handleFilter(category)}
//           >
//             {category}
//           </Button>
//         ))}
//       </div>

//       <div className="space-x-7">
//         {/* <Button radius="full" color="" variant="bordered" onClick={handleOpen}>
//           Add Animal
//         </Button> */}

//         <AddAnimalModal></AddAnimalModal>
//         <AddCategory></AddCategory>

//         {/* <Button radius="full" color="" variant="bordered">
//           Add Category
//         </Button> */}

//       </div>

//       {/* <Modal isOpen={isOpen} onClose={handleClose}>
//         <ModalContent>
//           <ModalHeader className="text-black">Add Animal</ModalHeader>
//           <ModalBody>
//             <Input placeholder="Add Animal"/>
//           </ModalBody>
//           <ModalFooter>
//             <Button fullWidth >Create Animal</Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal> */}
//     </div>
//   );
// };

// export default Buttons;
