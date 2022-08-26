import { useEffect, useState } from "react";
import "./App.css";
import Users from "./components/Users";
import Relationship from "./components/RelationShip";
import AllUsers from "./components/AllUsers";
import Mutuals from "./components/Mutuals";
import { Box, Flex } from "@chakra-ui/react";

function App() {
  const [list, setList] = useState({});

  function addUser(user) {
    if (!list[user]) {
      list[user] = [];
      setList({ ...list });
    } else {
      //ERROR
      return;
    }
  }

  function addFriend(u1, u2) {
    list[u1].push(u2);
    list[u2].push(u1);
    setList({ ...list });
  }

  let arr = [
    "Sameer",
    "Aayushi",
    "Bhaskar",
    "Kamalnath Sharma",
    "Shanti Kumar Saha",
    "Sayak",
  ];

  arr.forEach((user) => {
    addUser(user);
  });

  useEffect(() => {
    addFriend("Sameer", "Aayushi");
    addFriend("Aayushi", "Sayak");
    addFriend("Bhaskar", "Aayushi");
    addFriend("Sameer", "Kamalnath Sharma");
    addFriend("Kamalnath Sharma", "Shanti Kumar Saha");
    addFriend("Shanti Kumar Saha", "Bhaskar");
  }, []);

  useEffect(() => {
    const visited = {};
    const routes = [];
    const ans = [];

    function dfs(current, end) {
      if (visited[current]) {
        return;
      }

      visited[current] = true;
      routes.push(current);

      if (current === end) {
        ans.push([...routes]);
        visited[current] = false;
        routes.pop();
        return;
      }

      for (let i = 0; i < list[current].length; i++) {
        dfs(list[current][i], end);
      }

      routes.pop();
      visited[current] = false;
    }
    // dfs("Kamalnath Sharma", "Bhaskar");
  }, []);

  return (
    <Box className="App">
      <Box>Degree of seperation</Box>
      <Users addUser={addUser} />
      <Relationship addFriend={addFriend} />
      <AllUsers list={list} />
      <Mutuals list={list} />
    </Box>
  );
}

export default App;
