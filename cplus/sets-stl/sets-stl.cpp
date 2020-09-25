// https://www.hackerrank.com/challenges/cpp-sets/problem
#include <bits/stdc++.h>

using namespace std;

#define REP(i,a,b) for (int i = a; i <= b; i++)
#define RP(i,a,b) for (int i = a; i < b; i++)
#define REN(i,b) for (int i = b - 1; i >= 0; i--)
#define PV(x) cout << #x"=" << x << '\n'

int main() {
    cin.tie(0);
    cout.tie(0);
    int c, o, n;
    set<int> list;
    cin >> c;
    RP(i,0,c){
        cin >> o >> n;
        if(o == 1){
            list.insert(n);
            continue;
        }
        if(o == 2){
            list.erase(n);
            continue;
        }
        set<int>::iterator itr=list.find(n);
        if(itr != list.end()){
            cout << "Yes" << "\n";
            continue;
        }
        cout << "No" << '\n';
    }
}
