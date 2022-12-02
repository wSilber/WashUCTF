# GET With It Solution

I overheard a conversation that this admin page uses a command line program to authenticate the user. See if you can exploit this to get the flag.

[http://3.136.112.49:3000/](http://3.136.112.49:4000/)

## Solution

The flag is currently held on the server in the env. In the PHP the program authenticates the user using the exec() function passing in the username and password as arguments. Since the flag is stored in the environment, the user can use anything for the username and can end the password with " ;env" to print out the environment.

### flag{G37_S3SS10N_178236}