#include <stdio.h>
#include <string.h>

int main(int argc, char const *argv[])
{

	const char* OPERATIONS = "+-*/";
	const char* QUIT_SIGNAL = "quit";

	char str[5];
	double x;
	double y;
	double z;

	do{

			printf("計算の種類を入力してください(入力:+-*/ quit):");
			scanf("%s", str);
        
            if (0==strcmp(str,QUIT_SIGNAL)) {
                break;
            }

			printf("数値を１つ入力ください:");
			scanf("%lf", &x);

			printf("数値をもう１つ入力ください:");
			scanf("%lf", &y);

			printf("計算結果:%f\n",x+y);


	}while(1);


	return 0;
}
