import { Box, Button, Flex, Select, useToast } from "@chakra-ui/react";
import React, { useState } from "react";

const Mutuals = ({ list, doS }) => {
  const [user1, setUser1] = useState("");
  const [user2, setUser2] = useState("");

  const toast = useToast();
  const users = Object.keys(list);

  function findDoS() {
    if (user1 === "" || user2 === "" || user1 === user2) {
      toast({
        title: "Please select two different users",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      setUser1("");
      setUser2("");
      return;
    }
    doS(user1, user2);
    setUser1("");
    setUser2("");
  }

  return (
    <Flex direction="column" p={3} gap={2}>
      <Box fontSize={["20px", "25px"]} align="left">
        Find Degree of Seperation :
      </Box>
      <Flex gap={4}>
        <Select
          placeholder="Select user 1"
          variant="filled"
          onChange={(e) => setUser1(e.target.value)}
          value={user1}
        >
          {users.map((user, i) => {
            return (
              <option value={user} key={i}>
                {user}
              </option>
            );
          })}
        </Select>
        <Select
          placeholder="Select user 2"
          variant="filled"
          onChange={(e) => setUser2(e.target.value)}
          value={user2}
        >
          {users.map((user, i) => {
            return (
              <option value={user} key={i}>
                {user}
              </option>
            );
          })}
        </Select>
        <Button
          colorScheme="teal"
          variant="solid"
          onClick={findDoS}
          width="100%"
        >
          Find degree of seperation
        </Button>
      </Flex>
    </Flex>
  );
};

export default Mutuals;
