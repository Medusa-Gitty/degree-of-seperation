import { useState } from "react";
import "./App.css";
import Users from "./components/Users";
import Relationship from "./components/RelationShip";

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

  console.log(list);

  return (
    <div className="App">
      <div>Degree of seperation</div>
      <Users addUser={addUser} />
      <Relationship addFriend={addFriend} />
    </div>
  );
}

export default App;
