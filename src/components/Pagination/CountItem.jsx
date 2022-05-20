import React, { useState, useEffect } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

const CountItem = ({ counts, curPage, countsLimit }) => {
  const [curCounts, setCurCounts] = useState([]);

  useEffect(() => {
    const offset = curPage * countsLimit;
    const getList = (curPage, countsLimit) => {
      setCurCounts(counts.slice(offset, offset + countsLimit));
    };

    getList(curPage, countsLimit);
  }, [curPage, countsLimit, counts]);

  return (
    <Box h="60%" m={4} w="100%" borderWidth={3}>
      {curCounts.map((data, index) => (
        <Flex p={2} key={index}>
          <Text>{data}</Text>
        </Flex>
      ))}
    </Box>
  );
};

export default CountItem;
