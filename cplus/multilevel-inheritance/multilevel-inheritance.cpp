// 
#include <bits/stdc++.h>

using namespace std;

#define REP(i,a,b) for (int i = a; i <= b; i++)
#define RP(i,a,b) for (int i = a; i < b; i++)
#define REN(i,b) for (int i = b - 1; i >= 0; i--)
#define PV(x) cout << #x"=" << x << '\n'

class Triangle{
	public:
		void triangle(){
			cout<<"I am a triangle\n";
		}
};

class Isosceles : public Triangle{
  	public:
  		void isosceles(){
    		cout<<"I am an isosceles triangle\n";
  		}
};

class Equilateral : public Isosceles{
    public:
        void equilateral(){
            cout << "I am an equilateral triangle\n";
        }
};

int main() {
    Equilateral eqr;
    eqr.equilateral();
    eqr.isosceles();
    eqr.triangle();
    return 0;
}
