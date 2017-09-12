#include <stdio.h>

char format[] = "%s %s\n";
char hello[] = "Hello";
char world[] = "World";

int main(void)
{
	//stdcall
	//1）参数从右向左压入堆栈
	//2）函数自身修改堆栈
	//3) 函数名自动加前导的下划线，后面紧跟一个@符号，其后紧跟着参数的尺寸。

	//cdecl 默认的。
	//1）参数从右向左压入堆栈。
	//2）函数本身不清理堆栈，调用者负责清理堆栈。

	__asm
	{
		mov  eax, offset world
		push eax
		mov  eax, offset hello
		push eax
		mov  eax, offset format
		push eax
		call printf
		pop  ebx
		pop  ebx
		pop  ebx
	}

	//printf("%s %s\n", "Hello","World");

	getchar();
	return 0;
}