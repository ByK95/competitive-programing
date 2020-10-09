// https://www.hackerrank.com/challenges/cpp-class-template-specialization/problem
#include <bits/stdc++.h>

using namespace std;

#define REP(i,a,b) for (int i = a; i <= b; i++)
#define RP(i,a,b) for (int i = a; i < b; i++)
#define REN(i,b) for (int i = b - 1; i >= 0; i--)
#define PV(x) cout << #x"=" << x << '\n'

enum class Fruit { apple, orange, pear };
enum class Color { red, green, orange };

template <typename T> struct Traits;

template <typename T> struct Traits
{
    static std::string name(int index) { return "unknown"; }
};

template<> struct Traits<Fruit>
{
    static std::string name(int index)
    {
        switch((Fruit)index) {
        case Fruit::apple:      return "apple";
        case Fruit::orange:     return "orange";
        case Fruit::pear:       return "pear";
        default:                return "unknown";
        }
    }
};

template<> struct Traits<Color>
{
    static std::string name(int index)
    {
        switch((Color)index) {
        case Color::red:        return "red";
        case Color::green:      return "green";
        case Color::orange:     return "orange";
        default:                return "unknown";
        }
    }
};


int main()
{
	int t = 0; std::cin >> t;

    for (int i=0; i!=t; ++i) {
        int index1; std::cin >> index1;
        int index2; std::cin >> index2;
        cout << Traits<Color>::name(index1) << " ";
        cout << Traits<Fruit>::name(index2) << "\n";
    }
}
