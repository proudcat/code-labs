#include <stdlib.h>
#include <stdio.h>
#include	<sys/socket.h>	/* basic socket definitions */
#include	<netinet/in.h>	/* sockaddr_in{} and other Internet defns */
#include <string.h>
// #include	<netinet/in.h>	/* sockaddr_in{} and other Internet defns */


#define	MAXLINE		4096	/* max text line length */
#define	SA	struct sockaddr

void err_quit(char* msg){
	printf("%s\n", msg);
	exit(1);
}

int main(int argc, char **argv)
{
	int					sockfd, n;
	char				recvline[MAXLINE + 1];
	struct sockaddr_in	servaddr;

	if (argc != 2)
		err_quit("usage: a.out <IPaddress>");//129.6.15.30

	if ( (sockfd = socket(AF_INET, SOCK_STREAM, 0)) < 0)
		err_quit("socket error");

	bzero(&servaddr, sizeof(servaddr));
	servaddr.sin_family = AF_INET;
	servaddr.sin_port   = htons(13);	/* daytime server */
	if (inet_pton(AF_INET, argv[1], &servaddr.sin_addr) <= 0)
		err_quit("inet_pton error");

	if (connect(sockfd, (SA *) &servaddr, sizeof(servaddr)) < 0)
		err_quit("connect error");

	while ( (n = read(sockfd, recvline, MAXLINE)) > 0) {
		recvline[n] = 0;	/* null terminate */
		if (fputs(recvline, stdout) == EOF)
			err_quit("fputs error");
	}

	if (n < 0)
		err_quit("read error");

	exit(0);
}
