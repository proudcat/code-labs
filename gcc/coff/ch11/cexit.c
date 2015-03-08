/* cexit.c
page 319
*/
#include <stdio.h>

void foo()
{
	printf("Bye!\n");
}

int main(int argc, char** argv)
{
  atexit(&foo);
	printf("End of Main\n");
	
	return 0;
}
