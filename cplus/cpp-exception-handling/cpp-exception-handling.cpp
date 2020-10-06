// https://www.hackerrank.com/challenges/cpp-exception-handling/problem
#include <bits/stdc++.h>

using namespace std;

#define REP(i,a,b) for (int i = a; i <= b; i++)
#define RP(i,a,b) for (int i = a; i < b; i++)
#define REN(i,b) for (int i = b - 1; i >= 0; i--)
#define PV(x) cout << #x"=" << x << '\n'

int largest_proper_divisor(int n) {
    if (n == 0) {
        throw invalid_argument("largest proper divisor is not defined for n=0");
    }
    if (n == 1) {
        throw invalid_argument("largest proper divisor is not defined for n=1");
    }
    for (int i = n/2; i >= 1; --i) {
        if (n % i == 0) {
            return i;
        }
    }
    return -1; // will never happen
}

void process_input(int n) {
    try
    {
        int d = largest_proper_divisor(n);
        cout << "result=" << d << endl;
    }
    catch(const std::invalid_argument& e)
    {
        cout << e.what() << '\n';
    }
    cout << "returning control flow to caller\n"; 
}


int main() {
    int n;
    cin >> n;
    process_input(n);
    return 0;
}