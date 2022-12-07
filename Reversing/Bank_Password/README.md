# Bank Password Solution

## Challenge Description

This is my American Express password.

059a00192592d5444bc0caad7203f98b506332e2cf7abb35d684ea9bf7c18f08

## Solution

The challenge presents the user with a hashed password. From the flag it can be determined that type of hash is SHA256. The only way to decrypt the password is to use a brute force method using a password cracker such as rockyou. Using hashcat with the rockyou text file will eventually get to the solution.

 hashcat -a 0 -m 17400 hash.hash rockyou.txt --show
 059a00192592d5444bc0caad7203f98b506332e2cf7abb35d684ea9bf7c18f08:1qaz2wsx

### flag{1qaz2wsx}
