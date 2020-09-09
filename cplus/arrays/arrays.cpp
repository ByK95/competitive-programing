// https://www.hackerrank.com/challenges/arrays-introduction/problem
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
    cin >> n;
    int nums[n];
    RP(i,0,n){
        cin >> nums[i];
        // PV(nums[i]);
    }
    REN(i,n){
        cout << nums[i] << " ";
    }
}
