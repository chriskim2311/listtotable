<?php
$restaurant_ID = $_POST['restaurant_ID'];
$username = $_POST['username'];
$email = $_POST['email'];
$password = sha1($_POST['password']);
$status = $_POST['status'];
$last_accessed = $_POST['last_accessed'];
$created = $_POST['created'];
$comments = $_POST['comments'];

$query = "UPDATE restaurant_users SET username = '$username' WHERE email = '$email'";

if (mysqli_query($conn, $query)){
    $output['success'] = true;
} else {
    $output['message'] = 'No Error';
}

?>