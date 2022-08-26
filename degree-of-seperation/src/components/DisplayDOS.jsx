import { Box } from "@chakra-ui/react";
import React from "react";

const DisplayDOS = ({ result }) => {
  return (
    <>
      {result.map((array, i) => {
        return (
          <>
            {array.map((element, i) => {
              return <span>{element}</span>;
            })}
            <Box>------------</Box>
          </>
        );
      })}
    </>
  );
};

export default DisplayDOS;

// array.map((element, i) => {
//   return <span>{element}</span>;
// });
