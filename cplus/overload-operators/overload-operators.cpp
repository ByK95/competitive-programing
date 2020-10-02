// 
#include <bits/stdc++.h>

using namespace std;

#define REP(i,a,b) for (int i = a; i <= b; i++)
#define RP(i,a,b) for (int i = a; i < b; i++)
#define REN(i,b) for (int i = b - 1; i >= 0; i--)
#define PV(x) cout << #x"=" << x << '\n'

class Complex
{
public:
    int a,b;
    void input(string s)
    {
        int v1=0;
        int i=0;
        while(s[i]!='+')
        {
            v1=v1*10+s[i]-'0';
            i++;
        }
        while(s[i]==' ' || s[i]=='+'||s[i]=='i')
        {
            i++;
        }
        int v2=0;
        while(i<s.length())
        {
            v2=v2*10+s[i]-'0';
            i++;
        }
        a=v1;
        b=v2;
    }
    // Complex operator+(const Complex i){
    //     Complex num;
    //     num.a = this->a + i.a;
    //     num.b = this->b + i.b;
    //     return num;
    // }
    // friend ostream &operator<<(ostream& output, Complex& num){
    //     output << num.a << "+i" << num.b;
    //     return output;
    // }
};

Complex operator+(const Complex j,const Complex i){
        Complex num;
        num.a = j.a + i.a;
        num.b = j.b + i.b;
        return num;
    }
ostream &operator<<(ostream& output, Complex& num){
    output << num.a << "+i" << num.b;
    return output;
}

int main() {
    Complex x,y;
    string s1,s2;
    cin>>s1;
    cin>>s2;
    x.input(s1);
    y.input(s2);
    Complex z=x+y;
    cout<<z<<endl;
}
