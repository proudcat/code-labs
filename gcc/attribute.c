#include <stdio.h>

void init() __attribute__((constructor));

void init(){
	printf("%s", "hello ");
}

int main(int argc, char const *argv[])
{
	printf("%s\n", "world !");
	return 0;
}