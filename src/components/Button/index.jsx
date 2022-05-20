import React from "react";
import { Button } from "@chakra-ui/react";

const CustomButton = ({ onClick, label, isDisabled }) => (
  <Button
    onClick={onClick}
    isDisabled={isDisabled}
    width="10rem"
    height="10rem"
    borderRadius="50%"
    fontSize="1.5em"
    _hover={{ fontSize: isDisabled ? null : "2em" }}
    _focus={{ outline: "0" }}
  >
    {label}
  </Button>
);

export default CustomButton;
