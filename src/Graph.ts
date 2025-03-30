export class Graph {
    private adjacencyList: Map<string, { node: string; weight: number }[]>;

    constructor() {
        this.adjacencyList = new Map();
    }

    // Add a node to the graph
    addNode(node: string): void {
        if (!this.adjacencyList.has(node)) {
            this.adjacencyList.set(node, []);
        }
    }

    // Add an edge with a weight
    addEdge(node1: string, node2: string, weight: number): void {
        this.addNode(node1);
        this.addNode(node2);
        this.adjacencyList.get(node1)?.push({ node: node2, weight });
        this.adjacencyList.get(node2)?.push({ node: node1, weight }); // For an undirected graph
    }

    // Dijkstra's Algorithm to find the shortest path
    findShortestPath(start: string, end: string): { distance: number, path: string[] } {
        const distances: Map<string, number> = new Map();
        const previous: Map<string, string | null> = new Map();
        const queue: { node: string; priority: number }[] = [];

        // Initialize distances and priority queue
        this.adjacencyList.forEach((_, node) => {
            distances.set(node, node === start ? 0 : Infinity);
            previous.set(node, null);
            queue.push({ node, priority: distances.get(node)! });
        });

        // Sort queue based on priority (shortest distance)
        queue.sort((a, b) => a.priority - b.priority);

        while (queue.length > 0) {
            // Get the node with the smallest distance
            const { node: currentNode } = queue.shift()!;

            if (currentNode === end) break; // Stop when reaching the destination

            for (const neighbor of this.adjacencyList.get(currentNode) || []) {
                const newDist = distances.get(currentNode)! + neighbor.weight;

                if (newDist < distances.get(neighbor.node)!) {
                    distances.set(neighbor.node, newDist);
                    previous.set(neighbor.node, currentNode);
                    
                    // Update priority queue
                    queue.push({ node: neighbor.node, priority: newDist });
                    queue.sort((a, b) => a.priority - b.priority);
                }
            }
        }

        // Reconstruct shortest path
        let path: string[] = [];
        let temp = end;
        while (temp) {
            path.unshift(temp);
            temp = previous.get(temp) || '';
            if (temp === '') break;
        }

        return { distance: distances.get(end)!, path };
    }
}
