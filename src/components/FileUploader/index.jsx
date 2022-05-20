import React, { useState } from "react";
import { Button, Flex, FormLabel, Input } from "@chakra-ui/react";

const FileUploader = () => {
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
        A();
      };

      fileReader.readAsText(file);
    }
  };

  const A = () => {
    var item =
      array["A" + (Math.floor(Math.random() * array.keys().length) + 1)];
    console.log("item", item);
  };

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
