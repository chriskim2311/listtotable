<?php

$client_name = $_POST['client_name'];
$phone_number = intval($_POST['phone_number']);
$restaurant_id = $_POST['restaurant_id'];
$restaurant_name = addslashes($_POST['restaurant_name']);
$wait_start = $_POST['wait_start'];
$wait_notify = $_POST['wait_notify'];
$wait_end = $_POST['wait_end'];
$table_size = $_POST['table_size'];
$comments = $_POST['comments'];
$status = $_POST['status'];


$query = "INSERT INTO clients (client_name, phone_number, restaurant_id, restaurant_name, wait_start, wait_notify, wait_end, table_size, comments, status ) VALUES ('$client_name', $phone_number, '$restaurant_id','$restaurant_name','$wait_start', '$wait_notify', '$wait_end', '$table_size', '$comments', '$status' )";

echo $query;

if (mysqli_query($conn, $query)){
$output['success'] = true;
} else {
$output['message'] = 'No Error';
}

?>