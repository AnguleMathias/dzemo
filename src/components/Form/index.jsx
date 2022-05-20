import React, { useState } from "react";
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";

const Form = ({ addToCounts }) => {
  const [input, setInput] = useState(0);

  const handleInputChange = (e) => {
    // e.target.value contains new input from onChange
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevents browser refresh

    addToCounts(input);
    setInput(2);
  };

  const isError = isNaN(input);

  return (
    <form onSubmit={handleSubmit}>
      <FormControl isInvalid={isError}>
        <FormLabel htmlFor="value">Enter a number</FormLabel>
        <Flex>
          <Flex flexDirection="column" mr="3rem">
            <Input
              id="value"
              value={input}
              placeholder="Enter a number"
              onChange={handleInputChange}
            />
            {isError ? (
              <FormErrorMessage>Input must be a number.</FormErrorMessage>
            ) : null}
          </Flex>
          <Button type="submit" isDisabled={isError}>
            Submit
          </Button>
        </Flex>
      </FormControl>
    </form>
  );
};

export default Form;
