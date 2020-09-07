// https://www.hackerrank.com/challenges/c-tutorial-conditional-if-else/problem
#include <bits/stdc++.h>

using namespace std;

#define REP(i,a,b) for (int i = a; i <= b; i++)
#define RP(i,a,b) for (int i = a; i < b; i++)

int main() {
    cin.tie(0);
    cout.tie(0);
    unsigned int n;
    cin >> n;
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

    if( n < 10 ){
        cout << numberLookup.find(n)->second;
        return 0;
    }
    cout << "Greater than 9";
}
