import React, { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";

const DefiContent = ({ element }) => {
  return (
    <Box p="2" mt="8" ref={element}>
      <Text fontSize="24px" textAlign="center">
        DEFI
      </Text>
      <Box
        p="4"
        d="flex"
        justifyContent="center"
        flexDirection="column"
        flexWrap="wrap"
      >
        <Text fontSize="24px" p="4" textAlign="center">
          DEFI EXPLAINED
        </Text>
        <Box mr="auto" ml="auto">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/qFBYB4W2tqU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Box>
      </Box>
      <Box
        p="4"
        d="flex"
        justifyContent="center"
        flexDirection="column"
        flexWrap="wrap"
      >
        <Text fontSize="24px" p="4" textAlign="center">
          LENDING IN DEFI
        </Text>
        <Box mr="auto" ml="auto">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/aTp9er6S73M"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Box>
      </Box>
    </Box>
  );
};

export default DefiContent;
