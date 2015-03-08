#include <stdio.h>
#include <ctype.h>
#include "a.h"

void print_seperator_line(){
	printf("\n%s\n", "-----------------------");
	fflush(stdout);
}

void print_size(){
	printf("sizeof(int)=%i\n", sizeof(int));
	printf("sizeof(char)=%i\n", sizeof(char));
	printf("sizeof(short)=%i\n", sizeof(short));
	printf("sizeof(long)=%i\n", sizeof(long));
	printf("sizeof(float)=%i\n", sizeof(float));
	printf("sizeof(double)=%i\n", sizeof(double));
    print_seperator_line();

	int fib[10];
	printf("%s\n", "int fib[10];");
	printf("sizeof(fib)=%i\n", sizeof(fib));
	printf("sizeof(*fib)=%i\n", sizeof(*fib));
	print_seperator_line();

	int *ptr_int = NULL;
	printf("%s\n", "int *ptr_int = NULL;");
	printf("sizeof(ptr_int)=%i\n", sizeof(ptr_int));
	printf("sizeof(*ptr_int)=%i\n\n", sizeof(*ptr_int));

	char *ptr_char = NULL;
	printf("%s\n", "int *ptr_char = NULL;");
	printf("sizeof(ptr_char)=%i\n", sizeof(ptr_char));
	printf("sizeof(*ptr_char)=%i\n\n", sizeof(*ptr_char));
	print_seperator_line();
}

void operator_demo(){
	printf("~1:%i\n", ~1);
	printf("~1:%x\n", ~1);

	signed char c1 =-128;
	signed char c2 = 127;
	signed char c3 = -1;
	printf("-128:%x\n", c1);
	printf("127:%x\n", c2);
	printf("-1:%x\n", c3);
}

void array_demo(){
	int fib[15] ,i;
	fib[0] = 0;
	fib[1] = 1;
	for (i = 2; i < 15; ++i)
	{
		fib[i]=fib[i-2] + fib[i-1];
	}

	for (i = 0; i < 15; ++i)
	{
		printf("%i\n", fib[i]);
	}
}

typedef struct date{
    int month;
    int day;
    int year;
} date;

void struct_demo(){
   date today = {7,21,2001};
   date temp = today;
   
   today.month = 8;
   printf("%i\n", temp.month);
   printf("%i\n", today.month);

	//struct date yesterday = {.month=7,.day=21,.year=2001};
}

void ptr_demo(){
	int count = 10,x;
	int *int_ptr;
	int_ptr = &count;
	x = *int_ptr;
	printf("count = %i,x=%i,int_ptr=%i\n", count,x,*int_ptr);

	count = 20;
	printf("count = %i,x=%i,int_ptr=%i\n", count,x,*int_ptr);

	date today = {7,21,2001};
	date *ptr_date = &today;

	printf("(*ptr_date).month=%i\n", (*ptr_date).month);
	printf("ptr_date->month=%i\n", ptr_date->month);

}

void oh_shit(){
	//不加volatile的话 i会输出 10
	volatile int j = 1;
	int i = (++j) + (++j) + (++j);
	printf("i = %d\n", i);
}

void preprocess_demo(){
	//printf("%s",__FILE__);
	//printf("%s",__LINE__);
	//printf("%s",__DATE__);
	//printf("%s",__TIME__);
	//printf("%s",__STDC__);
}

#define MAX_BUFFER_LEN 1024
void file_demo(){

	/*
	//read file  
	FILE *input;
	input = fopen("basic.c","r");
	if (input == NULL)
	{
		perror("basic.c");
	}
	
	char ch;
	while((ch = fgetc(input)) != EOF){
		putchar(ch);
		//printf("%c",ch);
	}

	if (fclose(input) != 0)
	{
		perror("fclose");
	}
	*/

	/*
	//write file
	FILE *fp;
	char a[26]="abcdefghijklmnopqrstuvwxyz";
	int i;
	fp= fopen("noexist.txt","w");
	for(i=0;i<26;i++)
		fputc(a[i],fp);
	fclose(fp);
	*/

	/*
	//std in & out
	char s[128];
	fputs(fgets(s,128,stdin),stdout);
	*/
	
}

int main(int argc, char const *argv[])
{
	oh_shit();
	print_seperator_line();
	return 0;
}