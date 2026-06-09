let algorithms = [];
let currentView = 'home';
let showingAll = false;
const PREVIEW_COUNT = 12;

const FALLBACK_ALGORITHMS = [
  { id:"binary-search", name:"Binary Search", hint:"Efficient O(log n) searching in sorted arrays", time:"O(log n)", space:"O(1)", tags:["search","divide-conquer"],
    files:{ python:"algorithms/binary-search/binary.py", cpp:"algorithms/binary-search/binary.cpp" },
    readme:"# Binary Search\n\nBinary Search is a divide-and-conquer algorithm that finds the position of a target value within a **sorted array**.\n\n## How it works\n\n1. Start with the middle element\n2. If target == middle found!\n3. If target < middle search left half\n4. If target > middle search right half\n5. Repeat until found or range is empty\n\n## When to use\n\n- Array must be **sorted**\n- Large datasets where linear search is too slow\n\n> Binary search is one of the most fundamental algorithms every developer should master.",
    code:{ python:`def binary_search(arr, target):\n    left, right = 0, len(arr) - 1\n    while left <= right:\n        mid = (left + right) // 2\n        if arr[mid] == target:\n            return mid\n        elif arr[mid] < target:\n            left = mid + 1\n        else:\n            right = mid - 1\n    return -1\n\narr = [1, 3, 5, 7, 9, 11, 13]\nprint(binary_search(arr, 7))  # Output: 3`,
      cpp:`#include <iostream>\n#include <vector>\nusing namespace std;\n\nint binarySearch(vector<int>& arr, int target) {\n    int left = 0, right = arr.size() - 1;\n    while (left <= right) {\n        int mid = left + (right - left) / 2;\n        if (arr[mid] == target) return mid;\n        else if (arr[mid] < target) left = mid + 1;\n        else right = mid - 1;\n    }\n    return -1;\n}\n\nint main() {\n    vector<int> arr = {1, 3, 5, 7, 9, 11, 13};\n    cout << binarySearch(arr, 7) << endl;\n    return 0;\n}` }
  },
  { id:"bubble-sort", name:"Bubble Sort", hint:"Simple comparison-based sorting algorithm", time:"O(n^2)", space:"O(1)", tags:["sort"],
    files:{ python:"algorithms/bubble-sort/bubble.py", cpp:"algorithms/bubble-sort/bubble.cpp" },
    readme:"# Bubble Sort\n\nBubble Sort repeatedly steps through the list, **compares adjacent elements** and swaps them if they're in the wrong order.\n\n## How it works\n\n1. Compare adjacent elements\n2. Swap if out of order\n3. Repeat until no swaps needed\n\n## Characteristics\n\n- **Stable** sort\n- Best case O(n) when already sorted\n- Rarely used in practice",
    code:{ python:`def bubble_sort(arr):\n    n = len(arr)\n    for i in range(n):\n        swapped = False\n        for j in range(0, n - i - 1):\n            if arr[j] > arr[j + 1]:\n                arr[j], arr[j + 1] = arr[j + 1], arr[j]\n                swapped = True\n        if not swapped:\n            break\n    return arr\n\nprint(bubble_sort([64, 34, 25, 12, 22, 11, 90]))`,
      cpp:`#include <iostream>\n#include <vector>\nusing namespace std;\n\nvoid bubbleSort(vector<int>& arr) {\n    int n = arr.size();\n    for (int i = 0; i < n - 1; i++) {\n        bool swapped = false;\n        for (int j = 0; j < n - i - 1; j++) {\n            if (arr[j] > arr[j + 1]) {\n                swap(arr[j], arr[j + 1]);\n                swapped = true;\n            }\n        }\n        if (!swapped) break;\n    }\n}` }
  },
  { id:"quick-sort", name:"Quick Sort", hint:"Fast divide-and-conquer sorting with pivot", time:"O(n log n)", space:"O(log n)", tags:["sort","divide-conquer"],
    files:{ python:"algorithms/quick-sort/quick.py", cpp:"algorithms/quick-sort/quick.cpp" },
    readme:"# Quick Sort\n\nQuick Sort is an efficient, in-place sorting algorithm that uses a **pivot** to partition the array.\n\n## Steps\n\n1. Choose a pivot element\n2. Partition: elements less than pivot go left, greater go right\n3. Recursively sort sub-arrays",
    code:{ python:`def quick_sort(arr):\n    if len(arr) <= 1:\n        return arr\n    pivot = arr[len(arr) // 2]\n    left   = [x for x in arr if x < pivot]\n    middle = [x for x in arr if x == pivot]\n    right  = [x for x in arr if x > pivot]\n    return quick_sort(left) + middle + quick_sort(right)\n\nprint(quick_sort([3,6,8,10,1,2,1]))`,
      cpp:`#include <iostream>\n#include <vector>\nusing namespace std;\n\nint partition(vector<int>& arr, int low, int high) {\n    int pivot = arr[high];\n    int i = low - 1;\n    for (int j = low; j < high; j++) {\n        if (arr[j] <= pivot) swap(arr[++i], arr[j]);\n    }\n    swap(arr[i + 1], arr[high]);\n    return i + 1;\n}\n\nvoid quickSort(vector<int>& arr, int low, int high) {\n    if (low < high) {\n        int pi = partition(arr, low, high);\n        quickSort(arr, low, pi - 1);\n        quickSort(arr, pi + 1, high);\n    }\n}` }
  },
  { id:"merge-sort", name:"Merge Sort", hint:"Stable divide-and-conquer O(n log n) sorting", time:"O(n log n)", space:"O(n)", tags:["sort","divide-conquer"],
    files:{ python:"algorithms/merge-sort/merge.py" },
    readme:"# Merge Sort\n\nMerge Sort is a **stable**, divide-and-conquer algorithm that divides, sorts, and merges.",
    code:{ python:`def merge_sort(arr):\n    if len(arr) <= 1:\n        return arr\n    mid = len(arr) // 2\n    left  = merge_sort(arr[:mid])\n    right = merge_sort(arr[mid:])\n    return merge(left, right)\n\ndef merge(left, right):\n    result = []\n    i = j = 0\n    while i < len(left) and j < len(right):\n        if left[i] <= right[j]:\n            result.append(left[i]); i += 1\n        else:\n            result.append(right[j]); j += 1\n    result.extend(left[i:])\n    result.extend(right[j:])\n    return result\n\nprint(merge_sort([38, 27, 43, 3, 9, 82, 10]))` }
  },
  { id:"linear-search", name:"Linear Search", hint:"Simple sequential scan through a collection", time:"O(n)", space:"O(1)", tags:["search"],
    files:{ python:"algorithms/linear-search/linear.py" },
    readme:"# Linear Search\n\nLinear Search scans each element **one by one** until the target is found.",
    code:{ python:`def linear_search(arr, target):\n    for i, val in enumerate(arr):\n        if val == target:\n            return i\n    return -1\n\nprint(linear_search([4, 2, 7, 1, 9], 7))  # 2` }
  },
  { id:"insertion-sort", name:"Insertion Sort", hint:"Build sorted array one element at a time", time:"O(n^2)", space:"O(1)", tags:["sort"],
    files:{ python:"algorithms/insertion-sort/insertion.py" },
    readme:"# Insertion Sort\n\nBuilds the sorted list **one item at a time**.",
    code:{ python:`def insertion_sort(arr):\n    for i in range(1, len(arr)):\n        key = arr[i]\n        j = i - 1\n        while j >= 0 and arr[j] > key:\n            arr[j + 1] = arr[j]\n            j -= 1\n        arr[j + 1] = key\n    return arr\n\nprint(insertion_sort([12, 11, 13, 5, 6]))` }
  },
  { id:"selection-sort", name:"Selection Sort", hint:"Select minimum and place in sorted position", time:"O(n^2)", space:"O(1)", tags:["sort"],
    files:{ python:"algorithms/selection-sort/selection.py" },
    readme:"# Selection Sort\n\nFinds the **minimum element** from the unsorted portion and moves it to the front.",
    code:{ python:`def selection_sort(arr):\n    n = len(arr)\n    for i in range(n):\n        min_idx = i\n        for j in range(i + 1, n):\n            if arr[j] < arr[min_idx]:\n                min_idx = j\n        arr[i], arr[min_idx] = arr[min_idx], arr[i]\n    return arr\n\nprint(selection_sort([64, 25, 12, 22, 11]))` }
  },
  { id:"dfs", name:"Depth-First Search", hint:"Explore graph as deep as possible before backtracking", time:"O(V+E)", space:"O(V)", tags:["graph","traversal"],
    files:{ python:"algorithms/dfs/dfs.py" },
    readme:"# Depth-First Search (DFS)\n\nDFS explores a graph by going as **deep as possible** before backtracking.",
    code:{ python:`def dfs(graph, start, visited=None):\n    if visited is None:\n        visited = set()\n    visited.add(start)\n    print(start, end=' ')\n    for neighbor in graph[start]:\n        if neighbor not in visited:\n            dfs(graph, neighbor, visited)\n    return visited\n\ngraph = {0:[1,2], 1:[2], 2:[0,3], 3:[3]}\ndfs(graph, 2)` }
  },
  { id:"bfs", name:"Breadth-First Search", hint:"Explore graph level by level using a queue", time:"O(V+E)", space:"O(V)", tags:["graph","traversal"],
    files:{ python:"algorithms/bfs/bfs.py" },
    readme:"# Breadth-First Search (BFS)\n\nBFS explores all nodes at the **current depth** before moving to the next level.",
    code:{ python:`from collections import deque\n\ndef bfs(graph, start):\n    visited = set([start])\n    queue   = deque([start])\n    while queue:\n        node = queue.popleft()\n        print(node, end=' ')\n        for neighbor in graph[node]:\n            if neighbor not in visited:\n                visited.add(neighbor)\n                queue.append(neighbor)\n\ngraph = {0:[1,2], 1:[2], 2:[0,3], 3:[]}\nbfs(graph, 0)` }
  },
  { id:"dijkstra", name:"Dijkstra's Algorithm", hint:"Shortest path in weighted graphs", time:"O((V+E) log V)", space:"O(V)", tags:["graph","shortest-path"],
    files:{ python:"algorithms/dijkstra/dijkstra.py" },
    readme:"# Dijkstra's Algorithm\n\nFinds the **shortest path** from a source node to all other nodes in a weighted graph with non-negative weights.",
    code:{ python:`import heapq\n\ndef dijkstra(graph, start):\n    dist = {node: float('inf') for node in graph}\n    dist[start] = 0\n    pq = [(0, start)]\n    while pq:\n        d, u = heapq.heappop(pq)\n        if d > dist[u]: continue\n        for v, w in graph[u]:\n            if dist[u] + w < dist[v]:\n                dist[v] = dist[u] + w\n                heapq.heappush(pq, (dist[v], v))\n    return dist\n\ngraph = {'A':[('B',1),('C',4)], 'B':[('C',2),('D',5)], 'C':[('D',1)], 'D':[]}\nprint(dijkstra(graph, 'A'))` }
  },
  { id:"fibonacci", name:"Fibonacci", hint:"Classic recursion with dynamic programming optimization", time:"O(n)", space:"O(n)", tags:["dp","recursion"],
    files:{ python:"algorithms/fibonacci/fib.py" },
    readme:"# Fibonacci Sequence\n\nCompute the nth Fibonacci number using **dynamic programming**.",
    code:{ python:`def fibonacci(n):\n    if n <= 1:\n        return n\n    a, b = 0, 1\n    for _ in range(2, n + 1):\n        a, b = b, a + b\n    return b\n\nprint([fibonacci(i) for i in range(10)])` }
  },
  { id:"two-sum", name:"Two Sum", hint:"Find pair that adds to target using hash map", time:"O(n)", space:"O(n)", tags:["hash","array"],
    files:{ python:"algorithms/two-sum/two_sum.py" },
    readme:"# Two Sum\n\nGiven an array and a target, find **two numbers that add up to the target**.",
    code:{ python:`def two_sum(nums, target):\n    seen = {}\n    for i, num in enumerate(nums):\n        complement = target - num\n        if complement in seen:\n            return [seen[complement], i]\n        seen[num] = i\n    return []\n\nprint(two_sum([2, 7, 11, 15], 9))  # [0, 1]` }
  },
  { id:"factorial", name:"Factorial", hint:"Product of all positive integers up to n", time:"O(n)", space:"O(n)", tags:["recursion","math"],
    files:{ python:"algorithms/factorial/factorial.py" },
    readme:"# Factorial\n\nComputes **n!** using recursive, iterative, and built-in approaches.",
    code:{ python:`import math\n\ndef factorial_recursive(n):\n    if n <= 1: return 1\n    return n * factorial_recursive(n - 1)\n\ndef factorial_iterative(n):\n    result = 1\n    for i in range(2, n + 1):\n        result *= i\n    return result\n\nprint(factorial_recursive(5))  # 120\nprint(math.factorial(5))       # 120` }
  },
  { id:"palindrome-check", name:"Palindrome Check", hint:"Verify if a string reads the same forwards and back", time:"O(n)", space:"O(1)", tags:["string","two-pointer"],
    files:{ python:"algorithms/palindrome/palindrome.py" },
    readme:"# Palindrome Check\n\nDetermines if a string reads the **same forwards and backwards**.",
    code:{ python:`def is_palindrome(s):\n    cleaned = ''.join(c.lower() for c in s if c.isalnum())\n    left, right = 0, len(cleaned) - 1\n    while left < right:\n        if cleaned[left] != cleaned[right]:\n            return False\n        left += 1\n        right -= 1\n    return True\n\nprint(is_palindrome("racecar"))        # True\nprint(is_palindrome("hello"))          # False` }
  },
  { id:"anagram-check", name:"Anagram Check", hint:"Check if two strings are anagrams using frequency map", time:"O(n)", space:"O(1)", tags:["string","hash"],
    files:{ python:"algorithms/anagram/anagram.py" },
    readme:"# Anagram Check\n\nTwo strings are **anagrams** if they contain the same characters with the same frequencies.",
    code:{ python:`from collections import Counter\n\ndef is_anagram(s, t):\n    if len(s) != len(t):\n        return False\n    return Counter(s) == Counter(t)\n\nprint(is_anagram("listen", "silent"))  # True\nprint(is_anagram("hello", "world"))    # False` }
  },
  { id:"stack", name:"Stack", hint:"LIFO data structure with push/pop operations", time:"O(1)", space:"O(n)", tags:["data-structure"],
    files:{ python:"algorithms/stack/stack.py" },
    readme:"# Stack\n\nA **Last-In First-Out (LIFO)** data structure.",
    code:{ python:`class Stack:\n    def __init__(self):\n        self._data = []\n\n    def push(self, x):\n        self._data.append(x)\n\n    def pop(self):\n        if self.is_empty():\n            raise IndexError("pop from empty stack")\n        return self._data.pop()\n\n    def peek(self):\n        return self._data[-1] if self._data else None\n\n    def is_empty(self):\n        return len(self._data) == 0\n\ns = Stack()\ns.push(1); s.push(2); s.push(3)\nprint(s.pop())   # 3\nprint(s.peek())  # 2` }
  },
];

window.addEventListener('DOMContentLoaded', async () => {
  algorithms = FALLBACK_ALGORITHMS;
  try {
    const res = await fetch('./algorithms.json');
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length) algorithms = data;
    }
  } catch(_) {}

  const params = new URLSearchParams(location.search);
  const algoParam = params.get('algo');
  if (algoParam && algorithms.find(a => a.id === algoParam)) {
    showDetail(algoParam);
  } else {
    showHome();
  }

  setupSearch();
});

document.addEventListener('keydown', e => {
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); openSearch(); }
  if (e.key === 'Escape') closeSearch();
});

function setupSearch() {
  const inp = document.getElementById('search-input');
  inp.addEventListener('input', () => renderSearchResults(inp.value.trim()));
  document.getElementById('filter-lang').addEventListener('change', () => renderSearchResults(document.getElementById('search-input').value.trim()));
  document.getElementById('filter-tag').addEventListener('change',  () => renderSearchResults(document.getElementById('search-input').value.trim()));
  document.getElementById('filter-diff')
  .addEventListener('change', () =>
    renderSearchResults(
      document.getElementById('search-input').value.trim()
    )
  );
}

function openSearch() {
  document.getElementById('search-overlay').classList.add('open');
  setTimeout(() => document.getElementById('search-input').focus(), 50);
  renderSearchResults('');
}

function closeSearch() {
  document.getElementById('search-overlay').classList.remove('open');
  document.getElementById('search-input').value = '';
}

function closeSearchOutside(e) {
  if (e.target === document.getElementById('search-overlay')) closeSearch();
}

function renderSearchResults(query) {
  const box = document.getElementById('search-results');
  const lang = document.getElementById('filter-lang')?.value;
  const tag  = document.getElementById('filter-tag')?.value;
  const diff = document.getElementById('filter-diff')?.value;
  const lowerQuery = query.toLowerCase();

  const filtered = algorithms.filter(a => {
    const matchQuery = !query || a.name.toLowerCase().includes(lowerQuery) || (a.tags||[]).some(t => t.toLowerCase().includes(lowerQuery));
    const matchLang  = !lang || (a.files && Object.keys(a.files).includes(lang)) || (a.code && Object.keys(a.code).includes(lang));
    const matchTag   = !tag  || (a.tags||[]).includes(tag);
    const matchDiff  = !diff  || a.difficulty === diff;
    return matchQuery && matchLang && matchTag && matchDiff;
  });

  if (!filtered.length) {
    box.innerHTML = `<p class="text-center py-8 text-sm" style="color:var(--txt-muted)">No results found</p>`;
    return;
  }

  box.innerHTML = filtered.map(a => `
    <div class="search-result-item" onclick="showDetail('${a.id}'); closeSearch()">
      <div class="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style="background:rgba(0,229,195,0.08);border:1px solid rgba(0,229,195,0.15)">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
      </div>
      <div class="flex-1 min-w-0">
        <p class="text-sm font-medium">${a.name} ${getDifficultyBadge(a.difficulty)} <span class="font-mono text-xs" style="color:var(--txt-muted)"><br> ${getUploadStatus(a)}</span></p>
        <p class="text-xs" style="color:var(--txt-muted)">${a.hint}</p>
      </div>
      <span class="font-mono text-xs">${a.time}</span>
    </div>
  `).join('');
}

function showHome() {
  currentView = 'home';
  showingAll = false;
  document.getElementById('main').innerHTML = renderHome(algorithms.slice(0, PREVIEW_COUNT));
}

function showAll() {
  showingAll = true;
  document.getElementById('main').innerHTML = renderHome(algorithms, true);
}

function renderHome(list, all=false) {
  return `
  <div class="page">
    <section class="relative overflow-hidden" style="padding: 6rem 1rem 4rem">
      <div class="orb orb-1"></div>
      <div class="orb orb-2"></div>
      <div class="max-w-3xl mx-auto text-center relative z-10">
        <span class="section-label mb-4 inline-block">Open Source - Free Forever</span>
        <h1 class="font-display font-800 text-4xl sm:text-5xl md:text-6xl leading-tight mb-5">
          The Algorithm<br/><span style="color:var(--accent)">Reference</span> Every<br/>Developer Needs
        </h1>
        <p class="text-lg mb-8 max-w-xl mx-auto" style="color:var(--txt-muted); line-height:1.7">
          Beautifully documented algorithms with syntax-highlighted code in multiple languages. From sorting to graphs, all in one place.
        </p>
        <div class="flex flex-wrap gap-3 justify-center">
          <button onclick="openSearch()" class="btn-primary flex items-center gap-2">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            Search Algorithms
          </button>
          <a href="/pages/progress/" style="
            display:inline-flex;align-items:center;gap:6px;
            padding:10px 16px;border-radius:10px;
            border:1px solid rgba(0,229,195,0.3);color:#00e5c3;
            background:rgba(0,229,195,0.08);font-size:13px;
            font-family:'DM Mono', monospace;text-decoration:none;transition:0.2s;
          " onmouseover="this.style.boxShadow='0 0 15px rgba(0,229,195,0.3)'" onmouseout="this.style.boxShadow='none'">
            Progress & Notice
          </a>
          <a href="/pages/learn/" style="
            display:inline-flex;align-items:center;gap:6px;
            padding:10px 16px;border-radius:10px;
            border:1px solid rgba(0,229,195,0.3);color:#00e5c3;
            background:rgba(0,229,195,0.08);font-size:13px;
            font-family:'DM Mono', monospace;text-decoration:none;transition:0.2s;
          " onmouseover="this.style.boxShadow='0 0 15px rgba(0,229,195,0.3)'" onmouseout="this.style.boxShadow='none'">
            Become an Expert
          </a>
          <a href="/pages/player/" style="
            display:inline-flex;align-items:center;gap:6px;
            padding:10px 16px;border-radius:10px;
            border:1px solid rgba(0,229,195,0.3);color:#00e5c3;
            background:rgba(0,229,195,0.08);font-size:13px;
            font-family:'DM Mono', monospace;text-decoration:none;transition:0.2s;
          " onmouseover="this.style.boxShadow='0 0 15px rgba(0,229,195,0.3)'" onmouseout="this.style.boxShadow='none'">
            Learning Videos
          </a>
           <a href="/pages/mobile/download/" style="
            display:inline-flex;align-items:center;gap:6px;
            padding:10px 16px;border-radius:10px;
            border:1px solid rgba(0,229,195,0.3);color:#00e5c3;
            background:rgba(0,229,195,0.08);font-size:13px;
            font-family:'DM Mono', monospace;text-decoration:none;transition:0.2s;
          " onmouseover="this.style.boxShadow='0 0 15px rgba(0,229,195,0.3)'" onmouseout="this.style.boxShadow='none'">
            Mobile App
          </a>
           <a href="/pages/blogs/" style="
            display:inline-flex;align-items:center;gap:6px;
            padding:10px 16px;border-radius:10px;
            border:1px solid rgba(0,229,195,0.3);color:#00e5c3;
            background:rgba(0,229,195,0.08);font-size:13px;
            font-family:'DM Mono', monospace;text-decoration:none;transition:0.2s;
          " onmouseover="this.style.boxShadow='0 0 15px rgba(0,229,195,0.3)'" onmouseout="this.style.boxShadow='none'">
            News Feed
          </a>
        </div>
        <div class="flex flex-wrap gap-6 justify-center mt-10">
          <div class="text-center"><p class="text-sm font-semibold">Fast</p><p class="text-xs" style="color:var(--txt-muted)">O(log n) to O(n^2)</p></div>
          <div class="text-center"><p class="text-sm font-semibold">Explained</p><p class="text-xs" style="color:var(--txt-muted)">With README docs</p></div>
          <div class="text-center"><p class="text-sm font-semibold">Multi-lang</p><p class="text-xs" style="color:var(--txt-muted)">Python, C++, Java, C</p></div>
        </div>
      </div>
    </section>

    <section class="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
      <div class="flex items-center justify-between mb-6">
        <div>
          <span class="section-label">Algorithms</span>
          <h2 class="font-display text-2xl font-700 mt-1">${all ? 'All Algorithms' : 'Featured'}</h2>
        </div>
        ${!all ? `<button onclick="showAll()" class="btn-ghost text-sm flex items-center gap-2">View All <span class="badge">${algorithms.length}</span></button>` : `<span class="badge">${algorithms.length} total</span>`}
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        ${list.map((a,i) => `
        <div class="algo-card" style="animation-delay:${i*0.04}s" onclick="showDetail('${a.id}')">
          <div class="flex items-start justify-between mb-3">
            <div class="w-9 h-9 flex items-center justify-center" style="background:rgba(0,229,195,0.08);border:1px solid rgba(0,229,195,0.15);border-radius:10px">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            </div>
            <span class="font-mono text-xs" style="color:var(--txt-muted)">${a.time}</span>
          </div>
          <h3 class="font-display font-600 text-sm mb-1">${a.name}</h3>
          <p class="text-xs leading-relaxed mb-3" style="color:var(--txt-muted)">${a.hint}</p>
          <div class="flex flex-wrap gap-1.5">
            ${(a.tags||[]).slice(0,3).map(t=>`<span class="badge">${t}</span>`).join('')}
            ${Object.keys(a.files||{}).map(l=>`<span style="display:inline-block;padding:2px 8px;border-radius:999px;font-size:0.65rem;font-family:'DM Mono',monospace;background:rgba(108,99,255,0.1);border:1px solid rgba(108,99,255,0.2);color:#a5a0ff;">${l}</span>`).join('')}
            ${getDifficultyBadge(a.difficulty)}
            ${isVideoUploaded(a) ? `<span class="badge"style="color: rgba(226, 232, 240, 0.9);border-color: rgba(148, 163, 184, 0.25);background: rgba(148, 163, 184, 0.08);backdrop-filter: blur(8px);letter-spacing: 0.02em;">▷ Video</span>` : ''}
          </div>
          <span class="font-mono text-xs" style="color:var(--txt-muted)"> ${getUploadStatus(a)}</span>
        </div>`).join('')}
      </div>
      ${!all && algorithms.length > PREVIEW_COUNT ? `
      <div class="text-center mt-10">
        <button onclick="showAll()" class="btn-ghost px-8 py-3 flex items-center gap-2 mx-auto">
          View all ${algorithms.length} algorithms
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>` : ''}
    </section>

    <footer class="border-t mt-16" style="border-color:var(--border)">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div class="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div class="text-center sm:text-left">
            <p class="font-display text-lg font-600">Sakib<span style="color:var(--accent)">.</span></p>
            <p class="text-xs mt-1" style="color:var(--txt-muted)">Thank you for visiting</p>
          </div>
          <div class="flex flex-wrap justify-center gap-3 text-sm">
            <a href="https://www.facebook.com/share/1J32f9gMEL/" target="_blank" class="btn-ghost flex items-center gap-2 px-3 py-2">Facebook</a>
            <a href="http://www.youtube.com/@AlgorithmVault-sht" target="_blank" class="btn-ghost flex items-center gap-2 px-3 py-2">Youtube</a>
            <a href="https://github.com/sakib-12345/AlgorithmVault" target="_blank" class="btn-ghost flex items-center gap-2 px-3 py-2">GitHub</a>
            <a href="mailto:algorithmvault.official@gmail.com" class="btn-primary px-4 py-2 text-sm">Email Me</a>
          </div>
        </div>
        <div class="text-center mt-8 text-xs" style="color:var(--txt-muted)">
          &copy; ${new Date().getFullYear()} Shakib Hossain Tahmid - All rights reserved
        </div>
      </div>
    </footer>
  </div>`;
}

async function showDetail(id) {
  const algo = algorithms.find(a => a.id === id);
  if (!algo) return;
  currentView = 'detail';

  document.getElementById('main').innerHTML = `
    <div class="page max-w-3xl mx-auto px-4 py-16 text-center" style="color:var(--txt-muted)">
      <div class="inline-block w-8 h-8 border-2 rounded-full animate-spin" style="border-color:var(--accent);border-top-color:transparent"></div>
      <p class="mt-4 text-sm">Loading ${algo.name}...</p>
    </div>`;

  let readmeHtml = '';
  if (algo.readme) {
    readmeHtml = window.marked ? marked.parse(algo.readme) : `<p>${algo.readme}</p>`;
  } else {
    try {
      const res = await fetch(`algorithms/${id}/README.md`);
      if (res.ok) {
        const text = await res.text();
        readmeHtml = window.marked ? marked.parse(text) : `<pre>${text}</pre>`;
      }
    } catch(_) {}
  }

  const langs = Object.keys(algo.files || algo.code || {});
  const codeStore = {};
  if (algo.code) {
    Object.assign(codeStore, algo.code);
  } else {
    await Promise.all(langs.map(async lang => {
      try {
        const res = await fetch(algo.files[lang]);
        codeStore[lang] = res.ok ? await res.text() : '😅 Developer is currently in exams. New algorithms will be uploaded after 30 August 2026';
      } catch(_) { codeStore[lang] = '# Could not load file'; }
    }));
  }

  const activeLang = langs[0] || 'python';
  window.__codeStore = codeStore;
  window.__activeLang = activeLang;
  const langMap = { python:'python', cpp:'cpp', java:'java', c:'c', js:'javascript', ts:'typescript' };

  document.getElementById('main').innerHTML = `
  <div class="page">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      <button onclick="showHome()" class="flex items-center gap-2 text-sm mb-8 group" style="color:var(--txt-muted)">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        Back to Vault
      </button>
      <div class="mb-8">
        <span class="section-label mb-2 inline-block">Algorithm</span>
        <h1 class="font-display text-3xl sm:text-4xl font-800">${algo.name} ${getDifficultyBadge(algo.difficulty)}</h1>
        <p class="mt-2 text-base" style="color:var(--txt-muted)">${algo.hint}</p>
      </div>
      <div class="flex items-center gap-2 mt-4 mb-8">
        <button onclick="shareAlgo('${algo.id}', '${algo.name.replace(/'/g, "\\'")}')" class="btn-ghost flex items-center gap-2" style="font-size:0.82rem; padding:8px 14px;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
          </svg>
          Share
        </button>
        <div id="bm-placeholder-${algo.id}"></div>
      </div>
      <div class="grid grid-cols-2 gap-3 mb-8">
        <div class="complexity-box">
          <p class="section-label mb-2">Time Complexity</p>
          <p class="font-mono text-xl font-500" style="color:var(--accent)">${algo.time || 'N/A'}</p>
        </div>
        <div class="complexity-box">
          <p class="section-label mb-2">Space Complexity</p>
          <p class="font-mono text-xl font-500" style="color:#a5a0ff">${algo.space || 'N/A'}</p>
        </div>
      </div>
      ${readmeHtml ? `
      <div class="glass rounded-2xl p-6 mb-8">
        <p class="section-label mb-4">Explanation</p>
        <div class="md-content">${readmeHtml}</div>
      </div>` : ''}
       ${algo.videoId ? `
        <div class="glass rounded-2xl p-4 mb-8">
          <div class="flex items-center justify-between mb-4">
            <p class="section-label">Video Explanation</p>
            
            <a href="https://youtube.com/watch?v=${algo.videoId}"
               target="_blank"
               class="btn-ghost text-xs px-3 py-1">
              Open YouTube
            </a>
          </div>
        
          <div class="relative overflow-hidden rounded-2xl"
               style="
                 padding-top:56.25%;
                 border:1px solid var(--border);
                 background:#000;
               ">
        
            <iframe
  class="absolute top-0 left-0 w-full h-full"
  src="https://www.youtube.com/embed/${algo.videoId}?rel=0"
  title="${algo.name} Tutorial"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerpolicy="strict-origin-when-cross-origin"
  allowfullscreen
  loading="lazy">
</iframe>
        
          </div>
        </div>
        ` : ''}
      <div class="glass rounded-2xl overflow-hidden">
        <div class="flex items-center justify-between px-4 py-3" style="border-bottom:1px solid var(--border)">
          <p class="section-label">Source Code</p>
          <div class="flex items-center gap-2">
            <button onclick="copyCode()" class="btn-ghost text-xs px-3 py-1">Copy</button>
            <div class="flex gap-1" id="lang-tabs">
              ${langs.map(lang => `<button class="lang-tab ${lang===activeLang?'active':''}" onclick="switchLang('${lang}')">${lang}</button>`).join('')}
            </div>
          </div>
        </div>
        <div id="code-container" class="p-4">
          <pre class="language-${langMap[activeLang]||activeLang}"><code class="language-${langMap[activeLang]||activeLang}">${escapeHtml(codeStore[activeLang]||'# No code available')}</code></pre>
        </div>
      </div>
      ${(algo.tags||[]).length ? `
      <div class="mt-6 flex flex-wrap gap-2">
        ${algo.tags.map(t=>`<span class="badge text-sm">${t}</span>`).join('')}
      </div>` : ''}
    </div>
  </div>`;

  Prism.highlightAll();
  updateBookmarkBtn(algo.id);
trackViewed(algo.id);
}

function shareAlgo(id, name) {
  const url = new URL(location.href);
  url.search = '';
  url.hash = '';
  url.searchParams.set('algo', id);
  const shareUrl = url.toString();
  const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
  if (isMobile && navigator.share) {
    navigator.share({ title: `${name} - AlgorithmVault`, text: `Check out ${name} on AlgorithmVault`, url: shareUrl }).catch(() => {});
  } else {
    navigator.clipboard.writeText(shareUrl).then(() => { showToast('Link copied to clipboard'); }).catch(() => {
      const ta = document.createElement('textarea');
      ta.value = shareUrl;
      ta.style.cssText = 'position:fixed;opacity:0;top:0;left:0';
      document.body.appendChild(ta);
      ta.focus(); ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      showToast('Link copied to clipboard');
    });
  }
}

function showToast(text) {
  const toast = document.getElementById('toast');
  toast.textContent = text;
  toast.style.opacity = '1';
  setTimeout(() => { toast.style.opacity = '0'; }, 1800);
}

function copyCode() {
  const code = window.__codeStore?.[window.__activeLang] || '';
  navigator.clipboard.writeText(code).catch(() => {});
  showToast('Copied to clipboard');
}

function switchLang(lang) {
  window.__activeLang = lang;
  const store = window.__codeStore || {};
  const langMap = { python:'python', cpp:'cpp', java:'java', c:'c', js:'javascript' };
  const prismLang = langMap[lang] || lang;
  document.querySelectorAll('.lang-tab').forEach(t => { t.classList.toggle('active', t.textContent.trim() === lang); });
  document.getElementById('code-container').innerHTML = `<pre class="language-${prismLang}"><code class="language-${prismLang}">${escapeHtml(store[lang]||'# No code available')}</code></pre>`;
  Prism.highlightAll();
}

function escapeHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ── Local Bookmark System ──

function getBookmarks() {
  try {
    return JSON.parse(localStorage.getItem('av_bookmarks')) || [];
  } catch {
    return [];
  }
}

function setBookmarks(data) {
  localStorage.setItem('av_bookmarks', JSON.stringify(data));
}

function hasAcceptedLocalStorage() {
  return localStorage.getItem('av_local_confirmed') === 'true';
}

function askLocalStoragePermission(callback) {
  if (hasAcceptedLocalStorage()) {
    callback();
    return;
  }

  const toast = document.createElement('div');
  toast.innerHTML = `
  <div style="
  position:fixed;
  bottom:28px;
  left:50%;
  transform:translateX(-50%) translateY(20px) scale(0.98);
  opacity:0;

  background:var(--surface);
  border:1px solid var(--border);

  padding:22px;
  border-radius:22px;

  display:flex;
  align-items:flex-start;
  gap:18px;

  z-index:99999;

  box-shadow:
    0 25px 80px rgba(0,0,0,0.65),
    0 0 0 1px rgba(255,255,255,0.03) inset;

  max-width:560px;
  width:calc(100% - 32px);

  backdrop-filter:blur(16px);

  animation: popupEnter 0.38s cubic-bezier(.2,.9,.2,1) forwards;
">

  <!-- icon -->
  <div style="
    width:54px;
    height:54px;
    min-width:54px;

    border-radius:18px;

    background:var(--glass);
    border:1px solid var(--border);

    display:flex;
    align-items:center;
    justify-content:center;

    box-shadow: 0 0 0 1px rgba(0,229,195,0.04);
  ">
    <svg width="22" height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--accent)"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round">

      <path d="M12 1l9 4v6c0 5-3.8 9.7-9 11-5.2-1.3-9-6-9-11V5l9-4z"/>
      <path d="M9 12l2 2 4-4"/>
    </svg>
  </div>

  <!-- content -->
  <div style="flex:1">

    <div style="
      display:flex;
      align-items:center;
      gap:8px;
      margin-bottom:10px;
    ">
      <span style="
        font-size:11px;
        font-weight:600;
        letter-spacing:.12em;
        text-transform:uppercase;

        color:var(--accent);

        background:rgba(0,229,195,0.08);
        border:1px solid rgba(0,229,195,0.18);

        padding:4px 10px;
        border-radius:999px;
      ">
        Permission Request
      </span>
    </div>

    <p style="
      font-size:17px;
      font-weight:700;
      margin-bottom:8px;
      color:var(--txt);
      line-height:1.35;
    ">
      Allow local storage access?
    </p>

    <p style="
      font-size:14px;
      color:var(--txt-muted);
      line-height:1.7;
      margin-bottom:18px;
    ">
      AlgorithmVault stores your progress and bookmarks locally in your browser.
      No servers, no tracking — fully offline and private.
    </p>

    <div style="display:flex;gap:10px;flex-wrap:wrap">

      <button id="local-accept-btn" style="
        background:var(--accent);
        color:#080c12;

        border:none;

        padding:12px 18px;
        border-radius:14px;

        font-size:13px;
        font-weight:700;

        cursor:pointer;

        transition:all .2s ease;
        box-shadow: 0 10px 30px rgba(0,229,195,0.15);
      "
      onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 14px 40px rgba(0,229,195,0.22)'"
      onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='0 10px 30px rgba(0,229,195,0.15)'"
      >
        Allow Access
      </button>

      <button onclick="this.closest('div').parentNode.parentNode.remove()" style="
        background:transparent;
        color:var(--txt-muted);

        border:1px solid var(--border);

        padding:12px 18px;
        border-radius:14px;

        font-size:13px;
        font-weight:600;

        cursor:pointer;

        transition:all .2s ease;
      "
      onmouseover="this.style.color='var(--txt)';this.style.borderColor='rgba(255,255,255,0.2)'"
      onmouseout="this.style.color='var(--txt-muted)';this.style.borderColor='var(--border)'"
      >
        Deny
      </button>

    </div>
  </div>
</div>

<style>
@keyframes popupEnter {
  0% {
    opacity:0;
    transform:translateX(-50%) translateY(25px) scale(0.96);
  }
  100% {
    opacity:1;
    transform:translateX(-50%) translateY(0) scale(1);
  }
}
</style>
  `;

  document.body.appendChild(toast);

  document.getElementById('local-accept-btn').onclick = () => {
    localStorage.setItem('av_local_confirmed', 'true');
    toast.remove();
    callback();
    showToast('Local bookmarks enabled');
  };

  setTimeout(() => {
    if (toast.parentNode) toast.remove();
  }, 10000);
}

async function toggleBookmark(algoId) {
  askLocalStoragePermission(() => {
    const bookmarks = getBookmarks();

    const idx = bookmarks.indexOf(algoId);

    if (idx > -1) {
      bookmarks.splice(idx, 1);
      showToast('Removed bookmark');
    } else {
      bookmarks.push(algoId);
      showToast('Bookmarked');
    }

    setBookmarks(bookmarks);
    updateBookmarkBtn(algoId);
  });
}

async function isBookmarked(algoId) {
  return getBookmarks().includes(algoId);
}


function handleBookmarksNav() {
  showBookmarks();
}
async function showBookmarks() {
  currentView = 'bookmarks';

  const bmIds = getBookmarks();

  const bmAlgos = bmIds
    .map(id => algorithms.find(a => a.id === id))
    .filter(Boolean);

  document.getElementById('main').innerHTML = `
  <div class="page">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 py-10">

      <div class="flex items-center justify-between mb-8">
        <div>
          <button onclick="showHome()" class="flex items-center gap-2 text-sm mb-3 group" style="color:var(--txt-muted)">
            ← Back
          </button>

          <span class="section-label mb-2 inline-block">
            Saved Locally
          </span>

          <h1 class="font-display text-3xl font-800">
            Bookmarks
          </h1>
        </div>

        ${
          bmAlgos.length
            ? `<span class="badge">${bmAlgos.length} saved</span>`
            : ''
        }
      </div>

      ${
        bmAlgos.length === 0
          ? `
          <div style="
            text-align:center;
            padding:5rem 2rem;
            background:var(--glass);
            border:1px solid var(--border);
            border-radius:20px;
          ">
            <h3 class="font-display text-xl font-600 mb-2">
              No bookmarks yet
            </h3>

            <p style="color:var(--txt-muted);font-size:0.9rem;">
              Saved bookmarks will appear here.
            </p>
          </div>
          `
          : `
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

            ${bmAlgos.map((a, i) => `
              <div 
                class="algo-card group relative overflow-hidden"
                onclick="showDetail('${a.id}')"
                style="
                  animation-delay:${i * 0.03}s;
                  cursor:pointer;
                "
              >

                <!-- remove button -->
                <button
                  onclick="event.stopPropagation(); removeBookmarkFromPage('${a.id}')"
                  style="
                    position:absolute;
                    top:10px;
                    right:10px;
                    width:28px;
                    height:28px;
                    border-radius:999px;
                    border:1px solid rgba(255,255,255,0.08);
                    background:rgba(255,255,255,0.03);
                    color:var(--txt-muted);
                    cursor:pointer;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    transition:0.2s;
                    z-index:10;
                  "
                  onmouseover="
                    this.style.background='rgba(255,0,0,0.08)';
                    this.style.color='#ff6b6b';
                  "
                  onmouseout="
                    this.style.background='rgba(255,255,255,0.03)';
                    this.style.color='var(--txt-muted)';
                  "
                >
                  ✕
                </button>

                <div class="flex items-start justify-between mb-3">

                  <div class="w-9 h-9 flex items-center justify-center"
                    style="
                      background:rgba(0,229,195,0.08);
                      border:1px solid rgba(0,229,195,0.15);
                      border-radius:10px;
                    ">

                    <svg width="14" height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--accent)"
                      stroke-width="2.5">

                      <polyline points="16 18 22 12 16 6"/>
                      <polyline points="8 6 2 12 8 18"/>
                    </svg>
                  </div>

                  

                </div>

                <h3 class="font-display font-600 text-sm mb-1">
                  ${a.name}
                </h3>

                <p class="text-xs leading-relaxed mb-3"
                  style="color:var(--txt-muted)">
                  ${a.hint}
                </p>

                <div class="flex flex-wrap gap-1.5">
                  ${(a.tags || []).slice(0,3).map(t => `
                    <span class="badge">${t}</span>
                  `).join('')}
                </div>

              </div>
            `).join('')}

          </div>
          `
      }

    </div>
  </div>`;
}
async function updateBookmarkBtn(algoId) {
  const wrap = document.getElementById(`bm-placeholder-${algoId}`);
  if (!wrap) return;

  const saved = await isBookmarked(algoId);

  wrap.innerHTML = `
    <button
      onclick="toggleBookmark('${algoId}')"
      class="btn-ghost flex items-center gap-2"
      style="
        font-size:0.82rem;
        padding:8px 14px;
        border-color:${saved ? 'rgba(0,229,195,0.35)' : 'var(--border)'};
        background:${saved ? 'rgba(0,229,195,0.08)' : 'transparent'};
        color:${saved ? '#00e5c3' : 'inherit'};
      "
    >
      <svg width="14" height="14" viewBox="0 0 24 24"
        fill="${saved ? '#00e5c3' : 'none'}"
        stroke="currentColor"
        stroke-width="2">
        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
      </svg>

      ${saved ? 'Saved' : 'Bookmark'}
    </button>
  `;
}
async function removeBookmarkFromPage(algoId) {
  await toggleBookmark(algoId);
  showBookmarks();
}

async function showHistory() {
  currentView = 'history';

  let viewedIds = [];

  try {
    viewedIds = JSON.parse(localStorage.getItem('av_viewed')) || [];
  } catch {}

  const viewedAlgos = viewedIds
    .map(id => algorithms.find(a => a.id === id))
    .filter(Boolean);

  document.getElementById('main').innerHTML = `
  <div class="page">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 py-10">

      <div class="flex items-center justify-between mb-8">
        <div>
          <button onclick="showHome()" class="flex items-center gap-2 text-sm mb-3 group" style="color:var(--txt-muted)">
            ← Back
          </button>

          <span class="section-label mb-2 inline-block">Recently Viewed</span>
          <h1 class="font-display text-3xl font-800">History</h1>
        </div>

        ${
          viewedAlgos.length
            ? `<span class="badge">${viewedAlgos.length} viewed</span>`
            : ''
        }
      </div>

      ${
        viewedAlgos.length === 0
          ? `
          <div style="
            text-align:center;
            padding:5rem 2rem;
            background:var(--glass);
            border:1px solid var(--border);
            border-radius:20px;
          ">
            <h3 class="font-display text-xl font-600 mb-2">
              No history yet
            </h3>

            <p style="color:var(--txt-muted);font-size:0.9rem;">
              Viewed algorithms will appear here.
            </p>
          </div>
          `
          : `
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

            ${viewedAlgos.map((a, i) => `
              <div class="algo-card group relative overflow-hidden"
                   style="animation-delay:${i * 0.03}s">

                <!-- remove button -->
                <button
                  onclick="event.stopPropagation(); removeHistoryItem('${a.id}')"
                  style="
                    position:absolute;
                    top:10px;
                    right:10px;
                    width:28px;
                    height:28px;
                    border-radius:999px;
                    border:1px solid rgba(255,255,255,0.08);
                    background:rgba(255,255,255,0.03);
                    color:var(--txt-muted);
                    cursor:pointer;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    transition:0.2s;
                    z-index:10;
                  "
                  onmouseover="
                    this.style.background='rgba(255,0,0,0.08)';
                    this.style.color='#ff6b6b';
                  "
                  onmouseout="
                    this.style.background='rgba(255,255,255,0.03)';
                    this.style.color='var(--txt-muted)';
                  "
                >
                  ✕
                </button>

                <!-- clickable area -->
                <div 
                  onclick="showDetail('${a.id}')"
                  style="cursor:pointer; position:relative; z-index:1;"
                >

                  <div class="flex items-start justify-between mb-3">

                    <div class="w-9 h-9 flex items-center justify-center"
                      style="
                        background:rgba(0,229,195,0.08);
                        border:1px solid rgba(0,229,195,0.15);
                        border-radius:10px;
                      ">

                      <svg width="14" height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="var(--accent)"
                        stroke-width="2.5">

                        <polyline points="16 18 22 12 16 6"/>
                        <polyline points="8 6 2 12 8 18"/>
                      </svg>
                    </div>

                    
                  </div>

                  <h3 class="font-display font-600 text-sm mb-1">
                    ${a.name}
                  </h3>

                  <p class="text-xs leading-relaxed mb-3"
                    style="color:var(--txt-muted)">
                    ${a.hint}
                  </p>

                  <div class="flex flex-wrap gap-1.5">
                    ${(a.tags || []).slice(0,3).map(t => `
                      <span class="badge">${t}</span>
                    `).join('')}
                  </div>

                </div>
              </div>
            `).join('')}

          </div>

          <div class="text-center mt-10">
            <button onclick="clearHistory()" class="btn-ghost">
              Clear History
            </button>
          </div>
          `
      }

    </div>
  </div>`;
}
function removeHistoryItem(algoId) {
  let viewed = [];

  try {
    viewed = JSON.parse(localStorage.getItem('av_viewed')) || [];
  } catch {}

  viewed = viewed.filter(id => id !== algoId);

  localStorage.setItem('av_viewed', JSON.stringify(viewed));

  showToast('Removed from history');
  showHistory();
}
function clearHistory() {
  localStorage.removeItem('av_viewed');
  showToast('History cleared');
  showHistory();
}
async function trackViewed(algoId) {
  let viewed = [];

  try {
    viewed = JSON.parse(localStorage.getItem('av_viewed')) || [];
  } catch {}

  // remove old occurrence
  viewed = viewed.filter(id => id !== algoId);

  // add newest at top
  viewed.unshift(algoId);

  // optional limit
  viewed = viewed.slice(0, 50);

  localStorage.setItem('av_viewed', JSON.stringify(viewed));
}


function getDifficultyBadge(diff) {
  const d = (diff || "").toLowerCase();

  if (d === "easy") {
    return `<span class="badge" style="color:#00e676;border-color:rgba(0,230,118,0.3);background:rgba(0,230,118,0.08)">Easy</span>`;
  }

  if (d === "medium") {
    return `<span class="badge" style="color:#ff9800;border-color:rgba(255,152,0,0.3);background:rgba(255,152,0,0.08)">Medium</span>`;
  }

  if (d === "hard") {
    return `<span class="badge" style="color:#ff5252;border-color:rgba(255,82,82,0.3);background:rgba(255,82,82,0.08)">Hard</span>`;
  }

  return `<span class="badge">N/A</span>`;
}

function getUploadStatus(algo) {
  const hasVideo = algo.videoId && algo.videoId.trim() !== "";

  const files = algo.files || {};
  const hasAllFiles = files.python && (files.cpp || files.java);

  if (hasVideo && hasAllFiles) {
    return `🟢 UPLOADED`;
  }

  if (!hasVideo && hasAllFiles) {
    return `🟠 IN PROGRESS`;
  }

  return `⚫ NOT UPLOADED`;
}

function isVideoUploaded(algo) {
  return algo.videoId && algo.videoId.trim() !== "";
}
