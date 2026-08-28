#include <iostream>
#include <limits>
#include <queue>
#include <stdexcept>
#include <utility>
#include <vector>

using namespace std;

using Edge = pair<int, int>; // {neighbor, weight}

vector<long long> dijkstra(const vector<vector<Edge>>& graph, int source) {
    const long long INF = numeric_limits<long long>::max();
    vector<long long> distance(graph.size(), INF);

    using State = pair<long long, int>;
    priority_queue<State, vector<State>, greater<State>> pq;

    distance[source] = 0;
    pq.push({0, source});

    while (!pq.empty()) {
        auto [currentDistance, vertex] = pq.top();
        pq.pop();

        if (currentDistance != distance[vertex]) continue;

        for (auto [neighbor, weight] : graph[vertex]) {
            if (weight < 0) {
                throw invalid_argument(
                    "Dijkstra requires non-negative edge weights."
                );
            }

            long long newDistance = currentDistance + weight;

            if (newDistance < distance[neighbor]) {
                distance[neighbor] = newDistance;
                pq.push({newDistance, neighbor});
            }
        }
    }

    return distance;
}

int main() {
    vector<vector<Edge>> graph = {
        {{1, 4}, {2, 1}},
        {{3, 1}},
        {{1, 2}, {3, 5}},
        {{4, 3}},
        {}
    };

    vector<long long> distance = dijkstra(graph, 0);

    cout << "Shortest distances from vertex 0: ";
    for (long long d : distance) {
        if (d == numeric_limits<long long>::max())
            cout << "INF ";
        else
            cout << d << ' ';
    }
    cout << '\n';

    return 0;
}
