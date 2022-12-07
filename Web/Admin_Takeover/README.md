# Admin Takeover

## Challenge Description

I overheard a conversation that this admin page uses a command line program to authenticate the user. See if you can exploit this to get the flag.

[http://3.136.112.49:4000/](http://3.136.112.49:4000/)

## Solution

The challange presents a login screen to the user. As the description states, a command line program is used to authenticate the user. 

This page is vulnerable to command injection. The password input from the user is placed into a command string which is passed to the PHP `exec()` function. We can include our own shell command by ending the password with `" ; <command>"`, as the semicolon closes the previous command and allows our input to be executed as a new command.

The flag is held on the server in the environment variables. Since the flag is stored here, the user can use anything for the username and can end the password with `" ;env"` to print out the environment variables, giving the flag.

### flag{G37_S3SS10N_178236}
