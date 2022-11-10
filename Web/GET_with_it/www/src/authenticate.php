<?php

$redirect = $_ENV['URL'];

$username = $_GET['username'];
$password = $_GET['password'];

// Authenticate the user using the command line program
$validate = exec("authenticate ".$username." p ".$password);

echo $validate;

// Send the user error if authenticate returned false
if($validate == FALSE)
{
    header("Location: http://3.136.112.49:4000?ERROR=You%20are%20not%20an%20admin&username=".$username."&password=".$password);
    die();
}

header("Location: ".$redirect."?ERROR=You%20are%20the%20admin&username=".$username."&password=".$password);
die();



?>