// https://www.hackerrank.com/challenges/box-it/problem?h_r=next-challenge&h_v=zen
#include <bits/stdc++.h>

using namespace std;

#define REP(i,a,b) for (int i = a; i <= b; i++)
#define RP(i,a,b) for (int i = a; i < b; i++)
#define REN(i,b) for (int i = b - 1; i >= 0; i--)
#define PV(x) cout << #x"=" << x << '\n'

class Box{
    private:
        int lenght, breadth, height;
    public:
        Box(){
            lenght = 0;
            breadth = 0;
            height = 0;
        }
        Box(int l, int b, int h){
            lenght = l;
            breadth = b;
            height = h;
        }
        Box(const Box &x){
            lenght = x.lenght;
            breadth = x.breadth;
            height = x.height;
        }
        int getLenght() {
            return lenght;
        }
        int getBreadth() {
            return breadth;
        }
        int getHeight() {
            return height;
        }
        long long CalculateVolume(){
            long long temp = lenght;
            temp *= breadth;
            temp *= height;
            return temp;
        }
        bool operator<(Box& b){
            if(lenght != b.lenght){
                return lenght < b.lenght;
            }
            if(breadth != b.breadth){
                return breadth < b.breadth;
            }
            return height < b.height;
        }
        friend ostream &operator<<( ostream &output, Box& B ) { 
            output << B.lenght << ' ' << B.breadth << ' ' << B.height;
            return output;            
        }
};

void check2()
{
	int n;
	cin>>n;
	Box temp;
	for(int i=0;i<n;i++)
	{
		int type;
		cin>>type;
		if(type ==1)
		{
			cout<<temp<<endl;
		}
		if(type == 2)
		{
			int l,b,h;
			cin>>l>>b>>h;
			Box NewBox(l,b,h);
			temp=NewBox;
			cout<<temp<<endl;
		}
		if(type==3)
		{
			int l,b,h;
			cin>>l>>b>>h;
			Box NewBox(l,b,h);
			if(NewBox<temp)
			{
				cout<<"Lesser\n";
			}
			else
			{
				cout<<"Greater\n";
			}
		}
		if(type==4)
		{
			cout<<temp.CalculateVolume()<<endl;
		}
		if(type==5)
		{
			Box NewBox(temp);
			cout<<NewBox<<endl;
		}

	}
}

int main()
{
	check2();
}
