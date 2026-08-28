# Dijkstra's Algorithm

Dijkstra's Algorithm is a greedy shortest-path algorithm that finds the minimum distance from a source vertex to every other reachable vertex in a weighted graph with non-negative edge weights.

------------------------------
## 🔦 Overview

* **Definition**: A shortest-path algorithm that repeatedly finalizes the currently closest vertex and relaxes its outgoing edges.
* **Analogy**: Starting from your home, repeatedly choosing the nearest not-yet-finalized location and using it to improve known routes.
* **Core Goal**: Compute the shortest distance from one source to all other vertices.

------------------------------
## ⚙️ How it Works

   1. **Initialize**: Set the source distance to `0` and every other distance to infinity.
   2. **Select**: Choose the unprocessed vertex with the smallest known distance.
   3. **Relax**: For each neighbor, calculate `distance[current] + edge_weight`.
   4. **Update**: If the new distance is smaller, replace the neighbor's current distance.
   5. **Repeat**: Continue until all useful vertices are processed or the priority queue is empty.

------------------------------
## 🎯 When to Use

* **Weighted Graphs**: Use when edges have costs, distances, or travel times.
* **Non-Negative Weights**: Every edge weight must be `>= 0`.
* **Single-Source Shortest Paths**: Find distances from one source to all reachable vertices.
* **Routing**: Useful for roads, networks, and weighted maps.
* **Large Sparse Graphs**: Efficient with an adjacency list and min-heap.

------------------------------
## 🚀 Application

* **GPS and Navigation**: Compute shortest routes with non-negative costs.
* **Computer Networks**: Model shortest-cost routing.
* **Game Development**: Find low-cost paths across weighted maps.
* **Robotics**: Plan paths where movement has different costs.
* **Network Optimization**: Minimize accumulated connection costs.

------------------------------
## ⚠️ Common Mistakes

* **Negative Edge Weights**: Dijkstra is not valid with negative-weight edges; use Bellman-Ford instead.
* **Overflow**: Use a sufficiently large numeric type for distances.
* **Forgetting Relaxation**: Always check whether a new route is cheaper.
* **Wrong Priority Queue Order**: The smallest distance must be processed first.
* **Confusing Distance and Edge Weight**: A path's distance is the sum of its edge weights.

-------------------------
## 👾 Pseudocode

```text
Dijkstra(graph, source)

    for each vertex v do
        distance[v] ← infinity

    distance[source] ← 0

    create min-priority queue
    insert (0, source)

    while priority queue is not empty do

        (currentDistance, vertex) ← extract minimum

        if currentDistance > distance[vertex] then
            continue

        for each edge (vertex, neighbor, weight) do

            newDistance ← currentDistance + weight

            if newDistance < distance[neighbor] then
                distance[neighbor] ← newDistance
                insert (newDistance, neighbor) into priority queue

    return distance
```

-------------------------
## ⏱️ Complexity

* **Time**: `O((V + E) log V)` with an adjacency list and binary min-heap.
* **Space**: `O(V + E)` for the graph, distances, and priority queue.
* **Requirement**: Edge weights must be non-negative.
