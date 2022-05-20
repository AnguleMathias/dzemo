import React, { useState, useEffect } from "react";
import { Flex, Heading, Stack } from "@chakra-ui/react";

import CustomButton from "./components/Button";
import isEvenApi from "./utils/isEvenAPI";
import Pagination from "./components/Pagination";

import "../src/assets/styles/index.css";
import Form from "./components/Form";
import FileUploader from "./components/FileUploader";

const App = () => {
  const [count, setCount] = useState(2);
  const [randomCount, setRandomCount] = useState(0);
  const [isEven, setIsEven] = useState(false);
  const [counts, setCounts] = useState([2]);

  // computations
  const multiplyValue = () => {
    setCount(count * 2);
    addToCounts(count);
  };
  const squareValue = () => {
    setCount(count * count);
    addToCounts(count);
  };
  const resetValue = () => {
    setCount(2);
    setCounts([2]);
  };

  // button actions
  const buttonActions = [
    {
      label: "Multiply",
      isDisabled: isNaN(count),
      onClick: multiplyValue,
    },
    {
      label: "Square",
      isDisabled: isNaN(count),
      onClick: squareValue,
    },
    {
      label: "Reset",
      isDisabled: false,
      onClick: resetValue,
    },
  ];

  // check if rational number
  const isRational = count - Math.floor(count) !== 0;

  // add new count item to beginning of counts array
  const addToCounts = (count) => {
    setCounts([count, ...counts]);
    setCount(count);
  };

  // check if number is integer
  const isInteger = count % 1 === 0;

  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { iseven },
      } = await isEvenApi(count);
      setIsEven(iseven);
    };
    fetchData();
  }, [count]);

  return (
    <Flex flexDirection="column" alignItems="center" mt="5rem">
      <Flex
        textAlign="center"
        flexDirection="row"
        width="50%"
        justifyContent="space-between"
        mr="2rem"
        mb="5rem"
        mt="4rem"
      >
        <Heading
          as="h1"
          fontSize="5em"
          mb="2rem"
          p="1rem"
          borderRadius="10px"
          style={{
            backgroundColor: isInteger
              ? "#00FF00"
              : isRational
              ? "#BF40BF"
              : isNaN(count)
              ? "#FF0000"
              : null,
            boxShadow: isInteger
              ? "0px 0px 14px 0px #00FF00"
              : isRational
              ? "#BF40BF"
              : isNaN(count)
              ? "#FF0000"
              : null,
          }}
        >
          {randomCount === 0 ? count : randomCount}
        </Heading>
        <Flex>
          <Pagination counts={counts} />
        </Flex>
      </Flex>
      {isEven ? (
        <Flex mb="2rem">
          <s>Even</s>
        </Flex>
      ) : null}
      {isNaN(count) ? (
        <Flex mt="2rem">
          <Form addToCounts={addToCounts} />
        </Flex>
      ) : null}
      <Flex mt="4rem">
        <FileUploader setRandomCount={setRandomCount} />
      </Flex>
      <Stack direction="row" mt="4rem" spacing="14" align="center">
        {buttonActions.map((button, index) => (
          <CustomButton
            key={`${button.label}-${index}`}
            onClick={button.onClick}
            label={button.label}
            isDisabled={button.isDisabled}
          />
        ))}
      </Stack>
    </Flex>
  );
};

export default App;
