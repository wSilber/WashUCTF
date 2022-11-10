file = open("flag.txt", 'r')
flag = file.read()

def selfcrypto(plaintext):
    byte = ''.join([chr(ord(plaintext[i])) for i in range(0, len(flag), 1)])
    print(byte)
    # if(len(plaintext) % 2 != 0):
        # plaintext += 
selfcrypto(flag)