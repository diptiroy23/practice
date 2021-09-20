// vector
vector<int> arr;
arr.push_back(10);
arr.pop_back();

vector<int> arr(10); // 10 size
arr[2]=10;

vector<vector<int> > arr(10); // array of array
arr[2].push_back(10);

vector<vector<int> > arr(n, vector<int> (m, 0));
arr.resize(n, vector<int> (m));

arr.size();
arr.empty();

// adj list
vector<vector<int>> ar(n); // n rows