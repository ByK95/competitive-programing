// https://www.hackerrank.com/challenges/cpp-maps/problem
#include <bits/stdc++.h>

using namespace std;

#define REP(i,a,b) for (int i = a; i <= b; i++)
#define RP(i,a,b) for (int i = a; i < b; i++)
#define REN(i,b) for (int i = b - 1; i >= 0; i--)
#define PV(x) cout << #x"=" << x << '\n'

int main() {
    cin.tie(0);
    cout.tie(0);
    int n;

    string temp;
    int v,o;
    map<string, int> dict;
    cin >> n;
    RP(i,0,n){
        cin >> o;
        if(o == 1){
            cin >> temp >> v;
            map<string,int>::iterator itr = dict.find(temp);
            if(itr != dict.end()){
                itr->second += v;
                continue;
            }
            dict.insert(make_pair(temp,v));
            continue;
        }
        if(o == 2){
            cin >> temp;
            dict.erase(temp);
            continue;
        }
        cin >> temp;
        map<string,int>::iterator itr = dict.find(temp);
        if(itr != dict.end()){
            cout << itr->second << "\n";
            continue;
        }
        cout << 0 << "\n";
    }
}
