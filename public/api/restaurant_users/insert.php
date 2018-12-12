<?php


$postdata = file_get_contents("php://input");
$_POST = json_decode($postdata, true);

$restaurant_ID = $_POST['restaurant_ID'];
$email = $_POST['email'];
$password = sha1($_POST['password']);
$restaurant_name = $_POST['restaurant_name'];
$created = $_POST['created'];
$restaurant_address = $_POST['restaurant_address'];


$query = "INSERT INTO restaurant_users (restaurant_ID, email, password, restaurant_name, restaurant_address) VALUES ('$restaurant_ID', '$email', '$password', '$restaurant_name', '$restaurant_address')";
$output['query'] = $query;
if (mysqli_query($conn, $query)){
    $output['success'] = true;
} else {
    $output['message'] = mysqli_error($conn);
}

?>