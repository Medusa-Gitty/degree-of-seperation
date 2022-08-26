import React, { useState } from "react";
import { Box, Button, Flex, Select, useToast } from "@chakra-ui/react";

const RelationShip = ({ addFriend, list, autoAddFriend }) => {
  const [user1, setUser1] = useState("");
  const [user2, setUser2] = useState("");
  const [isDisabled, setDisabled] = useState(false);

  const toast = useToast();
  const users = Object.keys(list);

  function friend() {
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

    addFriend(user1, user2);
    setUser1("");
    setUser2("");
  }

  return (
    <Flex direction="column" p={3} gap={2}>
      <Flex gap={3}>
        <Box fontSize={["20px", "25px"]} align="left">
          Set relationship between two users :
        </Box>
        <Button
          colorScheme="yellow"
          variant="solid"
          onClick={() => {
            autoAddFriend();
            setDisabled(true);
          }}
          disabled={isDisabled}
        >
          Auto set DEMO relationship
        </Button>
      </Flex>
      <Flex gap={4}>
        <Select
          placeholder="Select user 1"
          variant="outline"
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
          variant="outline"
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
          colorScheme="pink"
          variant="outline"
          width="100%"
          onClick={friend}
        >
          Add as a friend
        </Button>
      </Flex>
    </Flex>
  );
};

export default RelationShip;
