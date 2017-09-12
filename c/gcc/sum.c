#include "stdio.h"
int main(int argc, char const *argv[])
{
	printf("input a number (>1) : ");

	int n;
	scanf("%d",&n);

	int sum = 0;

	for (int i = 1; i <= n ; i++) {
		sum += i;
	}

	printf("sum 1 to %d = %d",n,sum );
	return 0;
}
