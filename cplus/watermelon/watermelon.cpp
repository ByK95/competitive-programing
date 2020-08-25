//https://codeforces.com/problemset/problem/4/A
#include <bits/stdc++.h>

using namespace std;

#define REP(i,a,b) for (int i = a; i <= b; i++)

int main() {
    int w;
    scanf("%d",&w);
    if(w < 3){
		printf("NO\n");
		return 0;
	}
    if(w % 2 == 0){
		printf("YES\n");
		return 0;
	}
	printf("NO\n");
	return 0;
}
