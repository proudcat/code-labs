#include <iostream>
#include "stdio.h"

extern "C" {
	#include "Lib.h"
}

using namespace std;

int main(int argc, char const *argv[])
{
	foobar(1);
	cout<<"hello"<<endl;
	printf("world");
	return 0;
}