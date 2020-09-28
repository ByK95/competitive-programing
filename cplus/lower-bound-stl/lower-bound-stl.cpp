// https://www.hackerrank.com/challenges/cpp-lower-bound/problem
#include <bits/stdc++.h>

using namespace std;

#define REP(i,a,b) for (int i = a; i <= b; i++)
#define RP(i,a,b) for (int i = a; i < b; i++)
#define REN(i,b) for (int i = b - 1; i >= 0; i--)
#define PV(x) cout << #x"=" << x << '\n'

bool mypredicate (int i, int j) {
  return (i>=j);
}

int main() {
    cin.tie(0);
    cout.tie(0);
    int n;
    vector<int> list;
    cin >> n;

    int num;
    RP(i,0,n){
        cin >> num;
        list.push_back(num);
    }

    cin >> n;
    vector<int>::iterator it;
    vector<int> queries;
    RP(j,0,n){
        cin >> num;
        it = lower_bound(list.begin(), list.end(),num);
        if(list[(it-list.begin())] == num){
            cout << "Yes " << (it-list.begin())+1 << '\n'; 
            continue;
        }
        cout << "No " << (it-list.begin())+1 << '\n'; 
    }

    
}
