// https://www.hackerrank.com/challenges/prettyprint/problem
#include <iostream>
#include <iomanip>
using namespace std;

int hex(float n){
    int temp = n;
    return temp;
}

void  print_scientific(float num){
    int exp = 0;
    while (num < 1.0 || num > 10.0){
        if(num > 10.0){
            num /= 10;
            exp++;
            continue;
        }
        num *= 10;
        exp--;
    }
    printf("%.9fE%+03d \n", num, exp);
}

int main() {
    // cin.tie(0);
    // cout.tie(0);
    int T; cin >> T;
	cout << setiosflags(ios::uppercase);
	cout << setw(0xf) << internal;
	while(T--) {
		double A; cin >> A;
		double B; cin >> B;
		double C; cin >> C;
        cout << nouppercase;
        cout <<  setw(0) << "0x" << hex << long (A) << '\n';
        cout << right;
        cout << setfill('_') << setw(15) << fixed << setprecision(2) << showpos << B << '\n';
        int exp = 0;
        while (C < 1.0 || C > 10.0){
            if(C > 10.0){
                C /= 10;
                exp++;
                continue;
            }
            C *= 10;
            exp--;
        }
        printf("%.9fE%+03d \n", C, exp);
    }
}
