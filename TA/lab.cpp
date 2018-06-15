#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
#include <time.h>
#include <bits/stdc++.h>

using namespace std;

const int n = 100; // кількість генів
const int ln = 100;// довжина кожного гену
const double mute_posib = 0.05*RAND_MAX;// ясно...
const int p = 150;// max capacity

vector<pair<int, int>> base;

struct node
{
    string str;
    int diff;
    int cost;
};

const bool operator < (node a, node b)
{
    if(abs(a.diff) < abs(b.diff)) return 1;
    if(abs(a.diff) > abs(b.diff)) return 0;
    if(a.diff == -b.diff)
        return a.diff < b.diff;
    return a.cost > b.cost;
}

typedef vector<node> noctor;

noctor population;

void calculate(int pos)
{
    int cnt = 0;
    int cost = 0;
    for(int i = 0; i < ln; i++)
    {
        cnt += population[pos].str[i]*base[i].first;
        cost += population[pos].str[i]*base[i].second;
    }
    population[pos].diff = cnt-p;
    population[pos].cost = cost;
}

void init()
{
    population.resize(n);
    base.resize(ln);
    for(int i = 0; i < ln; i++)
    {
        base[i] = {rand()%19+2, rand()%10+1};
        for(int j = 0; j < n; j++)
            population[j].str.push_back(i==j);
    }
    for(int i = 0; i < n; i++)
        calculate(i);
}

void mute(int pos)
{
    int x = rand()%ln;
    population[pos].str[x] ^= 1;
    calculate(pos);
}

void mutation()
{
    noctor buff = population;
    for(int i = 0; i < n; i++)
        if(i > 20)
        {
            //cerr << '!';
            int i1 = rand()%n;
            int i2 = rand()%n;
            int pos = rand()%ln;
            string s1 = buff[i1].str.substr(pos);
            //cerr << population[i].str.length() << ' ' << buff[i1].str.substr(0, pos).length() + buff[i2].str.substr(pos, n-pos).length() << '\n';
            population[i].str = buff[i1].str.substr(0, pos) + buff[i2].str.substr(pos, n-pos);
            if(rand() > mute_posib)
                mute(i);
            calculate(i);
        }
    sort(population.begin(), population.end());
}

int main()
{
	srand(unsigned(time(NULL)));
	//string s = "0123456789qwerty";
	//int n = 10;
	//int pos = 4;
	//cout << s.substr(pos, )
	init();
	#define vi vector<int>
	#define pb push_back
	vi a;
	vi b;
    for(int i = 0; i < 30; i++)
    {
        mutation();
        a.pb(population[0].cost);
        b.pb(population.back().cost);
        //cout << "Iterantion #" << i << '\n';
        //cout << "The best solution has differ: " << population[0].diff << " and cost " << population[0].cost << '\n';
        //cout << "The worth solution has differ: " << population.back().diff << " and cost " << population.back().cost << '\n';

    }
    freopen("file.xls", "w", stdout);
    for(auto i:a)
        cout << i << '\n';
    cout << '\n';
    for(auto i:b)
        cout << i << '\n';
}
