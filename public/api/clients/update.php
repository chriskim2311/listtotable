<?php
$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$phone_number = $_POST['phone_number'];
$wait_start = $_POST['wait_start'];
$wait_end = $_POST['wait_end'];
$table_size = $_POST['table_size'];


$query = "UPDATE clients SET first_name = '$first_name' WHERE last_name = '$last_name'";

if (mysqli_query($conn, $query)){
    $output['success'] = true;
} else {
    $output['message'] = 'No Error';
}

?>