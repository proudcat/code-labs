/* cjmp.c
page 340
*/
#include <stdio.h>
#include <setjmp.h>

jmp_buf b;
void f()
{
  longjmp(b, 1);
}

int main(int argc, char** argv)
{
  if (setjmp(b))
    printf("World!");
  else
  {
	  printf("Hello ");
	  f();
	}
	
	return 0;
}
