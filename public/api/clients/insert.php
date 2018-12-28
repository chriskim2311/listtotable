<?php


$postdata = file_get_contents("php://input");
$_POST = json_decode($postdata, true);

$client_name = $_POST['client_name'];
$phone_number = $_POST['phone_number'];
$restaurant_id = $_POST['restaurant_id'];
$restaurant_name = addslashes($_POST['restaurant_name']);
$wait_start = $_POST['wait_start'];
$table_size = $_POST['table_size'];
$comments = $_POST['comments'];
$status = $_POST['status'];



$query = "INSERT INTO clients (client_name, phone_number, restaurant_id, restaurant_name, wait_start, table_size, comments, status ) VALUES ('$client_name', $phone_number, '$restaurant_id','$restaurant_name', NOW(), '$table_size', '$comments', '$status' )";

$output['query'] = $query;

if (mysqli_query($conn, $query)){
$output['success'] = true;
} else {
$output['message'] = 'No Error';
}
print(json_encode($output)); exit();
?>