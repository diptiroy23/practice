
// by default pq is max heap

// priority_queue min heap
priority_queue<int, vector<int>, cmp> pq;
struct cmp {
    bool operator()(int &a, int &b) {
        return a>b; // greater::min heap
    }
}

// priority_queue max heap
priority_queue<int> pq;

pq.push(10);
pq.top();
pq.pop();