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

$query = "SELECT * FROM clients WHERE status = 1 AND restaurant_id = '$restaurant_id'";

$result = mysqli_query($conn, $query);

if (mysqli_num_rows($result)>0) {
    while($row = mysqli_fetch_assoc($result)) {
        $output['clients'][] = $row;
    }
    $output['success'] = true;
} else {
    $output['message'] = 'No users found';
}

?>