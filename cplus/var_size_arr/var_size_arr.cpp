// https://www.hackerrank.com/challenges/variable-sized-arrays/problem?h_r=next-challenge&h_v=zen
#include <bits/stdc++.h>

using namespace std;

#define REP(i,a,b) for (int i = a; i <= b; i++)
#define RP(i,a,b) for (int i = a; i < b; i++)
#define REN(i,b) for (int i = b - 1; i >= 0; i--)
#define PV(x) cout << #x"=" << x << '\n'

int main() {
    cin.tie(0);
    cout.tie(0);
    int n , q , size;
    cin >> n >> q;
    vector<vector<int>> lookup;
    RP(i,0,n){
        cin >> size;
        vector<int> arr(size);
        int a;
        RP(i,0,size){
            cin >> a;
            arr[i] = a;
        }
        lookup.push_back(arr);
    }

    int x,y;
    RP(j,0,q){
        cin >> x >> y;
        cout << lookup[x][y] << "\n";
    }
}
