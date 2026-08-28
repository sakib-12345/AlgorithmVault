#include <iostream>
#include <queue>
#include <vector>

using namespace std;

vector<int> bfs(const vector<vector<int>>& graph, int start) {
    vector<bool> visited(graph.size(), false);
    vector<int> order;
    queue<int> q;

    visited[start] = true;
    q.push(start);

    while (!q.empty()) {
        int vertex = q.front();
        q.pop();

        order.push_back(vertex);

        for (int neighbor : graph[vertex]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                q.push(neighbor);
            }
        }
    }

    return order;
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

    vector<int> order = bfs(graph, 0);

    cout << "BFS traversal: ";
    for (int vertex : order) cout << vertex << ' ';
    cout << '\n';

    return 0;
}
