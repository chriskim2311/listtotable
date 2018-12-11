<?php


$postdata = file_get_contents("php://input");
$_POST = json_decode($postdata, true);

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


$query = "DELETE FROM clients WHERE phone_number = $phone_number";

if (mysqli_query($conn, $query)){
    $output['success'] = true;
} else {
    $output['message'] = 'No Error';
}

?>