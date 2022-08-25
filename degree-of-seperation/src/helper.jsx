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
  //DFS RECURSIVE TRAVERSAL
  depthFirstRecursive(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if (!vertex) return;

      visited[vertex] = true;
      result.push(vertex);

      adjacencyList[vertex].forEach((e) => {
        if (!visited[e]) {
          return dfs(e);
        }
      });
    })(start);

    return result;
  }
  breadthFirst(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    let current;

    while (queue.length) {
      current = queue.shift();
      result.push(current);

      this.adjacencyList[current].forEach((e) => {
        if (!visited[e]) {
          visited[e] = true;
          queue.push(e);
        }
      });
    }

    return result;
  }
}

let g = new Graph();
g.addVertex("Sameer");
g.addVertex("Aayushi");
g.addVertex("Bhaskar");
g.addVertex("Kamalnath Sharma");
g.addVertex("Shanti Kumar Saha");

g.addEdge("Sameer", "Aayushi");
g.addEdge("Aayushi", "Bhaskar");
g.addEdge("Sameer", "Kamalnath Sharma");
g.addEdge("Shanti Kumar Saha", "Kamalnath Sharma");
g.addEdge("Shanti Kumar Saha", "Bhaskar");

console.log(g.adjacencyList);
