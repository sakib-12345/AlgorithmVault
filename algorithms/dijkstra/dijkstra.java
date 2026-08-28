import java.util.*;

public class Dijkstra {
    static class Edge {
        int to;
        int weight;

        Edge(int to, int weight) {
            this.to = to;
            this.weight = weight;
        }
    }

    static long[] dijkstra(List<List<Edge>> graph, int source) {
        int n = graph.size();
        long INF = Long.MAX_VALUE;
        long[] distance = new long[n];
        Arrays.fill(distance, INF);
        distance[source] = 0;

        PriorityQueue<long[]> pq =
            new PriorityQueue<>(Comparator.comparingLong(a -> a[0]));

        pq.offer(new long[]{0, source});

        while (!pq.isEmpty()) {
            long[] current = pq.poll();
            long currentDistance = current[0];
            int vertex = (int) current[1];

            if (currentDistance != distance[vertex]) continue;

            for (Edge edge : graph.get(vertex)) {
                if (edge.weight < 0) {
                    throw new IllegalArgumentException(
                        "Dijkstra requires non-negative edge weights."
                    );
                }

                long newDistance = currentDistance + edge.weight;

                if (newDistance < distance[edge.to]) {
                    distance[edge.to] = newDistance;
                    pq.offer(new long[]{newDistance, edge.to});
                }
            }
        }

        return distance;
    }

    public static void main(String[] args) {
        List<List<Edge>> graph = new ArrayList<>();
        for (int i = 0; i < 5; i++) graph.add(new ArrayList<>());

        graph.get(0).add(new Edge(1, 4));
        graph.get(0).add(new Edge(2, 1));
        graph.get(1).add(new Edge(3, 1));
        graph.get(2).add(new Edge(1, 2));
        graph.get(2).add(new Edge(3, 5));
        graph.get(3).add(new Edge(4, 3));

        long[] distance = dijkstra(graph, 0);

        System.out.println("Shortest distances from vertex 0: "
                + Arrays.toString(distance));
    }
}
