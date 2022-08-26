import { Badge, Box, Flex } from "@chakra-ui/react";
import React from "react";

const AllUsers = ({ list }) => {
  const users = Object.keys(list);
  return (
    <Flex direction="column" p={3} gap={2}>
      <Box fontSize={["20px", "25px"]} align="left">
        All Users :
      </Box>
      <Flex>
        {users.length !== 0
          ? users.map((user, i) => {
              return (
                <Badge ml="1" fontSize="0.8em" colorScheme="green" key={i}>
                  {user}
                </Badge>
              );
            })
          : null}
      </Flex>
    </Flex>
  );
};

export default AllUsers;
