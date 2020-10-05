// https://www.hackerrank.com/challenges/virtual-functions/problem
#include <bits/stdc++.h>

using namespace std;

#define REP(i,a,b) for (int i = a; i <= b; i++)
#define RP(i,a,b) for (int i = a; i < b; i++)
#define REN(i,b) for (int i = b - 1; i >= 0; i--)
#define PV(x) cout << #x"=" << x << '\n'

class Person{
    public:
        string name;
        int age;
        virtual void getdata(){
            return;
        }
        virtual void putdata(){
            return;
        }
};

class Professor : public Person{
    int publications, cur_id;
    public:
        void getdata(){
            static int id = 1;
            cin >> name >> age >> publications;
            cur_id = id++;
        }
        void putdata(){
            cout << name << " " << age << " " << publications << " " << cur_id << '\n';
        }
};

class Student : public Person{
    int marks[6];
    int cur_id;
    public:
        void getdata(){
            static int id = 1;
            cin >> name >> age;
            for (size_t i = 0; i < 6; i++){
                cin >> marks[i];
            }
            cur_id = id++;
        }
        void putdata(){
            int sum = 0;
            for (size_t i = 0; i < 6; i++){
                sum += marks[i];
            }
            cout << name << " " << age << " " << sum << " " << cur_id << '\n';
        }
};

int main(){

    int n, val;
    cin>>n; //The number of objects that is going to be created.
    Person *per[n];

    for(int i = 0;i < n;i++){

        cin>>val;
        if(val == 1){
            // If val is 1 current object is of type Professor
            per[i] = new Professor;

        }
        else per[i] = new Student; // Else the current object is of type Student

        per[i]->getdata(); // Get the data from the user.

    }

    for(int i=0;i<n;i++)
        per[i]->putdata(); // Print the required output for each object.

    return 0;

}