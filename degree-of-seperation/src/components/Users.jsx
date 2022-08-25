import React, { useState } from "react";
import { Button, Flex, Input } from "@chakra-ui/react";

const Users = ({ addUser }) => {
  const [user, setUser] = useState("");

  function submitUser() {
    addUser(user);
    setUser("");
  }

  return (
    <Flex width="50%" padding={2} gap={3}>
      <Input
        placeholder="Add user"
        onChange={(e) => setUser(e.target.value)}
        value={user}
      />
      <Button
        colorScheme="teal"
        variant="outline"
        onClick={submitUser}
        width="100%"
      >
        Add User
      </Button>
    </Flex>
  );
};

export default Users;
