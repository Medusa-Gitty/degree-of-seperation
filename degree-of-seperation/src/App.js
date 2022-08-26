import { useEffect, useState } from "react";
import "./App.css";
import Users from "./components/Users";
import Relationship from "./components/RelationShip";
import AllUsers from "./components/AllUsers";
import Mutuals from "./components/Mutuals";
import { Box, useToast } from "@chakra-ui/react";
import DisplayDOS from "./components/DisplayDOS";

function App() {
  const [list, setList] = useState({});
  const [result, setResult] = useState(null);

  const toast = useToast();

  function addUser(user) {
    if (!list[user]) {
      list[user] = [];
      setList({ ...list });
    } else {
      toast({
        title: "User already added",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
  }

  function autoAddUsers() {
    let arr = [
      "Sameer",
      "Aayushi",
      "Bhaskar",
      "Kamalnath Sharma",
      "Shanti Kumar Saha",
      "Sayak",
      "Adil",
    ];
    arr.forEach((user) => {
      addUser(user);
    });
  }

  function addFriend(u1, u2) {
    const found = list[u1].find((e) => e === u2);
    if (found !== undefined) {
      toast({
        title: "Both users are already friend",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    list[u1].push(u2);
    list[u2].push(u1);
    setList({ ...list });
  }

  function autoAddFriend() {
    addFriend("Sameer", "Aayushi");
    addFriend("Aayushi", "Sayak");
    addFriend("Bhaskar", "Aayushi");
    addFriend("Sameer", "Kamalnath Sharma");
    addFriend("Kamalnath Sharma", "Shanti Kumar Saha");
    addFriend("Shanti Kumar Saha", "Bhaskar");
  }

  function doS(start, target) {
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
    dfs(start, target);
    setResult(ans);
  }

  return (
    <Box className="App">
      <Users addUser={addUser} autoAddUsers={autoAddUsers} />
      <AllUsers list={list} />
      <Relationship
        addFriend={addFriend}
        list={list}
        autoAddFriend={autoAddFriend}
      />
      <Mutuals list={list} doS={doS} />
      <DisplayDOS result={result} />
    </Box>
  );
}

export default App;
