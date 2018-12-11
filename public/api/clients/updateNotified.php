<?php


$postdata = file_get_contents("php://input");
$_POST = json_decode($postdata, true);


$phone_number = intval($_POST['phone_number']);
$status = $_POST['status'];


$query = "UPDATE clients SET status = 3 WHERE phone_number = '$phone_number'";

if (mysqli_query($conn, $query)){
    $output['success'] = true;
} else {
    $output['message'] = 'No Error';
}

?>