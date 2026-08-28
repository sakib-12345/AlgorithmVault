import java.util.*;

public class DFS {
    static void dfs(List<List<Integer>> graph, int vertex,
                    boolean[] visited, List<Integer> order) {
        visited[vertex] = true;
        order.add(vertex);

        for (int neighbor : graph.get(vertex)) {
            if (!visited[neighbor]) {
                dfs(graph, neighbor, visited, order);
            }
        }
    }

    static List<Integer> dfs(List<List<Integer>> graph, int start) {
        boolean[] visited = new boolean[graph.size()];
        List<Integer> order = new ArrayList<>();
        dfs(graph, start, visited, order);
        return order;
    }

    public static void main(String[] args) {
        List<List<Integer>> graph = new ArrayList<>();
        graph.add(Arrays.asList(1, 2));
        graph.add(Arrays.asList(0, 3, 4));
        graph.add(Arrays.asList(0, 5));
        graph.add(Collections.singletonList(1));
        graph.add(Collections.singletonList(1));
        graph.add(Collections.singletonList(2));

        System.out.println("DFS traversal: " + dfs(graph, 0));
    }
}
