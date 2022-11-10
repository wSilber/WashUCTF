# Read in my super secret flag
file = open("flag.txt", 'r')
flag = file.read()

# selfcrypto: Encrypts an arbitrary plaintext using a foolproof method.
def selfcrypto(plaintext):
    if(len(plaintext) %2 == 1):
        plaintext += '0'

    byte = ''.join([chr(ord(plaintext[i]) + ((ord(plaintext[i + 1]) << 8) ^ (ord(plaintext[i]) << 8))) for i in range(0, len(flag), 2)])
    print(byte)
    
selfcrypto(flag)