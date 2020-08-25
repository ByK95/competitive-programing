#include <bits/stdc++.h>

using namespace std;

#define REP(i,a,b) for (int i = a; i <= b; i++)
#define RP(i,a,b) for (int i = a; i < b; i++)

int size_count(char * ptr);
string localize(string text);

int main() {
    int n;
    scanf("%d",&n);
    string s;
	getline(cin, s);
    RP(i,0,n){
		getline(cin, s);
		if(s.size() > 10){
			cout << localize(s) <<"\n";
			continue;
		}
		cout << s << "\n";
	}
}

string localize(string text){
	int s = text.size();
	return string(1,text[0]) + to_string(s-2) + string(1,text[s-1]) ;
}

int size_count(char * ptr){
	int size = 0;
	while(*ptr != '\0'){
		ptr++;
		size++;
	};
	return size;
}
