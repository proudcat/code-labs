#include <unistd.h>
#include <string.h>

int main(int argc, char const *argv[])
{
	char buffer[64];
	char* err_message = "open file error\n";
	char* suc_message = "open file success\n";

	int fd = open("a.c",0,0);
	if (fd == -1)
	{
		write(0,err_message,strlen(err_message));
		return -1;
	}

	write(0,suc_message,strlen(suc_message));
	read(fd,buffer,64);
	close(fd);
	return 0;
}