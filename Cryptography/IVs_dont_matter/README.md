# IVs Don't Matter, Right?

## Challenge Description

Your buddy is showing off his new OFB mode block cipher system. He was even nice enough to encrypt a message for you.

He is so confident in his encryption system that he sent you the password to his email, encrypted with his system of course. Prove him wrong

## Solution

We are provided with the plaintext and ciphertext of one message, as well as the ciphertext of the email password. The title of the challenge is a hint that the vulnerability in the encryption system is related to IVs. Specifically, it is the issue of IV reuse.

Due to the way the OFB block cipher mode operates, if IVs are reused it introduces a significant security vulnerability. The ciphertext is the XOR of the plaintext with a key stream that depends on the key and IV. If the key and IV are the same every time, then the key stream is the same every time. Consider a key stream K, plaintexts P1 and P2 and their corresponding ciphertexts C1 and C2. If `P1 ^ K = C1` then `P1 ^ C1 = K`. `C2 ^ K = P2`, therefore `C2 ^ (P1 ^ C1) = P2`. If we have a known plaintext and ciphertext, we can XOR them together and XOR the result with another ciphertext to obtain the plaintext we are looking for.

By XORing our message with our encrypted message and XORing the result with the encrypted password, we obtain the password `d0nt_r3us3_ivs_1ts_bad`, which gives us our flag.

## Flag: flag{d0nt_r3us3_ivs_1ts_bad}
