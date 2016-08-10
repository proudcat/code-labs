#include "stdio.h"
int main(int argc, char const *argv[])
{
	int n = 1;

	while (n <= 1) {
		printf("input a number (>1) : ");
		scanf("%d", &n);
		getchar();
	}

	int sum = 0;

	for (int i = 1; i <= n; i++) {
		sum += i;
	}

	printf("sum 1 to %d = %d", n, sum);
	return 0;
}
