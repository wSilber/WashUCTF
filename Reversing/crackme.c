#include <stdio.h>
#include <stdlib.h>
#include <string.h>

unsigned char password[8] = {0xd0, 0xc6, 0xc8, 0x6d, 0x3c, 0xfb, 0xc4, 0xc4};

int main(int argc, char* argv[]){
	if (argc != 2){
		printf("Usage: %s <password>\n", argv[0]);
		return 1;
	}
	
	unsigned char* input = argv[1];
	if (strlen(input) != strlen(password)){
		printf("Incorrect password length\n");
		return 1;
	}
	

	for (int i = 0; i < strlen(input); i++){
		unsigned char x = (unsigned char)(rand() % 255);
		if ((input[i] ^ x) != password[i]){
			printf("Incorrect password\n");
			return 1;
			
		}
	}
	printf("Congratulations!\n");
	return 0;
}


