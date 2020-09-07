// 
#include <bits/stdc++.h>

using namespace std;

#define REP(i,a,b) for (int i = a; i <= b; i++)
#define RP(i,a,b) for (int i = a; i < b; i++)

int main() {
    cin.tie(0);
    cout.tie(0);
    unsigned int a,b;
    cin >> a >> b;
    map<int, string> numberLookup;

    numberLookup.insert(pair<int, string>(1,"one"));
    numberLookup.insert(pair<int, string>(2,"two"));
    numberLookup.insert(pair<int, string>(3,"three"));
    numberLookup.insert(pair<int, string>(4,"four"));
    numberLookup.insert(pair<int, string>(5,"five"));
    numberLookup.insert(pair<int, string>(6,"six"));
    numberLookup.insert(pair<int, string>(7,"seven"));
    numberLookup.insert(pair<int, string>(8,"eight"));
    numberLookup.insert(pair<int, string>(9,"nine"));

    for (int i = a; i <= b; i++){
        if( i < 10 ){
            cout << numberLookup.find(i)->second << '\n';
        } else {
            string result = (i % 2 == 0) ? "even" : "odd";
            cout << result << '\n';
        }
    }
    
}
