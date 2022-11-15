# Self Made II Solution

Professory Ning taught me why my self made encryption algorithm was insecure. Now I know confuse and difuse... confuse and difuse... confuse and difuse... 

## Solution

In this challenge the user is given a python file with a definition of a self made encryption algorithm. From inspection of the selfcrypto method it can be seen that the plaintext is checked for an even length and padded with a '0' character if it has an odd length. The algorithm then XORs two characters at a time and shifts the new character 8 bits to the left. This resulting character is then added to the original character creating a new 2 byte character and appended to a string. This occurs for every two characters in the flag. By reversing this algorithm the flag can be found. 

### Flag: flag{d0_N0t_M4k3_Cryp70_41G0s_182723}