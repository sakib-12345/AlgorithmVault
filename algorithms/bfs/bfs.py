from collections import deque
from typing import List


def bfs(graph: List[List[int]], start: int) -> List[int]:
    """Return the BFS traversal order from start."""
    visited = [False] * len(graph)
    order = []
    queue = deque([start])
    visited[start] = True

    while queue:
        vertex = queue.popleft()
        order.append(vertex)

        for neighbor in graph[vertex]:
            if not visited[neighbor]:
                visited[neighbor] = True
                queue.append(neighbor)

    return order


if __name__ == "__main__":
    graph = [
        [1, 2],
        [0, 3, 4],
        [0, 5],
        [1],
        [1],
        [2],
    ]

    print("BFS traversal:", bfs(graph, 0))
