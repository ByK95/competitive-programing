// https://www.hackerrank.com/challenges/c-tutorial-strings/problem
#include <bits/stdc++.h>

using namespace std;

#define REP(i,a,b) for (int i = a; i <= b; i++)
#define RP(i,a,b) for (int i = a; i < b; i++)
#define REN(i,b) for (int i = b - 1; i >= 0; i--)
#define PV(x) cout << #x"=" << x << '\n'

int main() {
    cin.tie(0);
    cout.tie(0);
    string a,b;
    cin >> a;
    cin >> b;
    cout << a.size() << ' ' << b.size() << '\n';
    cout << a + b << '\n';
    char temp = a[0];
    a[0] = b[0];
    b[0] = temp;
    cout << a + " " + b << '\n';
}
