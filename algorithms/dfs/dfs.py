from typing import List


def dfs(graph: List[List[int]], start: int) -> List[int]:
    """Return the DFS traversal order from start."""
    visited = [False] * len(graph)
    order = []

    def visit(vertex: int) -> None:
        visited[vertex] = True
        order.append(vertex)

        for neighbor in graph[vertex]:
            if not visited[neighbor]:
                visit(neighbor)

    visit(start)
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

    print("DFS traversal:", dfs(graph, 0))
