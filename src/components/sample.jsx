import React, { useState } from "react";

// Dijkstra's Algorithm function
function dijkstra(graph, source) {
  const distances = {};
  const visited = {};
  const previous = {};
  const queue = [];

  // Initialize distances, previous nodes, and queue
  for (let vertex in graph) {
    distances[vertex] = Infinity;
    previous[vertex] = null;
    queue.push(vertex);
  }
  distances[source] = 0;

  // Dijkstra's Algorithm
  while (queue.length > 0) {
    let minVertex = queue.reduce((min, vertex) => {
      return distances[vertex] < distances[min] ? vertex : min;
    });

    // Remove minVertex from the queue
    queue.splice(queue.indexOf(minVertex), 1);

    for (let neighbor in graph[minVertex]) {
      let alt = distances[minVertex] + graph[minVertex][neighbor];
      if (alt < distances[neighbor]) {
        distances[neighbor] = alt;
        previous[neighbor] = minVertex;
      }
    }
  }

  return { distances, previous };
}

// Sample weighted undirected graph representation
const graph = {
  A: { B: 2, C: 1 },
  B: { A: 2, C: 2, D: 1 },
  C: { A: 1, B: 2, D: 4, E: 3 },
  D: { B: 1, C: 4, E: 5 },
  E: { C: 3, D: 5 },
};

const App = () => {
  const [source, setSource] = useState("A");
  const [shortestPaths, setShortestPaths] = useState(null);

  const findShortestPaths = () => {
    const { distances, previous } = dijkstra(graph, source);
    setShortestPaths({ distances, previous });
  };

  return (
    <div>
      <h1>Dijkstra's Algorithm</h1>
      <div>
        <label>Select source node:</label>
        <select onChange={(e) => setSource(e.target.value)}>
          {Object.keys(graph).map((node) => (
            <option key={node} value={node}>
              {node}
            </option>
          ))}
        </select>
        <button onClick={findShortestPaths}>Find Shortest Paths</button>
      </div>
      {shortestPaths && (
        <div>
          <h2>Shortest Paths from {source}:</h2>
          <ul>
            {Object.keys(shortestPaths.distances).map((node) => (
              <li key={node}>
                {node}: {shortestPaths.distances[node]}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
