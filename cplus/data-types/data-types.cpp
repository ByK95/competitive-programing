// https://www.hackerrank.com/challenges/c-tutorial-basic-data-types/problem
#include <bits/stdc++.h>

using namespace std;

#define REP(i,a,b) for (int i = a; i <= b; i++)
#define RP(i,a,b) for (int i = a; i < b; i++)

int main() {
    // cin.tie(0);
    // cout.tie(0);
    int a;
    long b;
    char c;
    float d;
    double e;
    scanf("%d %ld %c %f %lf",&a,&b,&c,&d,&e);
    printf("%d \n",a);
    printf("%ld \n",b);
    printf("%c \n",c);
    printf("%f \n",d);
    printf("%lf \n",e);
}
