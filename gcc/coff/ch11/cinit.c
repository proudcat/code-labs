/* cinit.c
page 318
*/
#include <stdio.h>
#include <stdlib.h>

int a = 1;

int main(int argc, char** argv)
{
  int * p=(int *) malloc(sizeof(int));
  scanf("%d", p);
	printf("sum = %d\n", a + *p);
	free(p);
	
	return 0;
}
