#include "assert.h"
#include "stdio.h"

#define Assert(a,b) assert(a && b)

//embeded more info
void foo(int a,int b){
	//a should not be zero.
	assert(a != 0 && "a is zero");
	assert(b != 0 && "b is zero");
}

//more than assert(0)
void bar(){
	assert(!"this situation should not be happen.");
}

//more friendly
void zoo(int* c){
	Assert(c != 0,"zoo:c should not be zero");
}

int main(int argc, char const *argv[])
{
	foo(1,2);
	zoo(NULL);

	// bar();
	return 0;
}