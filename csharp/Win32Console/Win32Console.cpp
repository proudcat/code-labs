// Win32Console.cpp : Defines the entry point for the console application.
//

#include "stdafx.h"


int _tmain(int argc, _TCHAR* argv[])
{
	volatile int j = 1;
	int i = (++j) + (++j) + (++j);
	printf("i = %d\n", i);

	return 0;
}

