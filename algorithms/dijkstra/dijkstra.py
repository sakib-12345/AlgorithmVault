import heapq
from typing import List, Tuple


def dijkstra(graph: List[List[Tuple[int, int]]], source: int) -> List[float]:
    """Return shortest distances from source using Dijkstra's algorithm."""
    distance = [float("inf")] * len(graph)
    distance[source] = 0

    priority_queue = [(0, source)]

    while priority_queue:
        current_distance, vertex = heapq.heappop(priority_queue)

        if current_distance > distance[vertex]:
            continue

        for neighbor, weight in graph[vertex]:
            if weight < 0:
                raise ValueError("Dijkstra requires non-negative edge weights.")

            new_distance = current_distance + weight

            if new_distance < distance[neighbor]:
                distance[neighbor] = new_distance
                heapq.heappush(priority_queue, (new_distance, neighbor))

    return distance


if __name__ == "__main__":
    # Directed weighted graph: (neighbor, weight)
    graph = [
        [(1, 4), (2, 1)],
        [(3, 1)],
        [(1, 2), (3, 5)],
        [(4, 3)],
        [],
    ]

    print("Shortest distances from vertex 0:", dijkstra(graph, 0))
