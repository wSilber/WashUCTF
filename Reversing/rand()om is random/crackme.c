#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define PASSLEN 8


int checkPass(char* input){
	//unsigned char password[8] = {0xd0u, 0xc6u, 0xc8u, 0x6du, 0x3cu, 0xfbu, 0xc4u, 0xc4u};
	unsigned char password[8] = {208, 198, 200, 109, 60, 251, 196, 196};
	for (int i = 0; i < PASSLEN; i++){
		unsigned char x = (unsigned char)(rand() % 255);
		if ((input[i] ^ x) != password[i]){
			return 0;
			
		}
	}
	return 1;

}

int main(int argc, char* argv[]){
	if (argc != 2){
		printf("Usage: %s <password>\n", argv[0]);
		return 1;
	}
	
	unsigned char* input = argv[1];
	if (strlen(input) != PASSLEN){
		printf("Incorrect password length\n");
		return 1;
	}
	
	if (!checkPass(input)){
		printf("Incorrect password\n");
		return 1;
	}

	printf("Congratulations!\n");
	return 0;
}


