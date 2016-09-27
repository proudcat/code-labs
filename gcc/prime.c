#include "stdio.h"
#include "math.h"

int main(int argc, char const *argv[])
{
	int counter = 0;

	int i, j;

	for (int i = 2; i <= 100; i++)
	{
		for (j = 2; j < i; j++)
		{
			if (i % j == 0)
				break;
		}
		if (j == i)
		{
			counter++;
			printf("%3d : %3d\n", counter,i);
		}
	}
	return 0;
}
