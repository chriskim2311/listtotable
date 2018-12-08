<?php

$token = '';
if(!empty($_COOKIE['phpcookie'])){
    $token = $_COOKIE['phpcookie'];
}

$query = "SELECT r_users_ID FROM connections WHERE token = '{$token}'";

$result = mysqli_query($conn, $query);

if($result){
    if(mysqli_num_rows($result)>0){
        print("you are logged in");
        exit();
    }
}
print("you are not logged in");

?>