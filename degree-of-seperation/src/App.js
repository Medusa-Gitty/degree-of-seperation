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
    console.log(list);

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
        console.log(routes);
        ans.push(routes);
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
    dfs("Sameer", "Bhaskar");
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
