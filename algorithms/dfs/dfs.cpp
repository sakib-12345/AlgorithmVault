#include <iostream>
#include <vector>

using namespace std;

void dfs(const vector<vector<int>>& graph,
         int vertex,
         vector<bool>& visited,
         vector<int>& order) {
    visited[vertex] = true;
    order.push_back(vertex);

    for (int neighbor : graph[vertex]) {
        if (!visited[neighbor]) {
            dfs(graph, neighbor, visited, order);
        }
    }
}

int main() {
    vector<vector<int>> graph = {
        {1, 2},
        {0, 3, 4},
        {0, 5},
        {1},
        {1},
        {2}
    };

    vector<bool> visited(graph.size(), false);
    vector<int> order;

    dfs(graph, 0, visited, order);

    cout << "DFS traversal: ";
    for (int vertex : order) cout << vertex << ' ';
    cout << '\n';

    return 0;
}
