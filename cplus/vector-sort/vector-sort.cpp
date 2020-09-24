// https://www.hackerrank.com/challenges/vector-sort/problem
#include <bits/stdc++.h>

using namespace std;

#define REP(i,a,b) for (int i = a; i <= b; i++)
#define RP(i,a,b) for (int i = a; i < b; i++)
#define REN(i,b) for (int i = b - 1; i >= 0; i--)
#define PV(x) cout << #x"=" << x << '\n'

int main() {
    cin.tie(0);
    cout.tie(0);
    int n,t;
    vector<int> v;
    cin >> n;
    RP(i,0,n){
        cin >> t;
        v.push_back(t);
    }
    sort(v.begin(), v.end());

    for (int j = 0; j < v.size(); j++) {
        cout << v[j] << " ";
    }
    cout << '\n';
    
}
