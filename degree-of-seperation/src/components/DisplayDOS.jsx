import { ArrowRightIcon } from "@chakra-ui/icons";
import { Badge, Box, Flex, useToast } from "@chakra-ui/react";
import React from "react";

const DisplayDOS = ({ result }) => {
  const toast = useToast();

  if (result === null) {
    return;
  }

  if (result.length === 0) {
    toast({
      title: "No degree of seperation",
      description: "No mutual friend found",
      status: "warning",
      duration: 3000,
      isClosable: true,
    });
    return;
  }

  return (
    <Flex direction="column" p={3} gap={2}>
      <Box fontSize={["20px", "25px"]} align="left">
        Result :
      </Box>
      {result.map((array, i) => {
        return (
          <Flex key={i} gap={2} align="center">
            {array.map((element, i) => {
              return (
                <>
                  <Badge
                    key={i}
                    variant="subtle"
                    colorScheme="purple"
                    fontSize="md"
                  >
                    {element}
                  </Badge>
                  {i === array.length - 1 ? null : <ArrowRightIcon />}
                </>
              );
            })}
          </Flex>
        );
      })}
    </Flex>
  );
};

export default DisplayDOS;
