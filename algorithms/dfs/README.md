# Depth-First Search

Depth-First Search (DFS) is a graph traversal algorithm that explores as far as possible along one branch before backtracking. It is commonly implemented using recursion or an explicit stack.

------------------------------
## 🔦 Overview

* **Definition**: A graph traversal algorithm that visits vertices by going as deep as possible before returning to unexplored branches.
* **Analogy**: Exploring a maze by following one path until you reach a dead end, then backtracking.
* **Core Goal**: Systematically visit all reachable vertices while tracking which vertices have already been visited.

------------------------------
## ⚙️ How it Works

   1. **Initialize**: Create a `visited` array or set to track discovered vertices.
   2. **Start**: Mark the starting vertex as visited.
   3. **Explore**: Visit each unvisited neighbor recursively or push it onto a stack.
   4. **Backtrack**: When a vertex has no unvisited neighbors, return to the previous vertex.
   5. **Repeat**: Continue until every reachable vertex has been visited.

------------------------------
## 🎯 When to Use

* **Graph Traversal**: Visit every vertex reachable from a starting point.
* **Cycle Detection**: Detect cycles with suitable state tracking.
* **Path Finding**: Determine whether a path exists between vertices.
* **Connected Components**: Find components in an undirected graph.
* **Backtracking Problems**: Useful for mazes, puzzles, permutations, and constraint-search problems.

------------------------------
## 🚀 Application

* **Maze Solving**: Explore possible routes through a maze.
* **Dependency Analysis**: Traverse dependency graphs.
* **File Systems**: Explore directory trees recursively.
* **Topological Sorting**: DFS is a standard building block for DAGs.
* **AI Search**: Explore a state space when deep exploration is preferred.

------------------------------
## ⚠️ Common Mistakes

* **Missing `visited` Tracking**: Cyclic graphs can cause infinite traversal.
* **Recursion Depth**: Very deep graphs can overflow the call stack; use an explicit stack when necessary.
* **Directed vs Undirected Edges**: Add edges in both directions only when the graph is undirected.
* **Disconnected Graphs**: A single DFS from one vertex does not visit unreachable components.

-------------------------
## 👾 Pseudocode

```text
DFS(graph, start)

    create visited array and set all values to false

    DFSVisit(start)

DFSVisit(vertex)

    visited[vertex] ← true
    process vertex

    for each neighbor of vertex do
        if visited[neighbor] = false then
            DFSVisit(neighbor)
```

-------------------------
## ⏱️ Complexity

* **Time**: `O(V + E)` with an adjacency-list representation.
* **Space**: `O(V)` for visited data plus recursion/stack space.
