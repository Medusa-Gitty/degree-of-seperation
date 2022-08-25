import React, { useState } from "react";
import { Button, Flex, Input } from "@chakra-ui/react";

const RelationShip = ({ addFriend }) => {
  const [user1, setUser1] = useState("");
  const [user2, setUser2] = useState("");

  function friend() {
    addFriend(user1, user2);
    setUser1("");
    setUser2("");
  }

  return (
    <Flex padding={2} gap={3}>
      <Input
        placeholder="User 1"
        onChange={(e) => setUser1(e.target.value)}
        value={user1}
      />
      <Input
        placeholder="User 2"
        onChange={(e) => setUser2(e.target.value)}
        value={user2}
      />

      <Button
        colorScheme="teal"
        variant="outline"
        width="100%"
        onClick={friend}
      >
        Add as a friend
      </Button>
    </Flex>
  );
};

export default RelationShip;
