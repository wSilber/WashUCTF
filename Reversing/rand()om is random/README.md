# rand()om is Random

## Challenge Description

This program is so secure that no one can log in, because the password changes every time! Right?

The flag is of format flag{password}

## Solution

We are provided a compiled binary and its assembly dump. Running the program shows a usage message which lets us know that we must provide the password as a command line input.

Studying the assembly of `main()` shows that we check that the number of command line arguments is 2, the length of the password is 8, and then we call `checkPass()` on the input. The methodology for reversing this code is outside of the scope of this solution.

Looking at `checkPass()`, we see that several values are loaded onto the stack. We then see a loop, in which every iteration we call `rand()` and move the value 255 onto the stack. We calculate `rand() % 255`, and XOR this value with each character of the input password one by one, comparing it to the values loaded onto the stack at the beginning of the function. If they are all equal, then the function returns true.

If we are XORing our input with random numbers, then how could we possibly input the correct password? In this code, `rand()` is not seeded, so the values are the same every time. In order to obtain the password, we may write another C program where we XOR the stack values with the values we receive from the random function, which will give us the correct password.

## Flag: flag{sQj8oE58}
