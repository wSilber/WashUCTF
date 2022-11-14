import random

keys = []

# Read in my super secret flag
file = open("flag.txt", 'r')
flag = file.read()

# gen_key: Generates a random key of n bytes long
def gen_key(n):
    key = ""

    for i in range(n):
        key += chr(random.randint(0, 256))

    return key

# xor: XORs two strings together
def xor(v1, v2):
    return ''.join([chr(ord(v1[i]) ^ ord(v2[i])) for i in range(len(v1))])

# swap: Swaps two strings
def swap(s1, s2):
    return (s2, s1)

#selfFeistel: Computes n rounds of a feistel network with given inputs
def feistel(plaintext, n, decrypt=0):
    if(len(plaintext) % 2 == 1):
        plaintext += '0'

    half = int(len(plaintext) / 2)
    
    left = plaintext[half:]
    right = plaintext[:half]
    key = ""

    for i in range(0, n):
        if decrypt == 0:
            key = gen_key(len(left))
        else:
            key = keys[n - i - 1]

            print("KEY: "+key)
        left = xor(left, key)
        
        left, right = swap(left, right)
        keys.append(key)

    return left + right

print(keys)
k = feistel(flag, 20)
k = feistel(k, 20, 1)
print(k)