import React, { useState } from "react";
import { Box, Button, Flex, Input, useToast } from "@chakra-ui/react";

const Users = ({ addUser }) => {
  const [user, setUser] = useState("");

  const toast = useToast();

  function submitUser() {
    if (user === "") {
      toast({
        title: "Please use a valid user name",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    addUser(user);
    setUser("");
  }

  return (
    <Flex direction="column" p={3} gap={2}>
      <Box fontSize={["20px", "25px"]} align="left">
        Add an user :
      </Box>
      <Flex gap={4}>
        <Input
          placeholder="Add user"
          onChange={(e) => setUser(e.target.value)}
          value={user}
        />
        <Button colorScheme="teal" variant="solid" onClick={submitUser}>
          Add User
        </Button>
      </Flex>
    </Flex>
  );
};

export default Users;
