// https://www.hackerrank.com/challenges/c-tutorial-stringstream/problem?h_r=next-challenge&h_v=zen
#include <bits/stdc++.h>

using namespace std;

#define REP(i,a,b) for (int i = a; i <= b; i++)
#define RP(i,a,b) for (int i = a; i < b; i++)
#define REN(i,b) for (int i = b - 1; i >= 0; i--)
#define PV(x) cout << #x"=" << x << '\n'

vector<int> parseInts(string str) {
	// Complete this function
    stringstream ss(str);
    vector<int> arr;
    int a;
    char delim;
    while ( !ss.eof() ){
        ss >> a >> delim;
        arr.push_back(a);
    }
    return arr;
}

int main() {
    cin.tie(0);
    cout.tie(0);
    string text;
    cin >> text;

    vector<int> integers = parseInts(text);
    for(int i = 0; i < integers.size(); i++) {
        cout << integers[i] << "\n";
    }
    
    return 0;
}
