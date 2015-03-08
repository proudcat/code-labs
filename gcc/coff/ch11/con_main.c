/* con_main.c
page 362
*/
#include <stdio.h>

void my_init() __attribute__ ((constructor)) ;

void my_init()
{
    printf("Hello ");
}

typedef void (*ctor_t)(void);


int main()
{
    printf("World!\n");
    return 0;
}
