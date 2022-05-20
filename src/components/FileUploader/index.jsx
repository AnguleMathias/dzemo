import React, { useState, useEffect } from "react";
import { Button, Flex, FormLabel, Input } from "@chakra-ui/react";

const FileUploader = ({ setRandomCount }) => {
  const [file, setFile] = useState();
  const [array, setArray] = useState([]);

  const fileReader = new FileReader();

  const handleOnChange = (e) => {
    setFile(e.target.files[0]);
  };

  const csvFileToArray = (string) => {
    const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");

    const array = csvRows.map((i) => {
      const values = i.split(",");
      return values;
    });

    setArray(array);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (file) {
      fileReader.onload = function (event) {
        const csvOutput = event.target.result;
        csvFileToArray(csvOutput);
      };

      fileReader.readAsText(file);
    }
  };

  const random = Math.floor(Math.random() * array.length);

  useEffect(() => {
    setRandomCount(random);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [array]);

  return (
    <form onSubmit={handleOnSubmit}>
      <FormLabel htmlFor="value">Upload csv</FormLabel>
      <Flex flexDirection="row">
        <Input
          type="file"
          id="csvFileInput"
          accept=".csv"
          onChange={handleOnChange}
        />
        <Button type="submit" ml="2rem">
          Upload
        </Button>
      </Flex>
    </form>
  );
};

export default FileUploader;
