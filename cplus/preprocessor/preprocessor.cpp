// https://www.hackerrank.com/challenges/preprocessor-solution/problems
#include <bits/stdc++.h>

using namespace std;

#define REP(i,a,b) for (int i = a; i <= b; i++)
#define RP(i,a,b) for (int i = a; i < b; i++)
#define REN(i,b) for (int i = b - 1; i >= 0; i--)
#define PV(x) cout << #x"=" << x << '\n'

#define toStr(x) #x
#define io(x) cin >> v
#define INF 10000000
#define FUNCTION(name, sign) void name(int &var,int value){\
	if(value sign var){\
		var = value;\
	}\
};
#define foreach(v,i) for (int i = 0; i < v.size(); i++)

#if !defined toStr || !defined io || !defined FUNCTION || !defined INF
#error Missing preprocessor definitions
#endif 

FUNCTION(minimum, <)
FUNCTION(maximum, >)

int main(){
	int n; cin >> n;
	vector<int> v(n);
	for (int i = 0; i < n; i++){
		io(v)[i];
	}
	int mn = INF;
	int mx = -INF;
	for (int i = 0; i < n; i++){
		minimum(mn, v[i]);
		maximum(mx, v[i]);
	}
	int ans = mx - mn;
	cout << toStr(Result =) <<' '<< ans;
	return 0;

}
