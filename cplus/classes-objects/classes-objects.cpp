// https://www.hackerrank.com/challenges/classes-objects/problem
#include <bits/stdc++.h>

using namespace std;

#define REP(i,a,b) for (int i = a; i <= b; i++)
#define RP(i,a,b) for (int i = a; i < b; i++)
#define REN(i,b) for (int i = b - 1; i >= 0; i--)
#define PV(x) cout << #x"=" << x << '\n'

class Student {
    private:
        int scores[5];
    public:
        void input(){
            for(int i = 0; i < 5; i++){
                cin >> scores[i];
            }
        }
        int calculateTotalScore(){
            int sum = 0;
            for(int i = 0; i < 5; i++){
                sum += scores[i];
            }
            return sum;
        }
};

int main() {
    cin.tie(0);
    cout.tie(0);
    int n; // number of students
    cin >> n;
    Student *s = new Student[n]; // an array of n students
    
    for(int i = 0; i < n; i++){
        s[i].input();
    }

    // calculate kristen's score
    int kristen_score = s[0].calculateTotalScore();

    // determine how many students scored higher than kristen
    int count = 0; 
    for(int i = 1; i < n; i++){
        int total = s[i].calculateTotalScore();
        if(total > kristen_score){
            count++;
        }
    }

    // print result
    cout << count;
    
    return 0;
}
