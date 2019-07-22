class Queue {
    constructor() {
        this.list = [];
    }

    enqueue(value) {
        this.list[this.list.length] = value;
    }

    dequeue() { 
        return this.list.shift();
    }

    isEmpty() {
        return (this.list.length === 0 ? true : false);
    }
}


class Graph {
    constructor() {
        this.list = new Map();
    }

    addVertex(value) {
        this.list.set(value, []);
    }

    addEdges(vertex1, vertex2) {
        this.list.get(vertex1).push(vertex2);
        this.list.get(vertex2).push(vertex1);
    }

    addVertices(...vertices) {
        vertices.forEach((vertex) => this.addVertex(vertex));
    }

    printGraph() {
        if(this.list.keys()) for(let key of this.list.keys()) console.log(key + " ===> " + this.list.get(key));
    }

    breadthFirstSearch(startNode) {
        let visited = new Set();

        let queue = new Queue();

        visited.add(startNode);
        queue.enqueue(startNode);

        while(!queue.isEmpty()) {
            let currentVertex = queue.dequeue();
            console.log(currentVertex);
            let edges = this.list.get(currentVertex);

            for(let edge in edges) {
                let neighbour = edges[edge];

                if(!visited.has(neighbour)) {
                    queue.enqueue(neighbour);
                    visited.add(neighbour);
                }
            }

        }
    }

    depthFirstSearch(startNode) {
        let visited = new Set() 

        return this.dfs(startNode, visited);

    }

    dfs(startNode, visited) {
        visited.add(startNode);
        console.log(startNode); 

        let neighbours = this.list.get(startNode);

        for(let key in neighbours) {
            let neighbour = neighbours[key];
            if(!visited.has(neighbour)) {
                this.dfs(neighbour, visited);
            }
        }
    }
}
    
const didah = new Graph();
didah.addVertex("A");
didah.addVertices("B", "C", "D", "E");
didah.addEdges("A", "B");
didah.addEdges("A", "E");
didah.addEdges("C", "D");
didah.addEdges("A", "C");
didah.addEdges("E", "D");
didah.breadthFirstSearch("D");
console.log("\n-------------------\n")
didah.depthFirstSearch("A");
console.log("\n-------------------\n")
didah.printGraph();