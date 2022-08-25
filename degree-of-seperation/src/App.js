import "./App.css";

function App() {
  class Graph {
    constructor() {
      this.adjacencyList = {};
    }
    //add User
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = [];
      }
    }
    //add FriendShip
    addEdge(v1, v2) {
      this.adjacencyList[v1].push(v2);
      this.adjacencyList[v2].push(v1);
    }
    //Remove FriendShip
    removeEdge(v1, v2) {
      this.adjacencyList[v1] = this.adjacencyList[v1].filter((e) => e !== v2);
      this.adjacencyList[v2] = this.adjacencyList[v2].filter((e) => e !== v1);
    }
    //Remove User
    removeVertex(vertex) {
      while (this.adjacencyList[vertex].length) {
        const adjVertex = this.adjacencyList[vertex].pop();
        this.removeEdge(vertex, adjVertex);
      }
      delete this.adjacencyList[vertex];
    }
  }

  let g = new Graph();
  g.addVertex("Sayak");
  g.addVertex("Ankur");
  g.addVertex("Arnab");

  g.addEdge("Sayak", "Arnab");
  g.addEdge("Sayak", "Ankur");

  g.removeVertex("Sayak");

  console.log(g.adjacencyList);

  return <div className="App">Degree of seperation</div>;
}

export default App;
