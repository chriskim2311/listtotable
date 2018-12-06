<?php
$client_name = $_POST['client_name'];
$phone_number = $_POST['phone_number'];
$restaurant_id = $_POST['restaurant_id'];
$restaurant_name = $_POST['restaurant_name'];
$wait_start = $_POST['wait_start'];
$wait_end = $_POST['wait_end'];
$table_size = $_POST['table_size'];
$comments = $_POST['comments'];


$query = "UPDATE clients SET table_size = '$table_size' WHERE client_name = '$client_name'";

if (mysqli_query($conn, $query)){
    $output['success'] = true;
} else {
    $output['message'] = 'No Error';
}

?>