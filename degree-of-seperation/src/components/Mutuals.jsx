import { Box, Button, Flex, Select } from "@chakra-ui/react";
import React from "react";

const Mutuals = ({ list }) => {
  const users = Object.keys(list);

  console.log(users);

  return (
    <>
      <Box>Select Mutuals</Box>
      <Flex gap={2} padding={2}>
        <Select placeholder="Select user 1" variant="filled">
          {users.map((user, i) => {
            return (
              <option value={user} key={i}>
                {user}
              </option>
            );
          })}
        </Select>
        <Select placeholder="Select user 2" variant="filled">
          {users.map((user, i) => {
            return (
              <option value={user} key={i}>
                {user}
              </option>
            );
          })}
        </Select>
      </Flex>
      <Button colorScheme="teal" variant="solid">
        Find degree of seperation
      </Button>
    </>
  );
};

export default Mutuals;
