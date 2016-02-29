#include <stdio.h>
#include <string.h>
#include <windows.h>

//test1
//int main(void)
//{
//	__asm
//	{
//		push 0x12345678
//		pop eax
//	}
//
//	return 0;
//}

//test2
//void overflow(){
//	int our = 0;
//	return;
//}
//
//void main(){
//	overflow();
//	return;
//}


//test3
void overflow(char *buf)
{
	char des[5] = "";
	strcpy(des, buf);
	return;
}

void main(int argc, char* argv[])
{
	LoadLibrary("user32.dll");//Kerbase.dll 
	char longbuf[100] = "aaaaaaaaaaaabbbbcccccccccccc";
	overflow(longbuf);
	return;
}