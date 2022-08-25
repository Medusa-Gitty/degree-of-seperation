import { useEffect, useState } from "react";
import "./App.css";
import Users from "./components/Users";
import Relationship from "./components/RelationShip";
import AllUsers from "./components/AllUsers";

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
  ];

  arr.forEach((user) => {
    addUser(user);
  });

  useEffect(() => {
    addFriend("Sameer", "Aayushi");
    addFriend("Bhaskar", "Aayushi");
    addFriend("Sameer", "Kamalnath Sharma");
    addFriend("Kamalnath Sharma", "Shanti Kumar Saha");
    addFriend("Shanti Kumar Saha", "Bhaskar");
  }, []);

  useEffect(() => {
    console.log(list);
    let results = [];
    let visited = {};
    dfs("Sameer", "Bhaskar");

    function dfs(current, end) {
      console.log(current);
      visited[current] = true;

      if (current === end) {
        console.log("Found", current);
        visited[current] = false;
        return;
      }

      for (let i = 0; i < list[current].length; i++) {
        if (!visited[list[current][i]]) {
          dfs(list[current][i], end);
        }
      }
    }

    console.log(results);
  }, []);

  return (
    <div className="App">
      <div>Degree of seperation</div>
      <Users addUser={addUser} />
      <Relationship addFriend={addFriend} />
      <AllUsers list={list} />
    </div>
  );
}

export default App;
