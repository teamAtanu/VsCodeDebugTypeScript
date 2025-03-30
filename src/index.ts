import { Graph } from './Graph';
console.log('Hello, This is a TypeScript project.');

const graph = new Graph();
graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "C", 5);
graph.addEdge("B", "D", 10);
graph.addEdge("C", "D", 3);
graph.addEdge("D", "E", 8);
graph.addEdge("E", "A", 7);

const shortestPath = graph.findShortestPath("A", "E");
console.log("Shortest Distance:", shortestPath.distance);
console.log("Path:", shortestPath.path);
