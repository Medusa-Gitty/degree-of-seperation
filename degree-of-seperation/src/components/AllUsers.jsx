import { Badge, Box } from "@chakra-ui/react";
import React from "react";

const AllUsers = ({ list }) => {
  const users = Object.keys(list);
  return (
    <>
      <Box>All Users</Box>
      {users.length !== 0
        ? users.map((user, i) => {
            return (
              <Badge ml="1" fontSize="0.8em" colorScheme="green" key={i}>
                {user}
              </Badge>
            );
          })
        : null}
    </>
  );
};

export default AllUsers;
