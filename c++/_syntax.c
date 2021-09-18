#include <bits/stdc++. h>

#define ll long long int

int mod = 1e9 + 7; // 10^9 + 7

// pair, tuple
auto [a, b, c] = q.front();

// descending sort
sort(arr.begin(), arr.end(), greater<int> ());

// Copy map directly into vector
vector< pair<int, int> > freq(map.begin(), map.end());

// cmp ascending sort
static bool compare(int &a, int &b) {
    return a<b;
}

// iterate
for(auto x:map) {
    re.push_back(x.second);
}
x