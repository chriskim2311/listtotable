<?php


$query = "UPDATE restaurant_users SET username = '$username' WHERE email = '$email'";

if (mysqli_query($conn, $query)){
    $output['success'] = true;
} else {
    $output['message'] = 'No Error';
}

?>