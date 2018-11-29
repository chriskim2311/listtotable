<?php

$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$phone_number = $_POST['phone_number'];
$wait_start = $_POST['wait_start'];
$wait_end = $_POST['wait_end'];
$table_size = $_POST['table_size'];

$query = "INSERT INTO clients (first_name, last_name, phone_number, wait_start, wait_end, table_size) VALUES ('$first_name', '$last_name', '$phone_number', '$wait_start', '$wait_end', '$table_size')";

if (mysqli_query($conn, $query)){
$output['success'] = true;
} else {
$output['message'] = 'No Error';
}

?>