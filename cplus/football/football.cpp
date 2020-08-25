#include <bits/stdc++.h>

using namespace std;

#define REP(i,a,b) for (int i = a; i <= b; i++)
#define RP(i,a,b) for (int i = a; i < b; i++)

string obs(string c){
	char last = c[0];
	int count = 1;
	int size = c.size();
	REP(i,1,size){
		if(count == 7) return "YES";
		if(c[i] == last){
			count++;
		}else{
			last = c[i];
			count = 1;
		}
	}
	return "NO";
}

int main() {
	string c;
	getline(cin,c);
	cout << obs(c) << "\n";
}

