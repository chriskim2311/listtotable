<?php


$postdata = file_get_contents("php://input");
$_POST = json_decode($postdata, true);


$restaurant_ID = $_POST['restaurant_ID'];
$email = $_POST['email'];
$password = sha1($_POST['password']);
$restaurant_name = $_POST['restaurant_name'];
$created = $_POST['created'];
$restaurant_address = $_POST['restaurant_address'];

$query = "UPDATE restaurant_users SET username = '$username' WHERE email = '$email'";

if (mysqli_query($conn, $query)){
    $output['success'] = true;
} else {
    $output['message'] = 'No Error';
}

?>