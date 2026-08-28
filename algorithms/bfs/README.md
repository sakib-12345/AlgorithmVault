# Breadth-First Search

Breadth-First Search (BFS) is a graph traversal algorithm that explores vertices level by level. It uses a queue and is especially useful for finding shortest paths in unweighted graphs.

------------------------------
## 🔦 Overview

* **Definition**: A graph traversal algorithm that visits all vertices at the current distance before moving to the next distance level.
* **Analogy**: Searching a building floor by floor instead of going deep into one hallway.
* **Core Goal**: Traverse a graph systematically by increasing distance from the starting vertex.

------------------------------
## ⚙️ How it Works

   1. **Initialize**: Create a `visited` array or set and an empty queue.
   2. **Start**: Mark the starting vertex as visited and enqueue it.
   3. **Process**: Remove the front vertex from the queue.
   4. **Explore**: Add each unvisited neighbor to the queue and mark it visited.
   5. **Repeat**: Continue until the queue becomes empty.

------------------------------
## 🎯 When to Use

* **Unweighted Shortest Paths**: Find the minimum number of edges between vertices.
* **Level-Order Traversal**: Process graph nodes by distance from a source.
* **Connectivity**: Determine which vertices are reachable.
* **Social Networks**: Find users within a certain number of connections.
* **Grid Problems**: Traverse matrices level by level.

------------------------------
## 🚀 Application

* **Shortest Paths**: Find minimum-hop routes in unweighted graphs.
* **Web Crawlers**: Explore links by levels.
* **Networking**: Analyze hop distance between nodes.
* **Puzzle Solving**: Find minimum moves when every move has equal cost.
* **Binary Trees**: Perform level-order traversal.

------------------------------
## ⚠️ Common Mistakes

* **Using a Stack Instead of a Queue**: That changes the traversal toward DFS.
* **Marking Too Late**: Mark vertices visited when they are enqueued.
* **Weighted Graphs**: Standard BFS does not solve general weighted shortest paths.
* **Disconnected Graphs**: BFS from one start vertex only reaches its connected component.

-------------------------
## 👾 Pseudocode

```text
BFS(graph, start)

    create visited array and set all values to false
    create empty queue

    visited[start] ← true
    enqueue start

    while queue is not empty do

        vertex ← dequeue
        process vertex

        for each neighbor of vertex do
            if visited[neighbor] = false then
                visited[neighbor] ← true
                enqueue neighbor
```

-------------------------
## ⏱️ Complexity

* **Time**: `O(V + E)` with an adjacency-list representation.
* **Space**: `O(V)` for visited data and the queue.
* For an unweighted graph, BFS computes shortest distance in number of edges.
