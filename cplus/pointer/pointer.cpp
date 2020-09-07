// 
#include <bits/stdc++.h>

using namespace std;

#define REP(i,a,b) for (int i = a; i <= b; i++)
#define RP(i,a,b) for (int i = a; i < b; i++)

void update(int *a,int *b) {
    int sum = *a + *b;
    int dif = *a - *b;
    *a = sum;
    *b = abs(dif);
}

int main() {
    cin.tie(0);
    cout.tie(0);
    int a, b;
    int *pa = &a, *pb = &b;
    
    scanf("%d %d", &a, &b);
    update(pa, pb);
    printf("%d\n%d", a, b);
}
