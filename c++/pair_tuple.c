// pair
queue<pair<int, int> > q;
// pair<int, int> = {1, 2};

// q.push(make_pair(1, 2));
q.push({1, 2});

auto [a, b] = q.front();

// tuple
queue<tuple<int, int, int> > q;
q.push({1, 2, 3})

auto [a, b, c] = q.front();


