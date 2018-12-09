<?php

$postdata = file_get_contents('php://input');
$_POST = json_decode($postdata, true);

$restaurant_ID = $_POST['restaurant_ID'];
$username = $_POST['username'];
$email = $_POST['email'];
$password = sha1($_POST['password']);
$status = $_POST['status'];
$comments = $_POST['comments'];

$query = "INSERT INTO restaurant_users (restaurant_ID, username, email, password, status, last_accessed, created, comments) VALUES ('$restaurant_ID', '$username', '$email', '$password', '$status', NULL,NULL, '$comments')";

if (mysqli_query($conn, $query)){
    $output['success'] = true;
} else {
    $output['message'] = 'No Error';
}

?>